// Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand archae-ai" to="/">
                ARCHAE.AI
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/features">
                            Features
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item login-link">
                        <NavLink className="nav-link" to="/login">
                            Login
                            <span>&rarr;</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
