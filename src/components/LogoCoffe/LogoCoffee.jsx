import React from 'react'
import './LogoCoffee.css'

import img from '../../assets/images/coffee_black.png'

const LogoCoffee = () => {
  return (
    <div className="block">
      <img className="img" src={img} alt="coffee" />
    </div>
  )
}

export default LogoCoffee
