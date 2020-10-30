import React from 'react'
import './PlanetsList.scss'
import {PlanetCard} from "../PlanetCard/PlanetCard";

export const PlanetList = ({planets}) => {

    return (
        <>
            {
                planets.map((planet, i) => {
                    return <PlanetCard
                        key={i}
                        name={planet.name}
                        climate={planet.climate}
                        population={planet.population}
                        url={planet.url}
                    />
                })
            }
        </>
    )
}
