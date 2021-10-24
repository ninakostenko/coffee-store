import React from 'react'
import './Navigation.css'

import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/details">Details</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
