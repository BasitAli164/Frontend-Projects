import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
        const arrowIcon = <FontAwesomeIcon icon={faArrowUp} />
    
  return (
    <>
    <div className="container">
        <footer className='footer'>
            <p>@ All Right Reserved 2023 Design By <a href="/">Abdupa911</a></p>
        </footer>
    </div>
    <div className="scroll_top">
        {arrowIcon}
    </div>

      
    </>
  )
}

export default Footer
