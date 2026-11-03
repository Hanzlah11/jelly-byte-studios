import React, { useRef, useCallback } from 'react'
import "./AboutCard.css"

const AboutCard = ({ icon, heading, description }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    card.style.setProperty('--spotlight-opacity', '1');
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--spotlight-opacity', '0');
  }, []);

  return (
    <div
      id='About-Card'
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
        <div className="about-card-spotlight"></div>
        <div className="about-card-icon">
            {icon}                  
        </div>
        <div className="about-card-heading">
            {heading}
        </div>
        <div className="about-card-description">
            {description}
        </div>
    </div>
  )
}

export default AboutCard
