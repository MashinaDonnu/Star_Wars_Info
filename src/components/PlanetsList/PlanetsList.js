import React, {useCallback, useEffect, useState} from 'react'
import './PlanetsList.scss'
import {PlanetCard} from "../PlanetCard/PlanetCard"
import {useFetch} from "../../hooks/useFetch";
import {Loader} from "../Loader/Loader";


export const PlanetList = props => {
    const {loading, error, doFetch} = useFetch()
    const [planets, setPlanets] = useState([])
    const pageId = props.match.params.id

    const request = useCallback(async () => {
        setPlanets([])
        const data = await doFetch(`${process.env.REACT_APP_PLANETS_PAGES}=${pageId}`)
        console.log('Data:', data)
        props.countPages(data.count / 10) // Передаем количество существующих страниц

        setPlanets(data.results)
    }, [pageId])

    useEffect(async () => {
        request()
    }, [pageId])

    if (loading || !planets.length) {
        return <Loader />
    }
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
