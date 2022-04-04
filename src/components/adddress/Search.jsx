import React, { useState } from 'react'

export default function Search({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.country.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const handleSearch = (event) => {
    setFilteredData([])
    setWordEntered(event.target.textContent)
  }

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
        className="border-2 rounded-md pl-2 h-9 mt-6 min-w-[100%]"
      />
      {filteredData.length !== 0 && (
        <div className="border-2 rounded-md pl-2 pb-2">
          {filteredData.slice(0, 3).map((value, key) => {
            return (
              <p key={key} onClick={handleSearch}>
                {value.country}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}
