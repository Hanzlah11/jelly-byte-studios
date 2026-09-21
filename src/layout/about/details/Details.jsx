import React from 'react'
import "./Details.css"

const Details = () => {
  return (
    <section className="controlled-chaos">
      <div className="chaos-content">

        {/* Left Side */}
        <div className="chaos-title">
          <p>CONTROLLED CHAOS.</p>
          <span></span>
        </div>

        {/* Right Side */}
        <div className="chaos-description">
          <p>
            At JellyByte, we don’t believe in playing it safe. Our
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
      <div className="chaos-stats">

        <div className="stat">
          <h3>01</h3>
          <p>GAMES IN DEVELOPMENT</p>
        </div>

        <div className="stat">
          <h3>04</h3>
          <p>TEAM MEMBERS</p>
        </div>

        <div className="stat">
          <h3>99+</h3>
          <p>WILD IDEAS</p>
        </div>

      </div>
    </section>
  )
}

export default Details
