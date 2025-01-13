import React from 'react'
import './Contact.css'
import contactImage from '../../assets/contact/contact.jpg'

const Contact = () => {
  return (
    <>
    <section id="contact">
        <div className="container">
            <div className="contact_wrapper">
                <div className="contact_col">
                    <div className="contact_img">
                        <img src={contactImage} alt="Contact" />
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Contact
