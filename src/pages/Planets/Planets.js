import React, {useCallback, useEffect, useState} from 'react'
import {PlanetCard} from "../../components/PlanetCard/PlanetCard"
import {useFetch} from "../../hooks/useFetch"
import {Loader} from "../../components/Loader/Loader"
import {PlanetList} from "../../components/PlanetsList/PlanetsList";

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

    if (loading || !planets.length) {
        return <Loader />
    }

    return (
        <div className="planets-page">
            <div className="page-header">
                <h2>Planets catalog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, officia?</p>
            </div>
            <div className="planets-page__content">
              <div className="row justify-content-between">
                  {/*<PlanetCard/>*/}
                  {/*<PlanetCard/>*/}
                  {/*<PlanetCard/>*/}
                  {/*<PlanetCard/>*/}
                  <PlanetList  planets={planets}/>
              </div>
            </div>
        </div>
    )
}
