import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <div id='Footer'>
        <div className="footer-left">
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
        <div className="footer-mid">
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
        <div className="footer-right">
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
