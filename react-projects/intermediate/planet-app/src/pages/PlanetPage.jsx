import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/data.json"
import "./PlanetPage.css"

const PlanetPage = () => {
  let planetName = useParams();
  let planetData = data.find(
    (planet) => planet.name.toLowerCase() === planetName.planetName.toLowerCase()
  );

  console.log(planetData.overview.source)
  return (
    <section className='planet-page'>
      <div className="planet-img">
        <img src={planetData.images.planet} alt="planet-img" />
      </div>
      <div className="planet-content">
        <h1>{planetData.name}</h1>
        <p>{planetData.overview.content}</p>
      </div>
      <div className="planet-info">
        <div>
          <span className='info-title'>ROTATION TIME</span>
          <span className='info-data'>{planetData.rotation}</span>
        </div>
        <div>
          <span className='info-title'>REVOLUTION TIME</span>
          <span className='info-data'>{planetData.revolution}</span>
        </div>
        <div>
          <span className='info-title'>RADIUS</span>
          <span className='info-data'>{planetData.radius}</span>
        </div>
        <div>
          <span className='info-title'>AVERAGE TEMP.</span>
          <span className='info-data'>{planetData.temperature}</span>
        </div>
      </div>
    </section>
  )
}

export default PlanetPage
