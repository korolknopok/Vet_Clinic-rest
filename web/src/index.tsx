// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
// @ts-ignore
import App from './App.tsx';
import {BrowserRouter} from 'react-router-dom';

const app = (ReactDOM.createRoot(document.getElementById("app")))

app.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

