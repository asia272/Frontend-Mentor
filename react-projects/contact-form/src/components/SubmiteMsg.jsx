import React, { useState, useEffect } from 'react';
import success_icon from "../assets/images/icon-success-check.svg";
import "./SubmiteMsg.css";

const SubmiteMsg = ({ formData ,onClose}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
        if (formData) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose()
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [formData, onClose]); 

    return (
        isVisible && (
            <div className='submit-msg-box'>
                <div className="icon-box">
                    <img src={success_icon} alt="Success" />
                    <span>Message Sent!</span>
                </div>
                <p>Thanks for completing the form. We'll be in touch soon!</p>
            </div>
        )
    );
}

export default SubmiteMsg;
