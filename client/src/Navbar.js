import React from 'react';
import logo from "./images/logo.svg";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="nav-main">
            <div className="nav-container">
                <div className="nav-div">
                    <a href="#top" className="nav-link">
                        <img src={logo} alt="logo" className="nav-logo" />
                    </a>
                </div>
                <div className="nav-div">
                    <ul className="nav-list">
                        <li><a href="#main" className="nav-link">Главная страница</a></li>
                        <li><a href="#about" className="nav-link">О нас</a></li>
                        <li><a href="#catalogue" className="nav-link">Товары</a></li>
                        <li><a href="#services" className="nav-link">Услуги</a></li>
                        <li><a href="#examples" className="nav-link">Наши работы</a></li>
                        <li><a href="#contacts" className="nav-link">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;