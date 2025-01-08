import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <>
    <Router>
  <Header/>
    <Routes>
      <Route to="/" element={<Home/>}/>
    </Routes>

    </Router>
      
    </>
  )
}

export default App
