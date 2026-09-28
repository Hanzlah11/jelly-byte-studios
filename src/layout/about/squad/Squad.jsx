import React from "react";
import MemberCard from "../../../components/member-card/MemberCard";
import Hanzlah from "../../../assets/Team/Hanzlah.png"
import Mohib from "../../../assets/Team/Mohib.png"
import Haider from "../../../assets/Team/Haider.png"
import Rafay from "../../../assets/Team/Rafay.png"
import "./Squad.css";

const squadMembers = [
  {
    name: "Hanzlah Imran",
    role: "Head of Coding & Art",
    image: Hanzlah,
    linkedin: "https://linkedin.com/in/hanzlah-imran",
    discord: "https://discord.com/users/hanzlah-imran",
    github: "https://github.com/Hanzlah11",
  },
  {
    name: "Mohib Sardar",
    role: "Head of Task Assignment & Budget",
    image: Mohib,
    linkedin: "https://linkedin.com/in/mohib-sardar",
    discord: "https://discord.com/users/mohib-sardar",
    github: "https://github.com/mohib-sardar",
  },
  {
    name: "Haider Husnain",
    role: "Head of Marketing",
    image: Haider,
    linkedin: "https://linkedin.com/in/haider-husnain",
    discord: "https://discord.com/users/haider-husnain",
    github: "https://github.com/haider-husnain",
  },
  {
    name: "Abdur Rafay",
    role: "Head of Web Development & Database",
    image: Rafay,
    linkedin: "https://linkedin.com/in/abdur-rafay",
    discord: "https://discord.com/users/abdur-rafay",
    github: "https://github.com/abdur-rafay",
  },
];

const SquadSection = () => {
  return (
    <section className="squad-section" aria-labelledby="squad-title">
      <header className="squad-section__header">
        <p id="squad-title" className="squad-section__title">
          THE SQUAD BEHIND THE CHAOS
        </p>
        <p className="squad-section__subtitle">
          Every member leads a key department while collaborating across every stage of development.
          Together, we combine creativity, technical expertise, and a shared passion for building
          unforgettable gaming experiences.
        </p>
      </header>

      <div className="squad-section__grid">
        {squadMembers.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default SquadSection;