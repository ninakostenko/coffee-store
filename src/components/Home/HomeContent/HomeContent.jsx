import React from 'react'
import './HomeContent.css'

import img from '../../../assets/images/girl.jpg'

import Logo from '../../Logo'

const HomeContent = () => {
  return (
    <div className="container">
      <img className="girl" src={img} alt="girl" />
      <h3 className="about">About our beans</h3>
      <div className="logo_img">
        <Logo />
      </div>
      <div className="about_coffee">
        <p className="about_coffee_title">
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          <br />
          Afraid at highly months do things on at. Situation recommend objection do intention so questions.
          <br />
          As greatly removed calling pleased improve an. Last ask him cold feel
          <br />
          met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
        </p>
      </div>
      <div className="line">
        <hr />
      </div>
    </div>
  )
}

export default HomeContent
