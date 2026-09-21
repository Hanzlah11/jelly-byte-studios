import React from 'react'
import Button from "../../../components/button/Button"
import "./Contact.css"

const Contact = () => {
  return (
    <div id='Contact'>
      <div className="contact-heading">
        READY TO MAKE SOME CHAOS?
      </div>
      <div className="contact-button">
        <Button text="START A PROJECT" color="#D8FA1F" padding="14px 22px" border="2px solid #D8FA1F" to="/contact" />
        <Button text="CONTACT US" border="2px solid #D8FA1F" padding="14px 20px" textColor="#D8FA1F" to="/contact" />
      </div>
    </div>
  )
}

export default Contact
