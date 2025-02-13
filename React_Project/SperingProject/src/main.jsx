import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Tictato from './Tictato/Tictato.jsx'
// import AcmeRockets from './Pages/AcmeRocketProject/AcmeRockets.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    {/* <App /> */}
    {/* <AcmeRockets/> */}
    
    <Tictato/>
   
  </StrictMode>,
)

