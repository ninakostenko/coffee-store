import React from 'react'
import img from '../../assets/images/aromico.jpg'
import HomeHeader from '../Home/HomeHeader'
import Footer from '../footer/index'

const Details = () => {
  return (
    <div>
      <HomeHeader />
      <div className="container">
        <img className="image" src={img} alt="coffee" />
        <h3 className="about">About it</h3>

        <div className="about_coffee2">
          <span className="span">Country: Brasil</span>
          <p className="about_coffee_title">
            <strong>Description: </strong>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
          </p>
          <span className="span">Price: </span> <strong>16.99$</strong>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Details
