import React from 'react'
import "./About.css"
import Button from "../../../components/button/Button"
import AboutCard from "../../../components/about-card/AboutCard"

const About = () => {
    return (
        <div id='About'>
            <div className="about-upper">
                <div className="about-upper-left">
                    <div className="about-background-shape shape-1"></div>
                    <div className="about-background-shape shape-2"></div>
                </div>
                <div className="about-upper-right">
                    <div className="about-right-heading">
                        WE'RE JELLYBYTE STUDIOS
                    </div>
                    <div className="about-right-description">
                        We don't build generic asset flips. We build worlds. We embrace the weird, push technical boundaries, and obsess over game feel until our keyboards break.
                    </div>
                    <Button text="MEET THE TEAM" textColor="#D8FA1F" padding="12px 17px" to="/about" />
                </div>
            </div>

            <div className="about-lower">
                <div className="about-lower-heading">
                    FROM PIXELS TO PLAYABLE
                </div>
                <div className="about-lower-cards">
                    <AboutCard
                        icon="X"
                        heading="GAME DEVELOPMENT"
                        description="Full-cycle development from engine architecture to final deployment across all major platforms."
                    />
                    <AboutCard
                        icon="X"
                        heading="GAME DESIGN"
                        description="Crafting engaging mechanics, deep progression systems, and unforgettable narrative arcs."
                    />
                    <AboutCard
                        icon="X"
                        heading="ART & VISUALS"
                        description="World-class 2D/3D assets, UI/UX design, and cinematic lighting that defines your game's soul."
                    />
                    <AboutCard
                        icon="X"
                        heading="TECH & ENGINEERING"
                        description="Optimization, custom shader development, and robust multiplayer backend infrastructure."
                    />
                </div>
            </div>
        </div>
    )
}

export default About
