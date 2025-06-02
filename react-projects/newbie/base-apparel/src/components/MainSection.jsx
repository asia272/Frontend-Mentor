import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';
import './MainSection.css';
import heroImg from "../assets/hero-desktop.jpg";
import iconArrow from "../assets/icon-arrow.svg";
import heroImgMobile from "../assets/hero-mobile.jpg";
import iconError from "../assets/icon-error.svg"

const MainSection = () => {
    let [email, setEmail] = useState("");
    let [error, setError] = useState(false)


    useEffect(() => {
        if (email !== "" && email.includes("@")) {
            setError(false);
        }
    }, [email]);

    const submitMail = (e) => {
        e.preventDefault();
        if (email === "" || !email.includes("@")) {
            setError(true);
        } else {
            setError(false);
            alert("")
            console.log("Email submitted:", email);
            setEmail("")
        }


    };
    return (
        <>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='main-section'>
                <div className="left-side">
                    <h1><span>We're</span> Coming Soon</h1>


                    <div className="content">
                        <p>
                            Hello fellow shoppers! We're currently building our new fashion store.
                            Add your email below to stay up-to-date with announcements and our launch deals.
                        </p>
                        <form action="#" onSubmit={submitMail}>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email Address' />
                            {error &&
                                <>
                                    <p className='error'>Please provide a valid email</p>
                                    <img src={iconError} alt="iconError" className='input-error' />
                                </>
                            }



                            <button
                                className='submit-btn'>
                                <img src={iconArrow} alt="arrow-icon" />

                            </button>


                        </form>
                    </div>
                </div>

                <div className="right-side">
                    <picture>
                        <source media="(max-width: 768px)" srcSet={heroImgMobile} />
                        <img src={heroImg} alt="Hero" />
                    </picture>
                </div>
            </div>
        </>

    )
}

export default MainSection
