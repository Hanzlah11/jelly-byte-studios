import React from 'react'
import "./VisionMission.css";
import Bulb from "../../../assets/Icons/bulb.png"
import Target from "../../../assets/Icons/target.png"


const VisionMission = () => {
  return (
     <section className="vision-mission">

      <div className="vm-box vision-box">
        <div className="vm-content">
          <h2>VISION</h2>

          <p>
            Our mission is to create memorable games that challenge,
            entertain, and inspire players. Every mechanic, visual, and
            sound is crafted with care to deliver experiences that feel
            rewarding from beginning to end.
          </p>
        </div>

        <div className="vm-icon bulb">
          <img src={Bulb} alt="" />
        </div>
      </div>


      <div className="vm-box mission-box">

        <div className="vm-icon target">
          <img src={Target} alt="" />
        </div>

        <div className="vm-content">
          <h2>MISSION</h2>

          <p>
            We aspire to become a recognized indie game studio known for
            originality, technical excellence, and unforgettable gameplay.
            Every release is another step toward building a lasting legacy
            for JellyByte Studios.
          </p>
        </div>

      </div>

    </section>
  )
}

export default VisionMission;
