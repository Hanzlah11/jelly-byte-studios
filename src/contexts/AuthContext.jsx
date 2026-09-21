import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile from Firestore
  const fetchUserProfile = async (uid) => {
    if (!uid) {
      setUserProfile(null);
      return null;
    }

    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const profileData = { uid, ...userSnap.data() };
        setUserProfile(profileData);
        return profileData;
      } else {
        setUserProfile(null);
        return null;
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setUserProfile(null);
      return null;
    }
  };

  // Helper to save user profile to Firestore
  const saveUserProfile = async (user, additionalData = {}) => {
    if (!user) return;
    
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const { email, displayName, photoURL } = user;
      try {
        const profileData = {
          email,
          displayName: additionalData.displayName || displayName || email.split('@')[0],
          username: additionalData.username || additionalData.displayName || displayName || email.split('@')[0],
          photoURL: photoURL || "",
          linkedAccounts: {
            steam: null,
            discord: null,
            epic: null
          },
          createdAt: new Date(),
          ...additionalData
        };
        await setDoc(userRef, profileData);
        setUserProfile({ uid: user.uid, ...profileData });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    } else {
      // Profile already exists, just fetch it
      await fetchUserProfile(user.uid);
    }
  };

  // Update user profile in Firestore
  const updateUserProfile = async (data) => {
    if (!currentUser) return;

    try {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, data);
      // Re-fetch to keep state in sync
      await fetchUserProfile(currentUser.uid);
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };

  const linkAccount = async (platform, handle) => {
    if (!currentUser || !userProfile) return;
    try {
      const userRef = doc(db, "users", currentUser.uid);
      const updatedAccounts = {
        ...userProfile.linkedAccounts,
        [platform]: handle
      };
      await updateDoc(userRef, { linkedAccounts: updatedAccounts });
      await fetchUserProfile(currentUser.uid);
    } catch (error) {
      console.error(`Error linking ${platform} account:`, error);
      throw error;
    }
  };

  const unlinkAccount = async (platform) => {
    if (!currentUser || !userProfile) return;
    try {
      const userRef = doc(db, "users", currentUser.uid);
      const updatedAccounts = {
        ...userProfile.linkedAccounts,
        [platform]: null
      };
      await updateDoc(userRef, { linkedAccounts: updatedAccounts });
      await fetchUserProfile(currentUser.uid);
    } catch (error) {
      console.error(`Error unlinking ${platform} account:`, error);
      throw error;
    }
  };

  async function signup(email, password, displayName = "") {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Save profile to Firestore — don't let this fail the whole signup
    // since the auth account is already created at this point
    try {
      await saveUserProfile(userCredential.user, {
        displayName: displayName || email.split('@')[0],
        username: displayName || email.split('@')[0]
      });
    } catch (profileError) {
      console.error("Auth succeeded but profile save failed:", profileError);
    }
    return userCredential;
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    try {
      await saveUserProfile(result.user);
    } catch (profileError) {
      console.error("Google auth succeeded but profile save failed:", profileError);
    }
    return result;
  }

  function logout() {
    setUserProfile(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserProfile(user.uid);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    login,
    signup,
    loginWithGoogle,
    logout,
    updateUserProfile,
    fetchUserProfile,
    linkAccount,
    unlinkAccount
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
