import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedCity = city.trim()

    if (!trimmedCity) {
      return
    }

    onSearch(trimmedCity)
    setCity('')
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="city-search" className="sr-only">
        Search for a city
      </label>

      <div className="search-control">
        <input
          id="city-search"
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export default SearchBar