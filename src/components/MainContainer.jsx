import React, { useState } from 'react';
import Cards from './Cards';
import { challenges, btns } from "./ProjectsData";
import Tooltip from '@mui/material/Tooltip';

import "./style.css"

const MainContainer = () => {
    let [projects, setProjects] = useState(challenges);
    let [isActive, setIsActive] = useState("all")
    let handleClick = (level) => {
        setIsActive(level)
        if (level == "all") {
            setProjects(challenges)
        } else {
            let findChallange = challenges.filter((chlng, id) => chlng.level === level)
            setProjects(findChallange)
            console.log(projects)
        }
    }
    return (
        <main className='main'>
            <h1>My <span> Frontend Mentor</span> Solutions</h1>
            <div className="btns">
                {btns.map((btn, id) => (
                    <Tooltip arrow key={id} title={`Show ${btn} level solutions`} 
                    placement="top">
                        <button onClick={() => (handleClick(btn))} key={id}
                            className={btn === isActive ? "active" : "btn"} >
                            {btn}
                        </button>
                    </Tooltip>
                ))}
            </div>
        
                <Cards projects={projects} />
          
        </main>
    )
}

export default MainContainer
