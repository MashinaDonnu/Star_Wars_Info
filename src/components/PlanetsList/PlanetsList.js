import React, {useCallback, useEffect, useState} from 'react'
import './PlanetsList.scss'
import {PlanetCard} from "../PlanetCard/PlanetCard"
import {useFetch} from "../../hooks/useFetch"
import {Loader} from "../Loader/Loader"
import {Error} from "../Error/Error"


export const PlanetList = props => {
    const {loading, error, doFetch} = useFetch()
    const [planets, setPlanets] = useState([])
    const pageId = props.match.params.id

    // В process.env(файл .env) записал все нужные url адреса в переменные

    const request = useCallback(async () => {
        setPlanets([])
        const data = await doFetch(`${process.env.REACT_APP_PLANETS_PAGES}=${pageId}`)
        if (!data) {
            return false
        }
        props.countPages(data.count / 10) // Передаем количество существующих страниц

        setPlanets(data.results)
    }, [pageId, doFetch, props])

    useEffect(() => {
        request()
    }, [pageId])

    // Если страницы с планетами не существует то показываем компонент с ошибкой
    if (error) {
        return <Error message={error.message}/>
    }

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
