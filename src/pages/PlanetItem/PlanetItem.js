import React, {useCallback, useEffect, useState} from 'react'
import {useFetch} from "../../hooks/useFetch"
import {Loader} from "../../components/Loader/Loader"
import {NavLink} from "react-router-dom"
import {Error} from "../../components/Error/Error"
import {Residents} from "../../components/Residents/Residents"
import './PlanetItem.scss'

export const PlanetItem = props => {
    const id = props.match.params.id
    const [planetImage, setPlanetImage] = useState(`${process.env.REACT_APP_PLANETS_URL_VISUAL}/assets/img/planets/${id}.jpg`)
    const [planet, setPlanet] = useState({})
    const {loading, error, doFetch} = useFetch()

    const request = useCallback(async () => {
            const planetData = await doFetch(process.env.REACT_APP_PLANETS_URL + id) // получаем данные о планете
            if (!planetData) {
                return false
            }
            setPlanet(planetData)
    }, [id, setPlanet, doFetch])

    // Если нету картинки по заданому url тогда выводим "заглушку"
    const imgErrorHandler = () => {
        setPlanetImage(`${process.env.REACT_APP_PLANETS_URL_VISUAL}/assets/img/placeholder.jpg`)
    }

    useEffect(() => {
        request()
    }, [])

    if (error) {
        return <Error message={error.message} />
    }

    if (loading || !Object.keys(planet).length) {
        return <Loader/>
    }

    // Нужные нам характеристики планеты (Название и ключ в объекте)
    const names = [
        {name: 'Name', key: 'name'},
        {name: 'Rotation period', key: 'rotation_period'},
        {name: 'Diameter', key: 'diameter'},
        {name: 'Climate', key: 'climate'},
        {name: 'Gravity', key: 'gravity'},
        {name: 'Terrain', key: 'terrain'},
        {name: 'Population', key: 'population'},
       ]
    return (
        <div className="row align-items-start mt-5">
            <div className="col-lg-5">
                <div className="card card-planet-item">
                    <img
                        src={planetImage}
                        alt="planet"
                        onError={imgErrorHandler}
                    />
                </div>
                <NavLink to="/" className="go-home">
                    <button className="btn btn-danger mt-2 btn-block">Planets page</button>
                </NavLink>
            </div>
            <div className="col-lg-7">
                <ul className="list-group planet-info">
                    {/*Выводим характеристики планеты*/}
                    {names.map((n, i) => {
                        return <li key={i} className="list-group-item d-flex align-items-center">
                                    <strong>{n.name}</strong> {planet[n.key]}
                                </li>
                    })}
                </ul>
                <Residents urls={planet.residents}/>
            </div>
        </div>
    )
}
