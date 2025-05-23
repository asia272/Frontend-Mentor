import React, { useState } from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    let [menu, isMenu] = useState(false);
    let toggleMenu = () => {
        isMenu((prev) => !prev);
        console.log(menu);
    };

    return (
        <nav>
            <div className="logo-box">
                <p>THE PLANETS</p>
                <div className="menu-toggle">
                    <button onClick={toggleMenu}>
                        <MenuIcon />
                    </button>
                </div>
            </div>
            <ul className={menu ? "active" : ""}>
                <li className='mercury'>
                    <NavLink to="mercury" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        <span></span>Mercury
                    </NavLink>
                </li>
                <li className='venus'>
                    <NavLink to="venus" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        <span></span>Venus
                    </NavLink>
                </li>
                <li className='earth'>
                    <NavLink to="earth" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        <span></span>Earth
                    </NavLink>
                </li>
                <li className='mars'>
                    <NavLink to="mars" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        <span></span>Mars
                    </NavLink>
                </li>
                <li className='jupiter'>
                    <NavLink to="jupiter" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        <span></span>Jupiter
                    </NavLink>
                </li>
                <li className='saturn'>
                    <NavLink to="saturn" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        <span></span>Saturn
                    </NavLink>
                </li>
                <li className='uranus'>
                    <NavLink to="uranus" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        <span></span>Uranus
                    </NavLink>
                </li>
                <li className='neptune'>
                    <NavLink to="neptune" className={({ isActive }) => isActive ? "activeLink" : ""}>
                        <span></span>Neptune
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
