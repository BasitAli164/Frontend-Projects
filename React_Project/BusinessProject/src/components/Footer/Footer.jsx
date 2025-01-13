import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowUp} />;
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop=()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth',

    })

   

  }
  const listToScroll=()=>{
    let height=250;
    const windowScroll=document.body.scrollTop || document.documentElement.scrollTop;
    (windowScroll>height)? setIsVisible(true):setIsVisible(false)
  }
  useEffect(()=>{
    window.addEventListener("scroll",listToScroll)
  })
  return (
    <>
      <div className="container">
        <footer className="footer">
          <p>
            @ All Right Reserved 2023 Design By <a href="/">Abdupa911</a>
          </p>
        </footer>
      </div>
      {isVisible &&(
         <div className="scroll_top" onClick={scrollToTop}>{arrowIcon}</div>
      )}
    </>
  );
};

export default Footer;
