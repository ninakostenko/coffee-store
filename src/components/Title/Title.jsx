import React from 'react'
import './Title.css'

import Logo from '../Logo'

const Title = () => {
  return (
    <div>
      <div className="header_text">
        <Logo />
        <span>Coffee house</span>
        <span>Our coffee</span>
        <span>For your pleasure</span>
      </div>
    </div>
  )
}

export default Title
