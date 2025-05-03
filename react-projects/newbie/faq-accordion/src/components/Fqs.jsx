import React from 'react';
import minusIcon from "../assets/images/icon-minus.svg"
import plusIcon from "../assets/images/icon-plus.svg"
function Fqs({ qs, click, isActive, ans }) {
  return (
    <div className='qs-container'>
      <div>
        <p className='qs'>{qs}</p>
        {isActive && <p className='ans'>{ans}</p>}
      </div>
      {isActive ?
        <img src={minusIcon} alt="minus icon" onClick={click} />
        :
        <img src={plusIcon} alt="minus icon" onClick={click} />
      }
    </div>
  );
}

export default Fqs;
