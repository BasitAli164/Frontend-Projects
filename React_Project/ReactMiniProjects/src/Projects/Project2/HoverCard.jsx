import React from 'react'
import './HoverCard.css'

const HoverCard = () => {
  return (
    <>
   <div className="container-fluid">
   <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <h2>Service One</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iste aspernatur vitae rerum! Autem commodi dolores animi eaque.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="face face2">
                <h2>01</h2>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <h2>Service Two</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iste aspernatur vitae rerum! Autem commodi dolores animi eaque.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="face face2">
                <h2>02</h2>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <h2>Service Three</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iste aspernatur vitae rerum! Autem commodi dolores animi eaque.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="face face2">
                <h2>03</h2>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default HoverCard
