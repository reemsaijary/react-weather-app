import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSearch(city) {
    setLoading(true)
    setError('')

    try {
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city,
        )}&count=1&language=en&format=json`,
      )

      if (!locationResponse.ok) {
        throw new Error('Could not search for this city.')
      }

      const locationData = await locationResponse.json()
      const location = locationData.results?.[0]

      if (!location) {
        throw new Error('City not found. Please try another name.')
      }

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m&timezone=auto`,
      )

      if (!weatherResponse.ok) {
        throw new Error('Could not load the weather information.')
      }

      const weatherData = await weatherResponse.json()

      setWeather({
        city: location.name,
        country: location.country,
        temperature: weatherData.current.temperature_2m,
        feelsLike: weatherData.current.apparent_temperature,
        humidity: weatherData.current.relative_humidity_2m,
        windSpeed: weatherData.current.wind_speed_10m,
        pressure: weatherData.current.surface_pressure,
        weatherCode: weatherData.current.weather_code,
      })
    } catch (error) {
      setWeather(null)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="weather-shell">
        <Header />

        <main className="weather-main">
          <SearchBar onSearch={handleSearch} />

          {loading && <p className="status-message">Loading weather...</p>}

          {error && (
            <p className="status-message error-message">
              {error}
            </p>
          )}

          {weather && <WeatherCard weather={weather} />}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App