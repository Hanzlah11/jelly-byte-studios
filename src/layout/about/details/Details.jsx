import React from 'react'
import "./Details.css"
import useScrollReveal from '../../../hooks/useScrollReveal'

const Details = () => {
  const contentReveal = useScrollReveal({ threshold: 0.2 });
  const statsReveal = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="controlled-chaos">
      <div className="chaos-content" ref={contentReveal.ref}>

        {/* Left Side */}
        <div className={`chaos-title reveal-fade-left ${contentReveal.isVisible ? 'revealed' : ''}`}>
          <p>CONTROLLED CHAOS.</p>
          <span></span>
        </div>

        {/* Right Side */}
        <div className={`chaos-description reveal-fade-right ${contentReveal.isVisible ? 'revealed' : ''}`}>
          <p>
            At JellyByte, we don't believe in playing it safe. Our
            philosophy is rooted in the idea that the best interactive
            experiences are born from a willingness to experiment,
            fail, and iterate rapidly. We blend high-performance
            gaming aesthetics with indie sensibilities to create
            worlds that are visually arresting and mechanically deep.
          </p>

          <p>
            Every pixel, every line of code, and every chaotic
            brainstorm session is dedicated to crafting games that
            leave a lasting imprint on the player's mind. Welcome to
            the Nexus.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="chaos-stats" ref={statsReveal.ref}>

        <div className={`stat reveal-fade-up ${statsReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0s' }}>
          <h3>01</h3>
          <p>GAMES IN DEVELOPMENT</p>
        </div>

        <div className={`stat reveal-fade-up ${statsReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <h3>04</h3>
          <p>TEAM MEMBERS</p>
        </div>

        <div className={`stat reveal-fade-up ${statsReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <h3>99+</h3>
          <p>WILD IDEAS</p>
        </div>

      </div>
    </section>
  )
}

export default Details
