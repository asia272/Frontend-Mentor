import React from 'react';
import { useState, useEffect } from 'react';
import sunIcon from "/images/icon-sun.svg"
import moonIcon from "/images/icon-moon.svg"
import "./Header.css"

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <header>
      <div className="logo">
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        <img src={isDarkMode ? sunIcon : moonIcon} alt="" />
      </button>
    </header>
  )
}

export default Header
