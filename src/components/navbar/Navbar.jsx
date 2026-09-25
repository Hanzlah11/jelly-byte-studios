import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/Icons/profile.png'
import favorite from '../../assets/Icons/heart.png'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div id='Navbar'>
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="2" className='jellybyte-logo' />
          <span className='jellybyte-name'>JELLYBUTE STUDIOS</span>
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
        id="hamburger-btn"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>
      )}

      <div className={`mid ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/releases" onClick={closeMobileMenu}>Releases</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>

        {/* Mobile-only profile section */}
        <div className="mobile-profile-section">
          {currentUser ? (
            <>
              <Link to="/profile" className="mobile-profile-link" onClick={closeMobileMenu}>
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="profile"
                    className="mobile-profile-pic"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="mobile-profile-initial">
                    {getUserInitial()}
                  </div>
                )}
                <span className="mobile-profile-name">
                  {currentUser.displayName || currentUser.email?.split('@')[0]}
                </span>
              </Link>
              <Link to="/favorites" className="mobile-profile-link" onClick={closeMobileMenu}>
                <img src={favorite} alt="" className="mobile-fav-icon" />
                <span className="mobile-profile-name">My Favorites</span>
              </Link>
              <button className="mobile-logout-btn" onClick={() => { handleLogout(); closeMobileMenu(); }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="mobile-signin-link" onClick={closeMobileMenu}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Sign In
            </Link>
          )}
        </div>
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
