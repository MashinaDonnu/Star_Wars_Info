import React, {useCallback, useEffect, useState} from 'react'
import {PlanetCard} from "../../components/PlanetCard/PlanetCard"
import {useFetch} from "../../hooks/useFetch";

export const Planets = () => {
    const {loading, error, doFetch} = useFetch()
    const [planets, setPlanets] = useState([])

    const request = useCallback(async () => {
        const data = await doFetch(process.env.REACT_APP_PLANETS_URL)
        setPlanets(data.results)
    }, [setPlanets])

    useEffect(async () => {
        request()
    }, [])
    console.log('Planets:', planets)
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
