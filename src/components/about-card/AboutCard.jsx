import React from 'react'
import "./AboutCard.css"

const AboutCard = ({ icon, heading, description }) => {
  return (
    <div id='About-Card'>
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
