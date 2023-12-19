import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import Content from "./components/Content";
import './css/index.css';
import Contact from "./routes/contact.jsx";
import {Route, Link, Routes} from 'react-router-dom';






export default function App() {
  

  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            
          </li>
          <li>
            
          </li>	
          
        </ul>
      </nav>

      <Routes>
        
        <Route path="/" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      
    </>
    
  );
}




