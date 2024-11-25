import * as React from "react";
import './css/index.css';
import { Route, Routes } from 'react-router-dom';
// @ts-ignore
import Header from "./components/MainComponentsDisplayPage/Header.tsx";
// @ts-ignore
import {AuthProvider} from "./components/Authorization/AuthContext.tsx";
// @ts-ignore
import {VeterinariansProvider} from "./components/FilesRelatedToVeterinarians/VeterinariansContext.tsx";
// @ts-ignore
import Content from "./components/MainComponentsDisplayPage/Content.tsx";
// @ts-ignore
import IVeterinarians from "./components/FilesRelatedToVeterinarians/Veterinarians.tsx";
// @ts-ignore
import Contact from "./routes/contact.tsx";
// @ts-ignore
import Review from "./components/Review.tsx";

export default function App() {
    return (
        <AuthProvider>
            <Header />
            <VeterinariansProvider>
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/veterinarians" element={<IVeterinarians />} />
                    <Route path = "/reviews" element={<Review />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </VeterinariansProvider>
        </AuthProvider>
    );
}