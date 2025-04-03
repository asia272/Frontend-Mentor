import React from 'react'
import Card from './Card'
import "./style.css"

const MainContainer = () => {
    return (
       
            <main>
                <h1>My <span> Frontend Mentor</span> Solutions</h1>
                <div className="container">
                    <Card/>
                </div>
            </main>
        
    )
}

export default MainContainer
