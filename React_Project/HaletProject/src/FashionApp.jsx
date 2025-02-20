import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../FashionProject/pages/Home'
const FashionApp = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default FashionApp
