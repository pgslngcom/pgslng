import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Route, BrowserRouter as Router , Routes} from 'react-router-dom'
// import { Contact } from './pages/Contact.jsx'
// import { About } from './pages/About.jsx'
// import { Geo } from './pages/Geo.jsx'
// import { HydroGraphics } from './pages/HydroGraphics.jsx'
// import { Survey } from './pages/Survey.jsx'
// import { ProcureMent } from './pages/Procurement.jsx'
// import { GisServices } from './pages/GisServices.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
)
