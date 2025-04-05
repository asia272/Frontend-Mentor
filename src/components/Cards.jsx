import React, { useState } from 'react';
import "./style.css"

const Cards = (props) => {
    let challenges = props.projects;
    let [findSolution, setIsFindSolution] = useState("");

    let searchedSolution = challenges.filter((solution) =>
        solution.title.toLowerCase()
       .includes(findSolution.toLowerCase())
    );
 
    return (
        <>
            <input
            className='searchSolution'
                type="text"
                placeholder="Search solutions by name ..."
                value={findSolution}
                onChange={(e) => setIsFindSolution(e.target.value)}
            />
            <div className="container">
              
                {(searchedSolution.length >0? searchedSolution : challenges).map((project, id) => (
                    <div className="card" key={id}>
                        <div className="img-box">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="content">
                            <div className="title">
                                <h3>{project.title}</h3>
                            </div>
                            <div className="links">
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="demo-link">
                                    Live Demo
                                </a>
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="code-link">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cards;
