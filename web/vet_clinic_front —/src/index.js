import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RequestArgs } from "./json/base.ts";
import {BrowserRouter} from 'react-router-dom';



const app = (ReactDOM.createRoot(document.getElementById("app")))


app.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    
)

