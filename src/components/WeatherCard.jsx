function WeatherCard({ weather }) {
  return (
    <section className="weather-card">
      <div className="weather-summary">
        <div>
          <p className="location-label">Current weather</p>

          <h2>
            {weather.city}, {weather.country}
          </h2>

          <p className="weather-condition">
            Weather code: {weather.weatherCode}
          </p>
        </div>

        <div className="weather-temperature">
          <span aria-hidden="true">☁️</span>
          <strong>{Math.round(weather.temperature)}°C</strong>
        </div>
      </div>

      <div className="weather-details">
        <article>
          <span>Feels like</span>
          <strong>{Math.round(weather.feelsLike)}°C</strong>
        </article>

        <article>
          <span>Humidity</span>
          <strong>{weather.humidity}%</strong>
        </article>

        <article>
          <span>Wind</span>
          <strong>{weather.windSpeed} km/h</strong>
        </article>

        <article>
          <span>Pressure</span>
          <strong>{Math.round(weather.pressure)} hPa</strong>
        </article>
      </div>
    </section>
  )
}

export default WeatherCard