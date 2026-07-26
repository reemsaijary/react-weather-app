export function getWeatherDescription(code) {
  switch (code) {
    case 0:
      return 'Clear Sky'

    case 1:
      return 'Mainly Clear'

    case 2:
      return 'Partly Cloudy'

    case 3:
      return 'Overcast'

    case 45:
    case 48:
      return 'Fog'

    case 51:
    case 53:
    case 55:
      return 'Drizzle'

    case 61:
    case 63:
    case 65:
      return 'Rain'

    case 71:
    case 73:
    case 75:
      return 'Snow'

    case 80:
    case 81:
    case 82:
      return 'Rain Showers'

    case 95:
    case 96:
    case 99:
      return 'Thunderstorm'

    default:
      return 'Unknown Weather'
  }
}

export function getWeatherIcon(code) {
  switch (code) {
    case 0:
      return '☀️'

    case 1:
      return '🌤️'

    case 2:
      return '⛅'

    case 3:
      return '☁️'

    case 45:
    case 48:
      return '🌫️'

    case 51:
    case 53:
    case 55:
      return '🌦️'

    case 61:
    case 63:
    case 65:
      return '🌧️'

    case 71:
    case 73:
    case 75:
      return '❄️'

    case 80:
    case 81:
    case 82:
      return '🌦️'

    case 95:
    case 96:
    case 99:
      return '⛈️'

    default:
      return '🌡️'
  }
}