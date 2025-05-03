import React from 'react'
import illustrationThanksSvg from "../assets/images/illustration-thank-you.svg"
const RatingResult = ({isRating}) => {
    return (
        <div className='result-container'>
            <img src={illustrationThanksSvg } alt="random img" />
            <p className='display-rating-p'>You selected {isRating} out of 5</p>
            <h1>Thank you!</h1>
            <p>We appreciate you takgin the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}

export default RatingResult
