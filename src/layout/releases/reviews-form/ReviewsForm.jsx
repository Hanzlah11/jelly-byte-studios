import React, { useState } from "react";
import Button from "../../../components/button/Button";
import useScrollReveal from "../../../hooks/useScrollReveal";
import "./ReviewsForm.css";

const Reviews = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const headingReveal = useScrollReveal({ threshold: 0.2 });
  const formReveal = useScrollReveal({ threshold: 0.15 });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      feedback,
    });

    setName("");
    setFeedback("");
  };

  return (
    <section className="reviews">

      <div
        ref={headingReveal.ref}
        className={`reviews-heading reveal-fade-up ${headingReveal.isVisible ? 'revealed' : ''}`}
      >
        <span>REVIEWS</span>
        <p>DROP SOME FEEDBACK</p>
      </div>

      <form
        ref={formReveal.ref}
        className={`feedback-form reveal-scale-up ${formReveal.isVisible ? 'revealed' : ''}`}
        onSubmit={handleSubmit}
      >

        <p className="feedback-note">
          ALL IDEAS ARE WELCOMED, INCLUDING CRITIQUES
        </p>

        <div className="reviews-input-group">
          <label htmlFor="name">
            YOUR NAME
          </label>

          <input
            id="name"
            type="text"
            placeholder="Anonymous Gamer"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="reviews-input-group">
          <label htmlFor="feedback">
            YOUR FEEDBACK
          </label>

          <textarea
            id="feedback"
            placeholder="What did you think of the game?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>

        <Button text="SUBMIT" color=" #dfff00" size="11px" padding="6px 0px"/>

      </form>

    </section>
  );
};

export default Reviews;