export const populateDom = (() => {

  function weekDay(day) {
    const sepDay = day.split(' ');
    const formattedDay = sepDay[0];
    return formattedDay;
  }

  function createDate(formattedDateTime) {
    const dateDisplay = document.querySelector(".date");
    dateDisplay.textContent = formattedDateTime;
  }

  function searchCity() {
    const searchCity = document.querySelector("#search");
    const cityValue = searchCity.value;
    return cityValue;
  }

  function extractLocation(locationData) {
    const cityName = document.querySelector(".city-name");
    cityName.textContent = locationData.resolvedAddress
  }

  function displayTemp(tempData, units) {
    const temp = document.querySelector(".temperature");
    const feelsLike = document.querySelector('.feels-like-degree');
    const today = document.querySelector('.today-temp');
    if (units === 'metric') {
      temp.textContent = Math.round(tempData.currentConditions.temp) + " °C";
      feelsLike.textContent = Math.round(tempData.currentConditions.feelslike) + " °C";
      today.textContent = Math.round(tempData.currentConditions.temp) + " °C";
    } else if (units === 'us') {
      temp.textContent = Math.round(tempData.currentConditions.temp) + " °F";
      feelsLike.textContent = Math.round(tempData.currentConditions.feelslike) + " °F";
      today.textContent = Math.round(tempData.currentConditions.temp) + " °F";
    }
  }

  function weatherDescription(descriptionData) {
    const description = document.querySelector('.weather-description');
    const inputDescription = descriptionData.currentConditions.conditions;
    description.textContent = inputDescription;

    const todayDescrip = document.querySelector('.today-descrip');
    todayDescrip.textContent = inputDescription;
  }

  function displayDetails(option) {
    const wind = document.querySelector('.data-wind');
    const humidity = document.querySelector('.data-humidity');
    const UV = document.querySelector('.data-UV');
    const pressure = document.querySelector('.data-pressure');
    const chanceOfRain = document.querySelector('.data-rain');
    const precip = document.querySelector('.data-precip');
    const sunrise = document.querySelector('.data-sunrise');
    const sunset = document.querySelector('.data-sunset');
    const clouds = document.querySelector('.data-clouds');

    wind.textContent = Math.round(option.wind);
    humidity.textContent = option.humidity;
    UV.textContent = option.UV;
    pressure.textContent = option.pressure;
    chanceOfRain.textContent = option.rain;
    precip.textContent = option.precip;
    sunrise.textContent = option.sunrise;
    sunset.textContent = option.sunset;
    clouds.textContent = option.clouds;
  }

  function display5DaysWeather(data, units) {
    const days = document.querySelectorAll('.day');
    const dailyTemp = document.querySelectorAll('.daily-temp');
    const dailyDescription = document.querySelectorAll('.daily-temp-description');
    const today = new Date();
    const tomorrow = new Date(today);
    if (units === 'metric') {
      for (let i = 1; i < 6; i++) {
        tomorrow.setDate(today.getDate() + i);
        days[i].textContent = weekDay(tomorrow.toDateString());
        dailyTemp[i].textContent = Math.round(data.days[i].temp) + " °C";
        dailyDescription[i].textContent = data.days[i].conditions;
      }
    }
    else if (units === 'us') {
      for (let i = 1; i < 6; i++) {
        tomorrow.setDate(today.getDate() + i);
        days[i].textContent = weekDay(tomorrow.toDateString());
        dailyTemp[i].textContent = Math.round(data.days[i].temp) + " °F";
        dailyDescription[i].textContent = data.days[i].conditions;
      }
    }
  }

  function changeWeatherIcon(data) {
    const image = document.querySelector('#weather-icon'); 
    switch (data.currentConditions.icon) {
      case 'clear-day':
        image.src = './images/clear-day.svg';
        break;
      case 'clear-night':
        image.src = './images/clear-night.png';
        break;
      case 'cloudy':
        image.src = './images/cloudy.png';
        break;
      case 'fog':
        image.src = './images/fog.svg';
        break;
      case 'hail':
        image.src = './images/fog.png';
        break;
      case 'partly-cloudy-day':
        image.src = './images/partly-cloudy-day.png';
        break;
      case 'partly-cloudy-night':
        image.src = './images/partly-cloudy-day.png';
        break;
      case 'rain-snow-showers-day':
        image.src = './images/rain-snow-showers-day.svg';
        break;
      case 'rain-snow-showers-night':
        image.src = '.images/rain-snow-showers-night.svg';
        break;
      case 'rain-snow':
        image.src = './images/rain-snow.png';
        break;
      case 'rain':
        image.src = './images/rain.png';
        break;
      case 'showers-day':
        image.src = './images/showers-day.png';
        break;
      case 'showers-night':
        image.src = './images/showers-night.svg';
        break;
      case 'sleet':
        image.src = './images/sleet.png';
        break;
      case 'snow-showers-day':
        image.src = './images/snow-showers-day.svg';
        break;
      case 'snow-showers-night':
        image.src = './images/snow-showers-night.svg';
        break;
      case 'snow':
        image.src = './images/snow.png';
        break;
      case 'thunder-rain':
        image.src = './images/thunder-rain.png';
        break;
      case 'thunder-showers-day':
        image.src = './images/thunder-showers-day.svg';
        break;
      case 'thunder-showers-night':
        image.src = './images/thunder-showers-night.svg';
        break;
      case 'thunder':
        image.src = './images/thunder.png';
        break;
      case 'wind':
        image.src = './images/wind.png';
        break;
    }
  }
  

  return {
    createDate,
    extractLocation,
    searchCity,
    displayTemp,
    weatherDescription,
    displayDetails,
    display5DaysWeather,
    changeWeatherIcon
  };
})();
