import React from "react";
import "./Trailer.css";
import useScrollReveal from "../../../hooks/useScrollReveal";

const OfficialTrailer = () => {
  const headingReveal = useScrollReveal({ threshold: 0.2 });
  const videoReveal = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="official-trailer">

      <div
        ref={headingReveal.ref}
        className={`trailer-heading reveal-fade-up ${headingReveal.isVisible ? 'revealed' : ''}`}
      >
        <span>OFFICIAL TRAILER</span>
        <p>WATCH THE CHAOS</p>
      </div>

      <div
        ref={videoReveal.ref}
        className={`trailer-video reveal-scale-up ${videoReveal.isVisible ? 'revealed' : ''}`}
      >
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Official Game Trailer"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
};

export default OfficialTrailer;