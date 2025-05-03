import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./layouts/PageLayout";
import HydroGraphics from "./pages/HydroGraphics";
import Survey from "./pages/Survey";
import ProcureMent from "./pages/Procurement";
import GisServices from "./pages/GisServices";
import About from "./pages/About";
import Geo from "./pages/Geo";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
              <Route path="/" element={<Home />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project />} />
              <Route path="/services" element={<PageLayout />} >
                <Route path="hydro" element={<HydroGraphics  />} />
                <Route path="gis" element={<GisServices />} />
                <Route path="survey" element={<Survey />} />
                <Route path="procurement" element={<ProcureMent />} />
                <Route path="geo" element={<Geo />} />
              </ Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
