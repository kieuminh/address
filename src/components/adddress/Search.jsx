import React, { useState } from 'react'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'

export default function Search() {
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinatees] = useState({
    lat: null,
    lng: null,
  })

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value)
    // const ll = await getLatLng(results[0])
    console.log(value)
    setAddress(value)
    // setCoordinatees(ll)
  }

  return (
    <div>
      {/* <p>lat: {coordinates.lat}</p>
      <p>lng: {coordinates.lng}</p> */}
      <p>Address: {address}</p>

      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item'
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#red', cursor: 'pointer' }
                  : { backgroundColor: '#yellow', cursor: 'pointer' }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}

// export default function Search({ placeholder, data }) {
//   const [filteredData, setFilteredData] = useState([])
//   const [wordEntered, setWordEntered] = useState('')

//   const handleFilter = (event) => {
//     const searchWord = event.target.value
//     setWordEntered(searchWord)
//     const newFilter = data.filter((value) => {
//       return value.country.toLowerCase().includes(searchWord.toLowerCase())
//     })

//     if (searchWord === '') {
//       setFilteredData([])
//     } else {
//       setFilteredData(newFilter)
//     }
//   }

//   const handleSearch = (event) => {
//     setFilteredData([])
//     setWordEntered(event.target.textContent)
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder={placeholder}
//         value={wordEntered}
//         onChange={handleFilter}
//         className="border-2 rounded-md pl-2 h-9 mt-6 min-w-[100%]"
//       />
//       {filteredData.length !== 0 && (
//         <div className="border-2 rounded-md pl-2 pb-2">
//           {filteredData.slice(0, 3).map((value, key) => {
//             return (
//               <p key={key} onClick={handleSearch}>
//                 {value.country}
//               </p>
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }
