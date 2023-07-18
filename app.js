function displayWeather(response){
let tempItem = document.querySelector("#temperature");
let cityItem = document.querySelector("#city");
let humidityItem = document.querySelector("#humidity");
let windItem = document.querySelector("#wind");
let descriptionItem = document.querySelector("#description");

tempItem.innerHTML = Math.round(response.data.temperature.current);
cityItem.innerHTML = response.data.city;
humidityItem.innerHTML = response.data.temperature.humidity;
windItem.innerHTML = response.data.wind.speed;
descriptionItem.innerHTML = response.data.condition.description;
}

let appKey = "bfot5b9073814ac4cad9fb1fee3aac2c";
let appUrl =
`https://api.shecodes.io/weather/v1/current?query=London&key=${appKey}&units=metric`;

axios.get(appUrl).then(displayWeather);
