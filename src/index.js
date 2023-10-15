import './style.css';
import {updateWeather} from './modules/link'

document.addEventListener('DOMContentLoaded', () => {
    const defaultCity = 'bucharest';
    updateWeather(defaultCity);
  });
