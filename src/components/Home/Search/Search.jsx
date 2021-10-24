import React, { useState, useEffect } from 'react'
import './Search.css'

const Search = ({ updateSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    updateSearchQuery(searchQuery)
  }, [searchQuery, updateSearchQuery])

  const searchText = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="container">
      <div className="search">
        <label className="p">Looking for...</label>
        <div>
          <input value={searchQuery} onChange={searchText} type="text" placeholder="start typing here..." />
        </div>
      </div>
    </div>
  )
}

export default Search
