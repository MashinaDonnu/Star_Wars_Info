import React, {useState} from 'react'
import './PlanetCard.scss'

export const PlanetCard = props => {
    const urlNum = props.url.split('/planets/')[1].slice(0, -1)
    const urlStr = `${process.env.REACT_APP_PLANETS_URL_VISUAL}/assets/img/planets/${urlNum}.jpg`
    const [url, setUrl] = useState(urlStr)

    //Если по такому url картинки не существует тогда показываем заглушку
    const errorHandle = () => {
        setUrl(`${process.env.REACT_APP_PLANETS_URL_VISUAL}/assets/img/placeholder.jpg`)
    }

    return (
        <div className="card mb-3 col-lg-4 col-md-6 planet-card">
            <h3 className="card-header">{props.name}</h3>
            <img className="planet-img" src={url} alt="planet" onError={errorHandle}/>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Climate:</strong> {props.climate}</li>
                <li className="list-group-item">Population: {props.population}</li>
            </ul>
            <div className="card-footer text-muted">
                <button className="btn btn-warning btn-block btn-more-info">More info</button>
            </div>
        </div>
    )
}
