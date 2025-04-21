import React, { useState } from 'react'
import starIcon from "../assets/images/icon-star.svg"

const RatingInput = ({ setIsRating }) => {
  let rating = [1, 2, 3, 4, 5]
  let [selectedRating, setSelectedRating] = useState(null)
  return (
    <div className='rating-box'>
      <button className='star-icon-btn'>
        <img src={starIcon} alt="star" />
      </button>

      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="btns-box">
        {rating.map((el, idx) => (
          <button
          className={selectedRating === el && "active"}
           key={idx} onClick={() => setSelectedRating(el)}>
            {el}
          </button>

        ))}
      </div>
      <button
        onClick={() => setIsRating(selectedRating)}
        className='submit-btn'
      >submit</button>

    </div>
  )
}

export default RatingInput
