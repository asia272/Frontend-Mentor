import React from 'react'
import iconFaceBook from "../../assets/images/icon-facebook.svg";
import iconInsta from "../../assets/images/icon-instagram.svg"
import iconPinterest from "../../assets/images/icon-pinterest.svg"
import iconTwitter from "../../assets/images/icon-twitter.svg"
const Footer = () => {
    return (
        <div className="footer-links">
            <h1>sunnyside</h1>
            <div className="links">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>
            <div className="social-links">
                <img src={iconFaceBook} alt="face-book-icon" />
                <img src={iconInsta} alt="insta-icon" />
                <img src={iconPinterest} alt="Pinterest-icon" />
                <img src={iconTwitter} alt="Twitter-icon" />
            </div>
        </div>

    )
}

export default Footer
