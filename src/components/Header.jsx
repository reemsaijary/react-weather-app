function Header() {
  return (
    <header className="header">
      <p className="header-label">Current Weather</p>

      <h1>
        <i className="fa-solid fa-cloud-sun"></i> Weatherly
        </h1>

      <p className="header-description">
        Search for a city and check its current weather.
      </p>
    </header>
  )
}

export default Header