import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';
import './MainSection.css';
import heroImg from "../assets/hero-desktop.jpg";
import iconArrow from "../assets/icon-arrow.svg";
import heroImgMobile from "../assets/hero-mobile.jpg";
import iconError from "../assets/icon-error.svg"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";

const MainSection = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        toast.success("Email submitted successfully!");
        reset();
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Please provide a valid email",
                                    },
                                })}
                            />
                            {errors.email && <img src={iconError} alt="error-icon" className="input-error" />}

                            {errors.email && <p className="error">{errors.email.message}</p>}

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
