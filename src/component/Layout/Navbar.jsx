import React from 'react'
import logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom' // ✅ Correct import path

const Navbar = () => {
    return (
        <nav className="navbar">
            <figure className="logo">
                <img src={logo} alt="logo" />
            </figure>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active" : "not-active"}
                    >
                        HOME
                    </NavLink>
                </li>
                <li>ABOUT</li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? "active" : "not-active"}
                    >
                        SERVICES
                    </NavLink>
                </li>
                <li>PAGES</li>
                <li>CONTACT US</li>
            </ul>
        </nav>
    )
}

export default Navbar