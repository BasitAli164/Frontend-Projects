import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/Service/Service'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Service/>
     <Blog/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
