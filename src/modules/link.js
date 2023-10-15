import { api } from "./api";
import { populateDom } from "./dom";

let currentUnits = 'metric';
export async function updateWeather(city) { 
  try {
    const errorMessageElement = document.querySelector('.error-message');
    errorMessageElement.style.display = 'none';

    const data = await api.city(city, currentUnits);
    const coord = await api.forecastData(city);
    const option = api.weatherDetails(coord);
    const formattedDateTime = formatDate(coord.location.localtime);

    populateDom.extractLocation(data);
    populateDom.displayTemp(data, currentUnits);
    populateDom.weatherDescription(data);
    populateDom.displayDetails(option);
    populateDom.createDate(formattedDateTime);
    populateDom.display5DaysWeather(data, currentUnits);
    populateDom.changeWeatherIcon(data);
  } catch (error) {
    const errorMessageElement = document.querySelector('.error-message');
    errorMessageElement.style.display = 'block';
  }
}

function formatDate(localtime) {
  const date = new Date(localtime);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return date.toLocaleDateString("en-US", options);
}

function toggleUnits() {
  if (currentUnits === 'metric') {
    currentUnits = 'us';
  } else currentUnits = 'metric';
  const cityValue = populateDom.searchCity();
  updateWeather(cityValue);
}

document.querySelector('.submit-btn').addEventListener('click', async (event) => {
  event.preventDefault();
  const cityValue = populateDom.searchCity();
  updateWeather(cityValue);
});

document.querySelector('.C-F').addEventListener('click', toggleUnits)


