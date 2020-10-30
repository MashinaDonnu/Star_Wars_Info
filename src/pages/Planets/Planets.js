import React, {useCallback, useEffect, useState} from 'react'
import {useFetch} from "../../hooks/useFetch"
import {Loader} from "../../components/Loader/Loader"
import {PlanetList} from "../../components/PlanetsList/PlanetsList";
import {Pagination} from "../../components/Pagination/Pagination";
import {Redirect, Route, Switch} from "react-router-dom";

export const Planets = () => {

    const [page, setPage] = useState(1)
    const [pagesCount, setPagesCount] = useState(5) // Количество страниц по умолчанию

    const pageCountHandler = (num) => setPagesCount(num)


    return (
        <div className="planets-page">
            {/*<button className="btn btn-danger">Click</button>*/}
            <div className="page-header">
                <h2>Planets catalog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, officia?</p>
                <Pagination count={pagesCount} currentPage={page}/>
            </div>
            <div className="planets-page__content">
              <div className="row justify-content-between">
                  <Switch>
                      <Route path="/page/:id" render={props => (<PlanetList {...props} countPages={pageCountHandler}  />)}/>
                      <Redirect to="/page/1" />
                  </Switch>
                  {/*<PlanetList  planets={planets}/>*/}
              </div>
            </div>
        </div>
    )
}
