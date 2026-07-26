import {getWeatherDescription,getWeatherIcon,} from '../utils/weatherCode'

function WeatherCard({ weather }) {
  const description = getWeatherDescription(weather.weatherCode)
  const icon = getWeatherIcon(weather.weatherCode)

  return (
    <section className="weather-card">
      <div className="weather-summary">
        <div>
          <p className="location-label">Current weather</p>

          <h2>
            {weather.city}, {weather.country}
          </h2>

          <p className="weather-condition">{description}</p>
        </div>

        <div className="weather-temperature">
          <span className="weather-icon" aria-label={description}>
            {icon}
          </span>

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