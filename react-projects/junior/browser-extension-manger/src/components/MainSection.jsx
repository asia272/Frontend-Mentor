import React, { useState } from 'react'
import "./MainSection.css"
import data from "../data.json"

const MainSection = () => {

    const [allExten, setAllExten] = useState(data);
    const [displayExtensions, setDisplayExtensions] = useState(data);
    const [filterType, setFilterType] = useState("all");

    const removeExten = (name) => {
        const filtered = allExten.filter(exten => exten.name !== name);
        setAllExten(filtered);
        setDisplayExtensions(filtered);

    }
    const allExtension = () => {
        setDisplayExtensions(allExten);
        setFilterType("all")
    }
    const activeExten = () => {
        const active = allExten.filter(exten => exten.isActive === true);
        setDisplayExtensions(active);
        setFilterType("active")
    }
    const inActiveExten = () => {
        const inactive = allExten.filter(exten => exten.isActive === false);
        setDisplayExtensions(inactive);
        setFilterType("inactive")
    }
    const activeToggle = (name) => {
        const updatedAllExten = allExten.map((exten) =>
            exten.name === name ? { ...exten, isActive: !exten.isActive } : exten
        );
        setAllExten(updatedAllExten);
        if (filterType === "all") {
            setDisplayExtensions(updatedAllExten);
        } else if (filterType === "active") {
            setDisplayExtensions(displayExtensions.map(exten =>
                exten.name === name ? { ...exten, isActive: !exten.isActive } : exten
            ));
        } else if (filterType === "inactive") {
            setDisplayExtensions(displayExtensions.map(exten =>
                exten.name === name ? { ...exten, isActive: !exten.isActive } : exten
            ));
        }
    };


    return (
        <main>
            <div className="extensions-list-btns">
                <h2>Extensions List</h2>
                <div className="extension-btns">
                    <button
                        onClick={allExtension}
                        className={filterType == "all" ? "active-btn" : ""} >
                        All
                    </button>
                    <button
                        onClick={activeExten}
                        className={filterType == "active" ? "active-btn" : ""} >
                        Active
                    </button>
                    <button
                        onClick={inActiveExten}
                        className={filterType == "inactive" ? "active-btn" : ""}
                    >Inactive
                    </button>
                </div>
            </div>
            {/* Extensions Box */}

            <div className='extension-container'>

                {displayExtensions.map((exten, idx) =>
                    <div key={idx} className='extension-card'>
                        <div className='exten-head'>
                            <div className="exten-logo">
                                <img src={exten.logo} alt={exten.name} />
                            </div>
                            <div>
                                <p className="exten-name">{exten.name}</p>
                                <p>{exten.description}</p>
                            </div>

                        </div>

                        <div className="exten-card-btns">
                            <button onClick={() => removeExten(exten.name)}>Remove</button>
                            <button
                                onClick={() => activeToggle(exten.name)}
                                className={`active-toggle-btn ${exten.isActive ? "active" : "in-active"}`}
                            >

                            </button>
                        </div>
                    </div>)}
            </div>

        </main>
    )
}

export default MainSection
