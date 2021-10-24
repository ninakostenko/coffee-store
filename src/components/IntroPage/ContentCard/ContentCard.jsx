import React from 'react'
import { cards } from '../../../data/ProjectData'

import './ContentCard.css'

const ContentCard = () => {
  const blocCard = cards.map((item) => {
    return (
      <div key={item.id} className="content">
        <img className="content_img" src={item.img} alt="img" />
        <p className="descrp">{item.title}</p>
        <p className="descrp">{item.prise}</p>
      </div>
    )
  })

  return (
    <div className="content_page">
      <h3 className="title_title">Our best</h3>
      <div className="container">
        <div className="content_card">{blocCard}</div>
      </div>
    </div>
  )
}

export default ContentCard
