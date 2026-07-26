import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [searchedCity, setSearchedCity] = useState('')

  function handleSearch(city) {
    setSearchedCity(city)
  }

  return (
    <div className="app">
      <div className="weather-shell">
        <Header />

        <main className="weather-main">
          <SearchBar onSearch={handleSearch} />

          {searchedCity && (
            <p className="search-result">
              You searched for: <strong>{searchedCity}</strong>
            </p>
          )}

          <WeatherCard />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App