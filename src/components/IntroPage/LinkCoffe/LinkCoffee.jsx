import React from 'react'
import './linkCoffee.css'

import { Link } from 'react-router-dom'

const LinkCoffee = () => {
  return (
    <div className="btn">
      <Link to="/about" className="btn_link">
        More
      </Link>
    </div>
  )
}

export default LinkCoffee
