import * as React from "react";
import Header from "./components/MainComponentsDisplayPage/Header.jsx";
import Content from "./components/MainComponentsDisplayPage/Content";
import './css/index.css';
import Contact from "./routes/contact.jsx";
import {Route, Routes} from 'react-router-dom';
import IVeterinarians from "./components/FilesRelatedToVeterinarians/Veterinarians.tsx";

export default function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/veterinarians" element={<IVeterinarians />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </>
    
  );
}




