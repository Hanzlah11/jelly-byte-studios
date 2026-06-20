import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("jb_user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      localStorage.removeItem("jb_user");
    }
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if user exists in registered users
        const users = JSON.parse(localStorage.getItem("jb_users") || "[]");
        const found = users.find(
          (u) => u.email === email && u.password === password
        );

        if (found) {
          const userData = {
            id: found.id,
            name: found.name,
            email: found.email,
            avatar: found.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase(),
            joinedAt: found.joinedAt,
          };
          setUser(userData);
          localStorage.setItem("jb_user", JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 800);
    });
  };

  const signup = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("jb_users") || "[]");

        // Check if email already exists
        if (users.find((u) => u.email === email)) {
          reject(new Error("An account with this email already exists"));
          return;
        }

        const newUser = {
          id: crypto.randomUUID(),
          name,
          email,
          password,
          joinedAt: new Date().toISOString(),
        };

        users.push(newUser);
        localStorage.setItem("jb_users", JSON.stringify(users));

        const userData = {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          avatar: newUser.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase(),
          joinedAt: newUser.joinedAt,
        };
        setUser(userData);
        localStorage.setItem("jb_user", JSON.stringify(userData));
        resolve(userData);
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jb_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
