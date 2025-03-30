import React from 'react';
import { challenges } from "./ProjectsData";
import "./style.css"

const Card = () => {
    return (
        <>
   
            {challenges.map((project, id) => (
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
        </>
    );
};

export default Card;
