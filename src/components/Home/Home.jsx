import { useState, useEffect } from 'react'
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'
import Search from './Search'
import Footer from '../Footer'
import Modal from './Modal'

import { cards_2 } from '../../data/ProjectCards_2'
import aromico from '../../assets/images/aromico.jpg'
import cup2 from '../../assets/images/cup-2.jpg'
import cup3 from '../../assets/images/cup-3.jpg'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [cards, setCards] = useState([])

  const [modalActive, setModalActive] = useState(false)
  const [modalActive2, setModalActive2] = useState(false)
  const [modalActive3, setModalActive3] = useState(false)

  const handlerClickModal = () => {
    setModalActive(true)
  }

  const handlerClickModal2 = () => {
    setModalActive2(true)
  }

  const handlerClickModal3 = () => {
    setModalActive3(true)
  }

  useEffect(() => {
    const filteredCards = cards_2.filter((item) => !!item.category.toLowerCase().match(searchQuery.toLowerCase()))

    setCards(filteredCards)
  }, [searchQuery])

  const updateSearchQuery = (value) => {
    setSearchQuery(value)
  }

  return (
    <div>
      <HomeHeader />
      <HomeContent />

      <Modal active={modalActive} setActive={setModalActive}>
        <button className="close_btn" onClick={() => setModalActive(false)}>
          Close
        </button>
        <img className="image" src={aromico} alt="coffee" />
        <h3 className="about">About it</h3>
        <span className="span">Country: Brasil</span>
        <p className="about_coffee_title" style={{ textAlign: 'center' }}>
          <strong>Description: </strong>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.
          Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met
          spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
        </p>
        <span className="span">Price: </span> <strong>16.99$</strong>
      </Modal>

      <Modal active={modalActive2} setActive={setModalActive2}>
        <button className="close_btn" onClick={() => setModalActive2(false)}>
          Close
        </button>
        <img className="image" src={cup2} alt="img" />
        <p className="about_coffee_title" style={{ textAlign: 'center' }}>
          <strong>Description: </strong>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.
          Situation recommend objection do intention so questions. As greatly removed calling pleased improve an.
        </p>
        <hr />
      </Modal>

      <Modal active={modalActive3} setActive={setModalActive3}>
        <button className="close_btn" onClick={() => setModalActive3(false)}>
          Close
        </button>
        <img className="image" src={cup3} alt="img" />
        <p className="about_coffee_title" style={{ textAlign: 'center' }}>
          <strong>Description: </strong>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.
        </p>
        <hr />
      </Modal>

      <Search updateSearchQuery={updateSearchQuery} />

      <div className="container">
        <div className="search">
          <div className="search_block">
            <label className="p">Or filter</label>
            <button className="btns" onClick={handlerClickModal}>
              Brazil
            </button>
            <button className="btns" onClick={handlerClickModal2}>
              Kenya
            </button>
            <button className="btns" onClick={handlerClickModal3}>
              Columbia
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content_cards_two">
          {cards.length > 0 ? (
            cards.map((item) => (
              <div key={item.id} className="content_two">
                <img src={item.img} alt="img" />
                <p className="deck">{item.title}</p>
                <p className="deck">{item.category}</p>
                <p className="deck">{item.prise}</p>
              </div>
            ))
          ) : (
            <h2 style={{ textAlign: 'center', color: 'red' }}>Coffee name not found!</h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
