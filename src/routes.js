import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PlanetItem} from "./pages/PlanetItem/PlanetItem";
import {Planets} from "./pages/Planets/Planets";

export const routes = (
    <Switch>
        <Route path="/page/:id" component={Planets} exact />
        <Route path="/planet/:id" component={PlanetItem} />
        <Redirect to="/page/1" />
    </Switch>
)
