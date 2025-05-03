import React from 'react'
import "./utilite.css"
import logo from "../assets/images/logo-full.svg"
import githubIcon from "../assets/images/icon-github.svg"

const Ticket = ({ userData }) => {
  return (
    <div className='main-container'>
      <div>
        <h1>Congrats, <span>{userData.fullName}!</span> Your ticket is ready.</h1>
        <p className='head-p' style={{ width: "400px" }}>We've emailed your ticket to <span>{userData.email}</span> and will send updates in the run up to the event.</p>
      </div>

      <div className='ticket-container'>
        <div className='ticket-logo'>
          <div className="logo-mark">
            <img src={logo} alt="logo" />
          </div>
          <p className='date-p'>{userData.date.slice(4, 15)} / Austin, TX </p>
        </div>

        <div className="ticket-avatar">
          <img src={userData.avatar} alt="avater" className='avater' />
          <div className='info'>
            <h2>{userData.fullName} </h2>
            <span>
              <a href={`https://github.com/${userData.github.slice(1)}`} target="_blank">
                <img src={githubIcon} alt="githubIcon" />
                <p>{userData.github}</p>
              </a>
            </span>
          </div>
        </div>
        <div className="ticket-number">
          <p>#98323</p>
        </div>
      </div>


    </div>


  )
}

export default Ticket
