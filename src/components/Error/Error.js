import React from 'react'
import './Error.scss'
import {NavLink} from "react-router-dom";

export const Error = props => (
    <div className="justify-content-center align-items-center w-100">
        <div className="jumbotron error-block mt-3">
            <h1 className="display-3">Error</h1>
            <p className="lead">{props.message || 'Something went wrong...'}</p>
                <p className="lead">
                    <NavLink to="/" className="btn btn-primary btn-lg" role="button">Go to planets page</NavLink>
                </p>
        </div>
    </div>
)
