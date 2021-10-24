import React from 'react'
import './IntroPage.css'

import Title from '../Title'
import Content from './Content'
import ContentCard from './ContentCard'
import HeaderTitle from './HeaderTitle'
import LinkCoffee from './LinkCoffe'
import Footer from '../Footer'

const IntoPage = () => {
  return (
    <div>
      <div className="header">
        <Title />
        <HeaderTitle />
        <div className="header_texts">
          <h3>We makes every day full of energy and taste</h3>
          <h3>Want to try our beans?</h3>
        </div>
        <LinkCoffee />
      </div>
      <Content />
      <ContentCard />
      <Footer />
    </div>
  )
}

export default IntoPage
