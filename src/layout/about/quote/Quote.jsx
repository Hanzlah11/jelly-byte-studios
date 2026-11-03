import React from 'react'
import "./Quote.css"
import useScrollReveal from '../../../hooks/useScrollReveal'

const Quote = () => {
  const quoteReveal = useScrollReveal({ threshold: 0.3 });

  return (
    <div
      id='Quote'
      ref={quoteReveal.ref}
      className={`reveal-blur ${quoteReveal.isVisible ? 'revealed' : ''}`}
    >
        "WE DON'T MAKE GAMES TO FIT A MOLD. WE MAKE GAMES TO SHATTER IT."
    </div>
  )
}

export default Quote
