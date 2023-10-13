import { api } from "./api";
import { populateDom } from "./dom";

async function updateWeather(city) {
    const data = await api.city(city);
    populateDom.extractLocation(data);
    populateDom.displayTemp(data);
    populateDom.weatherDescription(data);

const coord = await api.forecastData(city);
    
}

document.querySelector('.submit-btn').addEventListener('click', async (event) => {
    event.preventDefault();
    const cityValue = populateDom.searchCity();
    updateWeather(cityValue);
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultCity = 'bucharest';
    updateWeather(defaultCity);
});

