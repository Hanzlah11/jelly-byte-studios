import React from "react";
import img1 from "../../../assets/Game/GUTN/image-1.png"
import img2 from "../../../assets/Game/GUTN/image-2.png"
import img3 from "../../../assets/Game/GUTN/image-3.png"
import "./AboutGame.css";
import useScrollReveal from '../../../hooks/useScrollReveal'

const AboutGame = () => {
  const headerReveal = useScrollReveal({ threshold: 0.3 });
  const row1Reveal = useScrollReveal({ threshold: 0.15 });
  const row2Reveal = useScrollReveal({ threshold: 0.15 });
  const row3Reveal = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="about-game">

      <div
        ref={headerReveal.ref}
        className={`about-game-header reveal-fade-up ${headerReveal.isVisible ? 'revealed' : ''}`}
      >
        <span>ABOUT THE GAME</span>
        <p>PRECISION. CHAOS. PAIN.</p>
      </div>


      <div ref={row1Reveal.ref} className="game-row">
        <div className={`game-text reveal-fade-left ${row1Reveal.isVisible ? 'revealed' : ''}`}>
          <div className="game-heading">PRECISION PLATFORMING</div>

          <p>
            Master challenging 2D platforming built around perfect timing,
            precision jumps, and unpredictable traps. Every move matters,
            and one mistake can send you back to the start.
          </p>
        </div>

        <div className={`game-image reveal-fade-right ${row1Reveal.isVisible ? 'revealed' : ''}`}>
          <img src={img1} alt="Precision platforming" />
        </div>
      </div>


      <div ref={row2Reveal.ref} className="game-row reverse">

        <div className={`game-image reveal-fade-left ${row2Reveal.isVisible ? 'revealed' : ''}`}>
          <img src={img2} alt="Rage jump repeat" />
        </div>

        <div className={`game-text reveal-fade-right ${row2Reveal.isVisible ? 'revealed' : ''}`}>
          <div className="game-heading">RAGE. JUMP. REPEAT.</div>

          <p>
            Face brutal obstacles, moving platforms, hidden traps, and
            increasingly difficult sections designed to test your patience,
            reflexes, and persistence. Keep jumping, keep failing, and try
            again.
          </p>
        </div>

      </div>


      <div ref={row3Reveal.ref} className="game-row">

        <div className={`game-text reveal-fade-left ${row3Reveal.isVisible ? 'revealed' : ''}`}>
          <div className="game-heading">CHAOS AWAITS</div>

          <p>
            Nothing stays predictable for long. Explore handcrafted levels
            filled with surprise hazards, tricky mechanics, and chaotic
            challenges that will constantly keep you on edge.
          </p>
        </div>

        <div className={`game-image reveal-fade-right ${row3Reveal.isVisible ? 'revealed' : ''}`}>
          <img src={img3} alt="Chaos awaits" />
        </div>

      </div>

    </section>
  );
};

export default AboutGame;