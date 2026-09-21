import React from "react";
import ValueCard from "../../../components/value-card/ValueCard";
import "./Values.css";

const values = [
  {
    title: "Gameplay First",
    icon: "/assets/icons/gamepad.png",
    description:
      "Every mechanic should feel rewarding, polished, and memorable before anything else. We focus on creating gameplay that feels intuitive, engaging, and satisfying from the very first interaction to the final moment.",
  },
  {
    title: "Innovation",
    icon: "/assets/icons/lightbulb.png",
    description:
      "We constantly experiment with bold new ideas instead of simply following trends. We explore fresh mechanics, creative concepts, and unexpected features that push the boundaries of what games can be.",
  },
  {
    title: "Quality",
    icon: "/assets/icons/badge.png",
    description:
      "Attention to detail guarantees good games from unforgettable experiences. From gameplay and visuals to performance and usability, we carefully refine every element to deliver an experience players can truly enjoy.",
  },
  {
    title: "Collaboration",
    icon: "/assets/icons/puzzle.png",
    description:
      "Great games are built by passionate people working together toward one vision. We value open communication, shared creativity, and teamwork, bringing different skills and perspectives together to create something remarkable.",
  },
];

const ValuesSection = () => {
  return (
    <section className="values-section" aria-labelledby="values-title">
      <h2 id="values-title" className="values-section__title">
        What Drives Everything We Build
      </h2>

      <div className="values-section__grid">
        {values.map((value) => (
          <ValueCard key={value.title} {...value} />
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;