const API_KEY = '8SS9SMC786ZB9KE3VULV3CXAM'
const api = (function () {
  async function city(cityValue, units) {
    if (!cityValue) {
      cityValue = 'bucharest';
    }
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityValue}/?key=${API_KEY}&lang=en&unitGroup=${units}&iconSet=icons2 `,
      { mode: 'cors' },)
    const location = await response.json();
    console.log(location);
    return location;
  }

  async function forecastData(data) {
    if (!data) {
      data = 'bucharest';
    }
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c6aa9b9a03f6449b82b131854232809&q=${data}`,
      { mode: 'cors' },)
    const forecast = await response.json();
    return forecast;
  }

  function weatherDetails(data) {
    const options = {
      wind: data.current.wind_kph,
      humidity: data.current.humidity,
      UV: data.current.uv,
      pressure: data.current.pressure_mb,
      rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
      precip: data.current.precip_mm,
      sunrise: convert12HourTo24Hour(data.forecast.forecastday[0].astro.sunrise),
      sunset: convert12HourTo24Hour(data.forecast.forecastday[0].astro.sunset),
      clouds: data.current.cloud,
    }
    return options;
  }

  function convert12HourTo24Hour(time12Hour) {
    let timeParts = time12Hour.split(':');
    let hours = parseInt(timeParts[0], 10);
    let minutes = parseInt(timeParts[1].split(' ')[0], 10);
    let period = timeParts[1].split(' ')[1];
    let convertedTime;

    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }

    convertedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return convertedTime;
  }

  return {
    city,
    forecastData,
    weatherDetails
  };

})();

export { api };