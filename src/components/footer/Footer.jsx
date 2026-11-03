import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import useScrollReveal from '../../hooks/useScrollReveal'

const Footer = () => {
  const footerReveal = useScrollReveal({ threshold: 0.15 });

  return (
    <div id='Footer' ref={footerReveal.ref}>
        <div className={`footer-left reveal-fade-up ${footerReveal.isVisible ? 'revealed' : ''}`}>
            <div className="footer-main-heading">
                JELLYBYTE STUDIOS
            </div>
            <div className="footer-description">    
                Indie games reimagined. We build bold, chaotic, and unforgettable interactive experiences.
            </div>
            <div className="footer-copyright">
                © 2024 JELLYBYTE STUDIOS. ALL RIGHTS RESERVED.
            </div>
        </div>
        <div className={`footer-mid reveal-fade-up ${footerReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.12s' }}>
            <div className="footer-links-heading">
                SOCIALS
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="https://www.instagram.com/jellybytestudios/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                    <li><a href="https://www.instagram.com/jellybytestudios/" target="_blank" rel="noopener noreferrer">DISCORD</a></li>
                    <li><a href="https://www.instagram.com/jellybytestudios/" target="_blank" rel="noopener noreferrer">TIK TOK</a></li>
                    <li><a href="https://www.instagram.com/jellybytestudios/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                </ul>
            </div>
        </div>
        <div className={`footer-right reveal-fade-up ${footerReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.24s' }}>
            <div className="footer-links-heading">
                CONTACT
            </div>
            <div className="footer-links">
                <ul>
                    <li><Link to="/privacy-policy">PRIVACY POLICY</Link></li>
                    <li><Link to="/terms-of-services">TERMS OF SERVICES</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
