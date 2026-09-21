import React from "react";
import "./MemberCard.css";

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const IconDiscord = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.32 5.37a18.6 18.6 0 0 0-4.6-1.43l-.23.42a13.7 13.7 0 0 1 3.99 1.55 13.9 13.9 0 0 0-11.96 0 13.4 13.4 0 0 1 4.02-1.55l-.24-.42c-1.6.28-3.14.75-4.6 1.43C3.98 9.02 3.2 12.58 3.57 16.08a18.9 18.9 0 0 0 5.5 2.75l.67-1.1a12 12 0 0 1-1.85-.88c.16-.11.31-.23.46-.35a13.2 13.2 0 0 0 11.3 0c.15.12.3.24.46.35-.59.35-1.21.65-1.85.88l.67 1.1a18.8 18.8 0 0 0 5.5-2.75c.44-4.05-.65-7.58-3.11-10.71zM9.68 13.98c-.83 0-1.51-.77-1.51-1.71 0-.95.66-1.72 1.51-1.72.86 0 1.53.78 1.51 1.72 0 .94-.65 1.71-1.51 1.71zm4.68 0c-.83 0-1.51-.77-1.51-1.71 0-.95.66-1.72 1.51-1.72.86 0 1.53.78 1.51 1.72 0 .94-.65 1.71-1.51 1.71z" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3z" />
  </svg>
);

const MemberCard = ({ image, name, role, linkedin, discord, website }) => {
  return (
    <article className="squad-card">
      <div className="squad-card__image-wrap">
        <img src={image} alt={name} className="squad-card__image" loading="lazy" />
      </div>

      <div className="squad-card__body">
        <h3 className="squad-card__name">{name}</h3>
        <p className="squad-card__role">{role}</p>

        <div className="squad-card__links">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} className="squad-card__link">
              <IconLinkedIn />
            </a>
          )}
          {discord && (
            <a href={discord} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Discord`} className="squad-card__link">
              <IconDiscord />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" aria-label={`${name} website`} className="squad-card__link">
              <IconGlobe />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default MemberCard;