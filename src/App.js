import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'

import Navigation from './components/Navigation'
import IntoPage from './components/IntroPage'
import Details from './components/Details'
import Home from './components/Home/Home'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<IntoPage />} />
        <Route exact path="details/*" element={<Details />} />
        <Route path="home/*" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
