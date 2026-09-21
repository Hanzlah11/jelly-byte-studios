import React from 'react'
import './Hero.css'
import Hanzlah from '../../../assets/Avatars/Hanzlah.png'
import Rafay from '../../../assets/Avatars/Rafay.png'
import Haider from '../../../assets/Avatars/Haider.png'
import Mohib from '../../../assets/Avatars/Mohib.png'

const Hero = () => {
     return (
          <div id='Home-Hero'>
               <div className="main-hero-text">
                    JELLYBYTE
               </div>
               <div className="hero-avatar">
                    <img src={Mohib} alt="Mohib" />
                    <img src={Rafay} alt="Rafay" />
                    <img src={Haider} alt="Haider" />
                    <img src={Hanzlah} alt="Hanzlah" />
               </div>
               <div className="studio-text">
                    STUDIOS
               </div>
          </div>
     )
}

export default Hero
