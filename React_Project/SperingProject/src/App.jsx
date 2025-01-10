import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Work from './Pages//Work/Work'
import Category from './Pages/Category/Category'
import Fotter from './components/Fotter/Fotter'
const App = () => {
  return (
    <>
    <Router>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/work' element={<Work/>}  />
      <Route path='/category' element={<Category/>} />

    </Routes>
    <Fotter/>
      
    </Router>
   
      
    </>
  )
}

export default App
