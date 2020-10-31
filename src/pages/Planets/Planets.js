import React, {useState} from 'react'
import {PlanetList} from "../../components/PlanetsList/PlanetsList"
import {Pagination} from "../../components/Pagination/Pagination"
import {Route, Switch} from "react-router-dom"
import './Planets.scss'

export const Planets = () => {
    const title = 'planets catalog'
    const [pagesCount, setPagesCount] = useState(0) // Количество страниц по умолчанию
    const pageCountHandler = (num) => setPagesCount(num) // количество существующих страниц

    return (
        <div className="planets-page">
            <div className="page-header">
                <h2>{title.toUpperCase()}</h2>
                <Pagination count={pagesCount}/>
            </div>
            <div className="planets-page__content">
              <div className="row cards-wraper">
                  {/*Страницы с планетами*/}
                  <Switch>
                      <Route path="/page/:id" render={props => (<PlanetList {...props} countPages={pageCountHandler}  />)}/>
                  </Switch>
              </div>
            </div>
        </div>
    )
}
