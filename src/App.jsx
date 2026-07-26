import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="weather-shell">
        <Header />

        <main className="weather-main">
          <SearchBar />
          <WeatherCard />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App