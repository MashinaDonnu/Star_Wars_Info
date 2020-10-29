import React from 'react'
import {PlanetCard} from "../../components/PlanetCard/PlanetCard"

export const Planets = () => {
    return (
        <div className="planets-page">
            <div className="page-header">
                <h2>Planets catalog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, officia?</p>
            </div>
            <div className="planets-page__content">
              <div className="row justify-content-between">
                  <PlanetCard/>
                  <PlanetCard/>
                  <PlanetCard/>
                  <PlanetCard/>
              </div>
            </div>
        </div>
    )
}
