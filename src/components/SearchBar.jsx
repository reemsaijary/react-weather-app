function SearchBar() {
  return (
    <form className="search-form">
      <label htmlFor="city-search" className="sr-only">
        Search for a city
      </label>

      <div className="search-control">
        <input
          id="city-search"
          type="text"
          placeholder="Enter a city"
        />

        <button type="submit">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar