import React from 'react'
import './Pagination.scss'
import {NavLink} from 'react-router-dom'

export const Pagination = ({count}) => {
    const paginationItems = new Array(count).fill(null)
    return (
        <div className="planet-pagination">
            <ul className="pagination pagination-lg">
                {paginationItems.map((_, index) => {
                    return  <li className="page-item" key={index}>
                                <NavLink className="page-link" to={`/page/${index + 1}`}>
                                    {index + 1}
                                </NavLink>
                            </li>
                })}
            </ul>
        </div>
    )
}
