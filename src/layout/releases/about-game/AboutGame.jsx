import React from "react";
import img1 from "../../../assets/Game/GUTN/Image-1.png"
import img2 from "../../../assets/Game/GUTN/Image-2.png"
import img3 from "../../../assets/Game/GUTN/Image-3.png"
import "./AboutGame.css";

const AboutGame = () => {
  return (
    <section className="about-game">

      <div className="about-game-header">
        <span>ABOUT THE GAME</span>
        <p>PRECISION. CHAOS. PAIN.</p>
      </div>


      <div className="game-row">
        <div className="game-text">
          <div className="game-heading">PRECISION PLATFORMING</div>

          <p>
            Master challenging 2D platforming built around perfect timing,
            precision jumps, and unpredictable traps. Every move matters,
            and one mistake can send you back to the start.
          </p>
        </div>

        <div className="game-image">
          <img src={img1} alt="Precision platforming" />
        </div>
      </div>


      <div className="game-row reverse">

        <div className="game-image">
          <img src={img2} alt="Rage jump repeat" />
        </div>

        <div className="game-text">
          <div className="game-heading">RAGE. JUMP. REPEAT.</div>

          <p>
            Face brutal obstacles, moving platforms, hidden traps, and
            increasingly difficult sections designed to test your patience,
            reflexes, and persistence. Keep jumping, keep failing, and try
            again.
          </p>
        </div>

      </div>


      <div className="game-row">

        <div className="game-text">
          <div className="game-heading">CHAOS AWAITS</div>

          <p>
            Nothing stays predictable for long. Explore handcrafted levels
            filled with surprise hazards, tricky mechanics, and chaotic
            challenges that will constantly keep you on edge.
          </p>
        </div>

        <div className="game-image">
          <img src={img3} alt="Chaos awaits" />
        </div>

      </div>

    </section>
  );
};

export default AboutGame;