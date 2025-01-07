import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import LandingPage from './pages/Home/LandingPage'

const App = () => {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<LandingPage/>}/>
      </Routes>

     </Router>

    </>
  )
}

export default App
