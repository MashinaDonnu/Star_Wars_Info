import React, {useCallback, useEffect, useState} from 'react'
import {useFetch} from "../../hooks/useFetch";
import {Loader} from "../Loader/Loader";
import {Error} from "../Error/Error";

export const Residents = props => {
    const residentsUrls = props.urls || []
    const [peoples, setPeoples] = useState([])
    const {loading, error ,doFetch} = useFetch()

    const request = useCallback(async () => {
        if (residentsUrls.length) {
            for (let r of residentsUrls) {
                const num = parseInt(r.match(/\d+/)) // достаем номер обитателя планеты
                const peopleData = await doFetch(process.env.REACT_APP_PEOPLE_URL + num)
                setPeoples(peoples => [...peoples, peopleData]) // получаем обитателей
            }
        }
    }, [residentsUrls, doFetch, setPeoples])

    useEffect(() => {
        request()
    }, [])

    if (error) {
        return <Error/>
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="card mb-3 mt-3">
            <h3 className="card-header ">Residents</h3>
            <ul className="list-group list-group-flush">
                {/*Проверяем отсутствие жителей на данной планете*/}
                {
                    peoples.length ?
                        peoples.map((people, i) => {
                            return <li key={i} className="list-group-item">{people.name}</li>
                        })
                        : <li className="list-group-item">No residents</li>
                }
            </ul>
        </div>
    )
}
