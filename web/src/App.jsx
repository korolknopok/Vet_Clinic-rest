import * as React from "react";
import Header from "./components/MainComponentsDisplayPage/Header.jsx";
import Content from "./components/MainComponentsDisplayPage/Content";
import './css/index.css';
import Contact from "./routes/contact.jsx";
import { Route, Routes } from 'react-router-dom';
import IVeterinarians from "./components/FilesRelatedToVeterinarians/Veterinarians.tsx";
import { VeterinariansProvider } from "./components/FilesRelatedToVeterinarians/VeterinariansContext.tsx";
import {AuthProvider} from "./components/Authorization/AuthContext.tsx";


export default function App() {
    return (
        <AuthProvider>
            <Header />
            <VeterinariansProvider>
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/veterinarians" element={<IVeterinarians />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </VeterinariansProvider>
        </AuthProvider>
    );
}