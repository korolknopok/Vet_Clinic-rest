import * as React from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content";
import './css/index.css';
import Contact from "./routes/contact.jsx";
import {Route, Routes} from 'react-router-dom';
import IVeterinarians from "./components/Veterinarians.tsx";

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




