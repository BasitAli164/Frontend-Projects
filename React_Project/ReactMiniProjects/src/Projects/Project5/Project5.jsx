import React from 'react'
import './Project5.css'

const Project5 = () => {
  return (
    <div className='main'>
    <div className="container">
        <input type="radio" name="progree" id="five" value="five"  className='radio'/>
        <label htmlFor="five" className='label'>5%</label>
        <input type="radio" name="progree" id="five" value="twentyfive"  className='twentyfive'/>
        <label htmlFor="twentyfive" className='label'>25%</label>
        <input type="radio" name="progree" id="five" value="fifty"  className='fifty'/>
        <label htmlFor="fifty" className='label'>50%</label>
        <input type="radio" name="progree" id="seventyfive" value="seventyfive"  className='fifty'/>
        <label htmlFor="seventyfive" className='label'>75%</label>
        <input type="radio" name="progree" id="onehundred" value="onehundred"  className='fifty'/>
        <label htmlFor="onehundred" className='label'>100%</label>
        <div className="progress">
            <div className="progressBar"></div>
        </div>
        
    </div>
      
    </div>
  )
}

export default Project5
