import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App.js';
import Navbar from "./Navbar.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

const TITLE = 'Decor Impress';

class TitleComponent extends React.PureComponent {
    render () {
        return (
            <>
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
            </>
        )
    }
}

root.render(
    <React.StrictMode>
        <TitleComponent />
        <Navbar />
        <App />
    </React.StrictMode>
);
