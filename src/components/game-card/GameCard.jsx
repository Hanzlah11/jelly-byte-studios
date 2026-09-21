import React from 'react'
import "./GameCard.css";
import Button from '../button/Button';

const GameCard = ({ title, description, image, link, comingSoon }) => {
  return (
    <div className={`game-card${comingSoon ? ' game-card--coming-soon' : ''}`}>
      <div className="background-image">
        <img src={image} alt={title} />
      </div>
      <div className="game-card-overlay"></div>

      {comingSoon ? (
        <div className="game-card-coming-soon">
          <div className="coming-soon-icon">?</div>
          <div className="coming-soon-label">COMING SOON</div>
        </div>
      ) : (
        <div className="game-card-content">
          <div className="game-card-main-title">
            <h1>{title}</h1>
          </div>

          <div className="game-card-info">
            <span className="game-card-category">
              TACTICAL SHOOTER
            </span>

            <h2>{title}</h2>

            <p>
              {description}
            </p>

            <Button text="LEARN MORE" size="12px" textColor="#b7e600" border="1px solid #b7e600" padding="8px 13px" className="game-card-button" to="/releases" />
          </div>

        </div>
      )}
    </div>
  )
}

export default GameCard

