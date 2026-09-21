import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useAuth } from '../../contexts/AuthContext';
import './Profile.css';

// Import generated assets
import avatarImg from '../../assets/profile_avatar.png';
import gameChaosImg from '../../assets/game_chaos_protocol.png';
import gameNeonImg from '../../assets/game_neon_runners.png';
import gamePixelImg from '../../assets/game_pixel_rebellion.png';

const Profile = () => {
  const { currentUser, userProfile, linkAccount, unlinkAccount } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlatform, setModalPlatform] = useState(null);
  const [modalInputHandle, setModalInputHandle] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Route protection: redirect to login if not authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  // Don't render until we confirm user is logged in
  if (!currentUser) {
    return null;
  }

  // Helper to format the "MEMBER SINCE" date
  const formatMemberSince = () => {
    if (!userProfile?.createdAt) return 'MEMBER';

    let date;
    // Firestore Timestamp has a toDate() method
    if (userProfile.createdAt.toDate) {
      date = userProfile.createdAt.toDate();
    } else if (userProfile.createdAt instanceof Date) {
      date = userProfile.createdAt;
    } else {
      // Fallback for serialized date
      date = new Date(userProfile.createdAt);
    }

    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `MEMBER SINCE ${month} ${year}`;
  };

  // Get display values from profile or fallbacks
  const displayName = userProfile?.displayName || currentUser.displayName || currentUser.email?.split('@')[0] || 'USER';
  const username = userProfile?.username || displayName.toLowerCase().replace(/\s+/g, '');
  const email = userProfile?.email || currentUser.email || '';
  const avatarURL = currentUser.photoURL || null;

  return (
    <div className="profile-page-container">
      <Navbar />

      <main className="profile-content">

        {/* Header Card */}
        <section className="profile-card profile-header-v2">
          <div className="profile-header-info-v2">
            <div className="profile-avatar-container-v2">
              <img src={avatarURL || avatarImg} alt={`${displayName} Avatar`} className="profile-avatar-v2" referrerPolicy="no-referrer" />
              <div className="profile-status-dot online"></div>
            </div>

            <div className="profile-details-v2">
              <div className="profile-tags-row">
                <span className="member-since">{formatMemberSince()}</span>
              </div>
              <div className="profile-name-row">
                <p className="profile-name-v2">{displayName.toUpperCase()}</p>
                <span className="profile-handle">@{username}</span>
              </div>
              <div className="profile-specs-row">
                <span>{email}</span>
              </div>
            </div>
          </div>

          <div className="profile-header-actions">
            <button className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              EDIT PROFILE
            </button>
          </div>
        </section>

        {/* Stats Row */}
        <section className="profile-stats-row-v2">
          <div className="profile-card stat-card-v2">
            <div className="stat-header-v2">
              <span className="stat-label-v2">GAMES IN LIBRARY</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><path d="M12 12h.01"></path><path d="M17 12h.01"></path><path d="M7 12h.01"></path></svg>
            </div>
            <p className="stat-value-v2">4 <span className="stat-unit-v2">TITLES OWNED</span></p>
          </div>


          <div className="profile-card stat-card-v2">
            <div className="stat-header-v2">
              <span className="stat-label-v2">TOTAL DOWNLOADS</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>
            <p className="stat-value-v2">18 <span className="stat-unit-v2">PACKAGES</span></p>
          </div>

          <div className="profile-card stat-card-v2">
            <div className="stat-header-v2">
              <span className="stat-label-v2">PLAYTEST ACCESS</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <p className="stat-value-v2 stat-highlight">VERIFIED <span className="stat-unit-v2">TIER 3 ACCESS</span></p>
          </div>
        </section>

        {/* Main Layout Grid */}
        <div className="profile-main-grid-v2">

          {/* Left Column: Game Library */}
          <section className="profile-library-section">
            <div className="section-header-v2">
              <div className="section-title-group">
                <p className="section-title-v2">MY GAME LIBRARY & DOWNLOADS</p>
                <span className="count-badge">4 GAMES</span>
              </div>
              <div className="filter-chips">
                <span className="filter-label">FILTER:</span>
                <button className="filter-chip active">ALL</button>
                <button className="filter-chip">PLAYABLE</button>
                <button className="filter-chip">BETAS</button>
              </div>
            </div>

            <div className="games-list-v2">
              {/* Game 1 */}
              <div className="profile-card game-item-v2">
                <div className="game-card-content">
                  <div className="game-card-left">
                    <img src={gameChaosImg} alt="Chaos Protocol" className="game-cover-v2" />
                  </div>
                  <div className="game-card-center">
                    <div className="game-status-row">
                      <span className="tag-status green">RELEASED</span>
                      <span className="tag-genre">TACTICAL CYBERPUNK ACTION</span>
                    </div>
                    <p className="game-title-v2">CHAOS PROTOCOL</p>
                    <div className="game-version-info">
                      <span className="version-text">v1.4.2 (Latest Patch)</span>
                      <span className="size-text">• 24.5 GB •</span>
                    </div>
                    <div className="steam-key-claimed">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      Steam Key Claimed
                    </div>
                  </div>
                  <div className="game-card-right">
                    <Link to="/releases" className="btn-download-primary">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      VIEW GAME PAGE
                    </Link>
                    <div className="platform-info">
                      Windows x64 / macOS Apple Silicon
                    </div>
                  </div>
                </div>
                <div className="game-card-footer">
                  <div className="platform-tags">
                    <span className="footer-label">PLATFORMS:</span>
                    <span className="platform-tag">PC (Direct DRM-Free)</span>
                    <span className="platform-tag">macOS</span>
                    <span className="platform-tag highlight">Steam Library Linked</span>
                  </div>
                  <a href="#" className="patch-notes-link">Patch Notes (v1.4.2) <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
              </div>

              {/* Game 2 */}
              <div className="profile-card game-item-v2 game-beta-style">
                <div className="game-card-content">
                  <div className="game-card-left">
                    <img src={gameNeonImg} alt="Neon Runners" className="game-cover-v2" />
                  </div>
                  <div className="game-card-center">
                    <div className="game-status-row">
                      <span className="tag-status purple">CLOSED BETA</span>
                      <span className="tag-genre">HIGH-SPEED CYBER PLATFORMER</span>
                      <span className="tag-badge-right">ACTIVE PLAYTEST BUILD</span>
                    </div>
                    <p className="game-title-v2">NEON RUNNERS</p>
                    <div className="game-version-info">
                      <span className="version-text">v0.9.8 Beta Build</span>
                      <span className="size-text">• 12.8 GB •</span>
                    </div>
                    <div className="branch-info">
                      Branch: <span className="branch-code">nightly-netcode-test</span>
                    </div>
                  </div>
                  <div className="game-card-right">
                    <Link to="/releases" className="btn-download-purple">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      VIEW GAME PAGE
                    </Link>
                    <div className="platform-info highlight-green">
                      New experimental branch pushed today
                    </div>
                  </div>
                </div>
                <div className="game-card-footer">
                  <div className="platform-tags">
                    <span className="footer-label">TAGS:</span>
                    <span className="platform-tag">Multiplayer Netcode</span>
                    <span className="platform-tag">Direct Standalone .EXE</span>
                  </div>
                  <div className="footer-links">
                    <a href="#" className="feedback-link"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Submit Feedback</a>
                    <span className="divider">|</span>
                    <a href="#" className="patch-notes-link">Playtest Notes <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                  </div>
                </div>
              </div>

              {/* Game 3 */}
              <div className="profile-card game-item-v2">
                <div className="game-card-content">
                  <div className="game-card-left">
                    <img src={gamePixelImg} alt="Pixel Rebellion" className="game-cover-v2" />
                  </div>
                  <div className="game-card-center">
                    <div className="game-status-row">
                      <span className="tag-status green">DEFINITIVE EDITION</span>
                      <span className="tag-genre">RETRO GLITCH ROGUELIKE</span>
                    </div>
                    <p className="game-title-v2">PIXEL REBELLION</p>
                    <div className="game-version-info">
                      <span className="version-text">v2.0.1 Definitive Hacker Build</span>
                      <span className="size-text">• 4.5 GB •</span>
                    </div>
                    <div className="drm-free-info">
                      DRM-Free Offline Installer
                    </div>
                  </div>
                  <div className="game-card-right">
                    <Link to="/releases" className="btn-download-secondary">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      VIEW GAME PAGE
                    </Link>
                    <div className="platform-info">
                      Includes OST + Digital Artbook
                    </div>
                  </div>
                </div>
                <div className="game-card-footer">
                  <div className="platform-tags">
                    <span className="footer-label">FORMAT:</span>
                    <span className="platform-tag">Windows ZIP</span>
                    <span className="platform-tag">macOS .dmg</span>
                    <span className="platform-tag">Linux .tar.gz</span>
                  </div>
                  <a href="#" className="patch-notes-link">View Backer Rewards <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></a>
                </div>
              </div>

              {/* Game 4 */}
              <div className="profile-card game-item-v2 game-dev-style">
                <div className="game-card-content">
                  <div className="game-card-left">
                    <div className="dev-placeholder-cover">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                    </div>
                  </div>
                  <div className="game-card-center">
                    <div className="game-status-row">
                      <span className="tag-status grey">IN DEVELOPMENT</span>
                      <span className="tag-genre highlight-yellow">UPCOMING STUDIO PROTOTYPE</span>
                    </div>
                    <p className="game-title-v2">PROJECT AETHER</p>
                    <div className="game-version-info">
                      <span className="version-text">Target Release: Q4 2024</span>
                      <span className="size-text">• Unreal Engine 5 Action RPG •</span>
                    </div>
                    <div className="drm-free-info highlight-purple">
                      Pre-Alpha Testing Scheduled
                    </div>
                  </div>
                  <div className="game-card-right">
                    <Link to="/releases" className="btn-download-outline">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      VIEW GAME PAGE
                    </Link>
                    <div className="platform-info highlight-purple">
                      NDA Required on Build Access
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Right Column: Sidebars */}
          <div className="sidebar-column-v2">



            {/* Playtest Feedback */}
            <section className="profile-card sidebar-card">
              <div className="sidebar-header">
                <div className="sidebar-title-group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  <p className="sidebar-title">PLAYTEST FEEDBACK</p>
                </div>
                <span className="sidebar-subtitle highlight-yellow">2 OPEN TASKS</span>
              </div>

              <div className="feedback-list">
                <div className="feedback-item">
                  <div className="feedback-header">
                    <span className="feedback-title">Neon Runners: Netcode Stress Test</span>
                    <span className="feedback-tag tag-open">OPEN</span>
                  </div>
                  <p className="feedback-desc">Report rubber-banding and tick rate jitter on EU-Berlin servers with 8-player lobbies.</p>
                  <div className="feedback-footer">
                    <span className="feedback-deadline">Closes in 4 days</span>
                    <a href="#" className="feedback-action">SUBMIT LOGS <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="feedback-header">
                    <span className="feedback-title">Chaos Protocol: v1.4.2 Gunplay Polish</span>
                    <span className="feedback-tag tag-resolved">RESOLVED</span>
                  </div>
                  <p className="feedback-desc">Submitted bug report #CP-403: "Recoil reset timing on Cyber Shotgun". Dev team status: Resolved in Hotfix.</p>
                  <div className="feedback-footer">
                    <span className="feedback-reward">Reward: +100 Studio Credits</span>
                    <a href="#" className="feedback-action muted">Archived</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Connected Accounts Sidebar */}
            <section className="profile-card sidebar-card">
              <div className="sidebar-header">
                <div className="sidebar-title-group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  <p className="sidebar-title">CONNECTED ACCOUNTS</p>
                </div>
                <span className="sidebar-subtitle">INTEGRATIONS</span>
              </div>

              <div className="accounts-list-v2">
                {/* Steam Account */}
                <div className="account-item-v2">
                  <div className="account-info-v2">
                    <svg className="account-icon-v2" width="20" height="20" viewBox="0 0 24 24" fill={userProfile?.linkedAccounts?.steam ? "#fff" : "#333"} stroke={userProfile?.linkedAccounts?.steam ? "none" : "#888"} strokeWidth={userProfile?.linkedAccounts?.steam ? "0" : "2"}><path d="M12.001 0C5.372 0 0 5.371 0 12c0 2.85 1 5.485 2.668 7.553L6.96 16.51A7.03 7.03 0 0 1 12 19.034c3.882 0 7.031-3.149 7.031-7.034 0-3.88-3.149-7.03-7.03-7.03-3.883 0-7.032 3.15-7.032 7.03l-4.292 3.044c1.171 2.378 3.593 4.022 6.438 4.022 3.935 0 7.126-3.193 7.126-7.126S15.936 4.874 12 4.874c-3.934 0-7.125 3.193-7.125 7.126v.056l3.528 1.488a4.935 4.935 0 0 0-.256-1.544H12c1.921 0 3.484 1.563 3.484 3.484 0 1.922-1.563 3.484-3.484 3.484a3.488 3.488 0 0 1-3.484-3.484v-.086l-4.148-1.748C2.553 15.65 1.5 13.935 1.5 12c0-5.789 4.711-10.5 10.501-10.5s10.5 4.711 10.5 10.5-4.71 10.5-10.5 10.5c-3.18 0-6.027-1.428-7.946-3.682l2.946-2.09c1.378 1.637 3.468 2.68 5.805 2.68 4.142 0 7.5-3.358 7.5-7.5S16.143 4.5 12.001 4.5c-4.142 0-7.5 3.358-7.5 7.5v.1l2.585 1.09c.307-.732 1.026-1.257 1.865-1.257 1.103 0 2 .897 2 2 0 1.103-.897 2-2 2-.84 0-1.558-.525-1.865-1.257l-3.336-1.408c.55 4.417 4.296 7.848 8.877 7.848 4.962 0 8.985-4.023 8.985-8.985 0-4.962-4.023-8.985-8.985-8.985z" /><circle cx="12" cy="12.001" r="1.5" /></svg>
                    <div className="account-details-v2">
                      <span className="account-name-v2">Steam Account</span>
                      <span className={userProfile?.linkedAccounts?.steam ? "account-handle-v2" : "account-handle-v2 disconnected"}>
                        {userProfile?.linkedAccounts?.steam || "Not connected"}
                      </span>
                    </div>
                  </div>
                  {userProfile?.linkedAccounts?.steam ? (
                    <button className="account-status-badge linked" onClick={() => unlinkAccount('steam')} style={{cursor: 'pointer', background: 'transparent', border: 'none', color: '#a3e635'}}>LINKED (x)</button>
                  ) : (
                    <button className="btn-connect" onClick={() => {
                      setModalPlatform('steam');
                      setModalInputHandle('');
                      setIsModalOpen(true);
                    }}>CONNECT</button>
                  )}
                </div>

                {/* Discord Account */}
                <div className="account-item-v2">
                  <div className="account-info-v2">
                    <svg className="account-icon-v2" width="20" height="20" viewBox="0 0 24 24" fill={userProfile?.linkedAccounts?.discord ? "#5865F2" : "#333"} stroke={userProfile?.linkedAccounts?.discord ? "none" : "#888"} strokeWidth={userProfile?.linkedAccounts?.discord ? "0" : "1"}><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                    <div className="account-details-v2">
                      <span className="account-name-v2">Discord Server</span>
                      <span className={userProfile?.linkedAccounts?.discord ? "account-handle-v2" : "account-handle-v2 disconnected"}>
                        {userProfile?.linkedAccounts?.discord || "Not connected"}
                      </span>
                    </div>
                  </div>
                  {userProfile?.linkedAccounts?.discord ? (
                    <button className="account-status-badge linked" onClick={() => unlinkAccount('discord')} style={{cursor: 'pointer', background: 'transparent', border: 'none', color: '#a3e635'}}>LINKED (x)</button>
                  ) : (
                    <button className="btn-connect" onClick={() => {
                      setModalPlatform('discord');
                      setModalInputHandle('');
                      setIsModalOpen(true);
                    }}>CONNECT</button>
                  )}
                </div>

                {/* Epic Games Account */}
                <div className="account-item-v2">
                  <div className="account-info-v2">
                    <svg className="account-icon-v2" width="20" height="20" viewBox="0 0 24 24" fill={userProfile?.linkedAccounts?.epic ? "#fff" : "#333"} stroke={userProfile?.linkedAccounts?.epic ? "none" : "#888"} strokeWidth={userProfile?.linkedAccounts?.epic ? "0" : "2"}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <div className="account-details-v2">
                      <span className="account-name-v2">Epic Games Store</span>
                      <span className={userProfile?.linkedAccounts?.epic ? "account-handle-v2" : "account-handle-v2 disconnected"}>
                        {userProfile?.linkedAccounts?.epic || "Not connected"}
                      </span>
                    </div>
                  </div>
                  {userProfile?.linkedAccounts?.epic ? (
                    <button className="account-status-badge linked" onClick={() => unlinkAccount('epic')} style={{cursor: 'pointer', background: 'transparent', border: 'none', color: '#a3e635'}}>LINKED (x)</button>
                  ) : (
                    <button className="btn-connect" onClick={() => {
                      setModalPlatform('epic');
                      setModalInputHandle('');
                      setIsModalOpen(true);
                    }}>CONNECT</button>
                  )}
                </div>
              </div>
            </section>

          </div>
        </div>

      </main>

      <Footer />

      {/* Connection Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">CONNECT {modalPlatform?.toUpperCase()}</h3>
            <p className="modal-desc">Enter your {modalPlatform} handle or username to link it to your Jellybyte Studios account.</p>
            <input 
              type="text" 
              className="modal-input" 
              placeholder={`e.g. ${modalPlatform}_user123`}
              value={modalInputHandle}
              onChange={(e) => setModalInputHandle(e.target.value)}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter' && modalInputHandle.trim()) {
                  linkAccount(modalPlatform, modalInputHandle.trim());
                  setIsModalOpen(false);
                }
              }}
            />
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>CANCEL</button>
              <button className="btn-submit" onClick={() => {
                if (modalInputHandle.trim()) {
                  linkAccount(modalPlatform, modalInputHandle.trim());
                  setIsModalOpen(false);
                }
              }}>LINK ACCOUNT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
