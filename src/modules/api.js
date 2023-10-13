const API_KEY = '9f82adb2a6b93acd11a40b897a094e1b'
const api = (function(){
    async function city(cityValue){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${API_KEY}`,
        { mode: 'cors' },)
        const location = await response.json();
        return location;
    }

    async function forecastData(data){
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c6aa9b9a03f6449b82b131854232809&q=${data}`,
        { mode: 'cors' },)
        data = await response.json();
        console.log(data)
        return data;
    }

    

    function weatherDetails(data){
        const options = {
          wind: data.current.wind_kph,
          humidity: data.current.humidity,
          UV: data.current.uv,
          pressure: data.current.pressure_mb,
          rain: data.forecast.forecastday[0].condition.day.daily_chance_of_rain,
          precip: data.current.precip_mm,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          clouds: data.current.clouds,
        }
      }

    return {
    city,
    forecastData,
};
    
})();

export {api};