import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './FashionProject/components/Header'
import Home from './FashionProject/pages/Home'
const FashionApp = () => {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default FashionApp
