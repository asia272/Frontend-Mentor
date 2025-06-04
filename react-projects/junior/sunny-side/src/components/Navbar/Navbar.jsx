import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/images/logo.svg';
import menuIcon from "../../assets/images/icon-hamburger.svg"

const Navbar = () => {
    let [isMenu, setIsMenu] = useState(false);

    let menuToggle = () => {
        setIsMenu((prev) => !prev)
    }


    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Sunnyside logo" className="h-8" />
            </div>
            <div className="menu-btn" onClick={menuToggle}>
                <img src={menuIcon} alt="menuIcon" />
            </div>
            <ul className={isMenu ? "active" : ""}>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li className='contact-btn'><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
