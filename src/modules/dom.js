export const populateDom = (() => {
  function formatDate(date) {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = new Date(date).toLocaleDateString("en-US", options);

    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");

    return `${formattedDate} | ${hour}:${minute}`;
  }
  function createDate() {
    const dateDisplay = document.querySelector(".date");
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    dateDisplay.textContent = formattedDate;
  }
  createDate();

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

  function searchCity() {
    const searchCity = document.querySelector("#search");
    const cityValue = searchCity.value;
    return cityValue;
  }

  function extractLocation(locationData) {
    const cityName = document.querySelector(".city-name");
    const countryName = document.querySelector(".country");
    cityName.textContent = locationData.name + ", ";
    countryName.textContent = locationData.sys.country;
  }

  function displayTemp(tempData) {
    const temp = document.querySelector(".temperature");
    temp.textContent = Math.round(tempData.main.temp) + "°C";

    const feelsLike = document.querySelector('.feels-like-degree');
    feelsLike.textContent = Math.round(tempData.main.feels_like) + "°C";
  }

  function weatherDescription(descriptionData){
    const description = document.querySelector('.weather-description');
    const inputDescription = descriptionData.weather[0].description;
    description.textContent = capitalizeFirstLetter(inputDescription);
  }

  return {
    extractLocation,
    searchCity,
    displayTemp,
    weatherDescription
  };
})();
