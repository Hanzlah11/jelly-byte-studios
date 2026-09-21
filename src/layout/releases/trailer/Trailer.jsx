import React from "react";
import "./Trailer.css";

const OfficialTrailer = () => {
  return (
    <section className="official-trailer">

      <div className="trailer-heading">
        <span>OFFICIAL TRAILER</span>
        <p>WATCH THE CHAOS</p>
      </div>

      <div className="trailer-video">
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