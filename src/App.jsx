import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <SearchBar />
        <WeatherCard />
      </main>

      <Footer />
    </div>
  )
}

export default App