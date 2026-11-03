import React from 'react'
import Button from "../../../components/button/Button"
import "./Contact.css"
import useScrollReveal from '../../../hooks/useScrollReveal'

const Contact = () => {
  const sectionReveal = useScrollReveal({ threshold: 0.2 });

  return (
    <div id='Contact' ref={sectionReveal.ref}>
      <div className={`contact-heading reveal-blur ${sectionReveal.isVisible ? 'revealed' : ''}`}>
        READY TO MAKE SOME CHAOS?
      </div>
      <div className={`contact-button reveal-fade-up ${sectionReveal.isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.25s' }}>
        <Button text="START A PROJECT" color="#D8FA1F" padding="14px 22px" border="2px solid #D8FA1F" to="/contact" />
        <Button text="CONTACT US" border="2px solid #D8FA1F" padding="14px 20px" textColor="#D8FA1F" to="/contact" />
      </div>
    </div>
  )
}

export default Contact
