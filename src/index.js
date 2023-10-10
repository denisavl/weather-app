import './style.css';

const API_KEY = '9f82adb2a6b93acd11a40b897a094e1b'
async function getLocation(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bucharest,&appid=${API_KEY}`)
    const locationData = await response.json();
    console.log(locationData);
}
getLocation();