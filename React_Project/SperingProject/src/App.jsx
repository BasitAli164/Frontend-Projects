import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Work from './Pages//Work/Work'
import Category from './Pages/Category/Category'
import Footer from './components/Footer/Footer'
import Tictato from './Tictato/Tictato'
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
      <Route path='/tictato' element={<Tictato/>} />

    </Routes>
    <Footer/>
      
    </Router>
   
      
    </>
  )
}

export default App
