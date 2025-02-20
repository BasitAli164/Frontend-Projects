import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import  './index.css'
import { StrictMode } from 'react';
import FashionApp from './FashionApp.jsx';


createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <App /> */}
<FashionApp/>

</StrictMode>
)

