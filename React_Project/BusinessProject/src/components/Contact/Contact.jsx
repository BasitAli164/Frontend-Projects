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
                <div className="contact_col">
                    <h2>Contact Us</h2>
                    <form >
                        <div className="input_wrapper">
                            <input type="text" name="" id=""    className='form-control' placeholder='Your Name...' autoComplete='off' />
                        </div>
                        <div className="input_wrapper">
                            <input type="text" name="" id=""    className='form-control' placeholder='Your Phone...' autoComplete='off' />
                        </div>
                        <div className="input_wrapper">
                            <input type="email" name="" id=""    className='form-control' placeholder='Your Email...' autoComplete='off' />
                        </div>
                        <div className="input_wrapper">
                            <textarea name="" id="" placeholder='Write a Message...'></textarea>
                        </div>
                        <div className="btn_wrapper">
                            <button type="submit" className='btn'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Contact
