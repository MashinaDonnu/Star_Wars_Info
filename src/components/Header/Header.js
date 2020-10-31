import React from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";
export const Header = () => (
    <div className="header">
        <NavLink to="/">
            <h1>Star wars info</h1>
        </NavLink>
    </div>
)
