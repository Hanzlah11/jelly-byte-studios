import React from 'react'
import Button from "../../../components/button/Button"
import GUTN from "../../../assets/game-bgs/GettingUnderTheNerve.png"
import "./Hero.css"

const Hero = () => {
    return (
        <div id='Releases-hero'>
            <div className="releases-background-image">
                <img src={GUTN} alt="" />
            </div>
            <div className="releases-hero-content">
                <div className="releases-hero-title">
                    GETTING UNDER THE NERVE
                </div>
                <div className="releases-hero-description">
                    A brutal precision platformer where every jump tests your patience, reflexes, and sanity. Dodge deadly traps, survive unpredictable mechanics, and conquer levels designed to break you.
                </div>
                <div className="releases-hero-buttons">
                    <Button text="DOWNLOAD NOW" color="#dfff00" padding="20px 30px" href="https://jellybytestudios.itch.io/" />
                    <Button text="VIEW TRAILER" textColor="#dfff00" padding="20px 30px" href="#Trailer" />
                </div>
            </div>
        </div>
    )
}

export default Hero
