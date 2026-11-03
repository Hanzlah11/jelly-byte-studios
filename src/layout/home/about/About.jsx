import React from 'react'
import "./About.css"
import aboutChar from "../../../assets/Avatars/About-char.png"
import Button from "../../../components/button/Button"
import AboutCard from "../../../components/about-card/AboutCard"
import useScrollReveal from '../../../hooks/useScrollReveal'

const About = () => {
    const upperReveal = useScrollReveal({ threshold: 0.15 });
    const lowerHeadingReveal = useScrollReveal({ threshold: 0.2 });
    const cardsReveal = useScrollReveal({ threshold: 0.1 });

    return (
        <div id='About'>
            <div className="about-upper" ref={upperReveal.ref}>
                <div className={`about-upper-left reveal-fade-left ${upperReveal.isVisible ? 'revealed' : ''}`}>
                    <div className="about-background-shape shape-1"></div>
                    <div className="about-background-shape shape-2"></div>
                    <img src={aboutChar} alt="JellyByte character" className="about-char-img" />
                </div>
                <div className={`about-upper-right reveal-fade-right ${upperReveal.isVisible ? 'revealed' : ''}`}>
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
                <div
                    ref={lowerHeadingReveal.ref}
                    className={`about-lower-heading reveal-fade-up ${lowerHeadingReveal.isVisible ? 'revealed' : ''}`}
                >
                    FROM PIXELS TO PLAYABLE
                </div>
                <div
                    ref={cardsReveal.ref}
                    className={`about-lower-cards ${cardsReveal.isVisible ? 'cards-revealed' : ''}`}
                >
                    <div className={`reveal-fade-up ${cardsReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0s' }}>
                        <AboutCard
                            icon="X"
                            heading="GAME DEVELOPMENT"
                            description="Full-cycle development from engine architecture to final deployment across all major platforms."
                        />
                    </div>
                    <div className={`reveal-fade-up ${cardsReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.12s' }}>
                        <AboutCard
                            icon="X"
                            heading="GAME DESIGN"
                            description="Crafting engaging mechanics, deep progression systems, and unforgettable narrative arcs."
                        />
                    </div>
                    <div className={`reveal-fade-up ${cardsReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.24s' }}>
                        <AboutCard
                            icon="X"
                            heading="ART & VISUALS"
                            description="World-class 2D/3D assets, UI/UX design, and cinematic lighting that defines your game's soul."
                        />
                    </div>
                    <div className={`reveal-fade-up ${cardsReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.36s' }}>
                        <AboutCard
                            icon="X"
                            heading="TECH & ENGINEERING"
                            description="Optimization, custom shader development, and robust multiplayer backend infrastructure."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
