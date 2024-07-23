function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[currentDate.getDay()];
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let currentDate = new Date();
let date = document.querySelector(".currentDay");
date.innerHTML = formatDate(currentDate);

function searchCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-city-input");
  let city = searchInput.value;

  let apiKey = "b4bfef39d45aa0tc0o1538f819e3be9c";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);
}

let form = document.querySelector("#search-city-form");
form.addEventListener("submit", searchCity);

function showTemperature(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  let degrees = document.querySelector(".temperature");
  degrees.innerHTML = `${currentTemperature}`;
}
