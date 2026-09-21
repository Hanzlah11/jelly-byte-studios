import React from "react";
import "./ValueCard.css";

const ValueCard = ({ icon, title, description }) => {
  return (
    <article className="value-card">
      <div className="value-card__icon-wrap">
        <img src={icon} alt="" className="value-card__icon" />
      </div>
      <div className="value-card__title">{title}</div>
      <p className="value-card__description">{description}</p>
    </article>
  );
};

export default ValueCard;