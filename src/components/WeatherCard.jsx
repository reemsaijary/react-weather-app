function WeatherCard() {
  return (
    <section className="weather-card">
      <div className="weather-summary">
        <div>
          <p className="location-label">Current weather</p>
          <h2>Beirut, Lebanon</h2>
          <p className="weather-condition">Partly cloudy</p>
        </div>

        <div className="weather-temperature">
          <span aria-hidden="true">☁️</span>
          <strong>25°C</strong>
        </div>
      </div>

      <div className="weather-details">
        <article>
          <span>Feels like</span>
          <strong>27°C</strong>
        </article>

        <article>
          <span>Humidity</span>
          <strong>64%</strong>
        </article>

        <article>
          <span>Wind</span>
          <strong>11 km/h</strong>
        </article>

        <article>
          <span>Pressure</span>
          <strong>1012 hPa</strong>
        </article>
      </div>
    </section>
  )
}

export default WeatherCard