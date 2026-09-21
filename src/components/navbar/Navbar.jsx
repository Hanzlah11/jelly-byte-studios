import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/icons/profile.png'
import favorite from '../../assets/icons/heart.png'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
      navigate('/');
    } catch (err) {
      console.error('Failed to log out', err);
    }
  };

  // Get user's initial for avatar fallback
  const getUserInitial = () => {
    if (!currentUser) return '';
    if (currentUser.displayName) return currentUser.displayName.charAt(0).toUpperCase();
    if (currentUser.email) return currentUser.email.charAt(0).toUpperCase();
    return 'U';
  };

  return (
    <div id='Navbar'>
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="2" className='jellybyte-logo' />
          <span className='jellybyte-name'>JELLYBUTE STUDIOS</span>
        </Link>
      </div>
      <div className="mid">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/releases">Releases</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="right" ref={dropdownRef}>
        {currentUser ? (
          <>

            <div
              className="profile-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              id="navbar-profile-trigger"
            >
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt="profile"
                  className="profile-pic"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="profile-initial">
                  {getUserInitial()}
                </div>
              )}
            </div>


            {dropdownOpen && (
              <div className="profile-dropdown" id="profile-dropdown">
                {/* User Info Header */}
                <div className="dropdown-header">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt="profile"
                      className="dropdown-avatar"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="dropdown-avatar-initial">
                      {getUserInitial()}
                    </div>
                  )}
                  <div className="dropdown-user-info">
                    <span className="dropdown-name">
                      {currentUser.displayName || currentUser.email?.split('@')[0]}
                    </span>
                    <span className="dropdown-email">
                      {currentUser.email}
                    </span>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                {/* Menu Links */}
                <Link
                  to="/profile"
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                  id="dropdown-profile-link"
                >
                  <img src={profile} alt="" />
                  My Profile
                </Link>

                <Link
                  to="/favorites"
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                  id="dropdown-favorites-link"
                >
                  <img src={favorite} alt="" />
                  My Favorites
                </Link>

                <div className="dropdown-divider"></div>

                {/* Logout */}
                <button
                  className="dropdown-item dropdown-logout"
                  onClick={handleLogout}
                  id="dropdown-logout-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          /* Guest: default profile silhouette */
          <Link to="/login" className="profile-trigger guest" id="navbar-guest-profile">
            <svg className="guest-avatar" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#3a3a3a" />
              <circle cx="20" cy="15" r="6" fill="#6b6b6b" />
              <ellipse cx="20" cy="32" rx="10" ry="8" fill="#6b6b6b" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
