function formatDate(timeStamp){
let date = new Date(timeStamp);
let hours = date.getHours();
if (hours < 10){
hours = `0 ${hours}`;
}
let minutes = date.getMinutes();
if (minutes <10){
    minutes = "0"+minutes
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`
};

function displayWeather(response){
let tempItem = document.querySelector("#temperature");
let cityItem = document.querySelector("#city");
let humidityItem = document.querySelector("#humidity");
let windItem = document.querySelector("#wind");
let descriptionItem = document.querySelector("#description");
let dateItem = document.querySelector("#date");

tempItem.innerHTML = Math.round(response.data.temperature.current);
cityItem.innerHTML = response.data.city;
humidityItem.innerHTML = response.data.temperature.humidity;
windItem.innerHTML = response.data.wind.speed;
descriptionItem.innerHTML = response.data.condition.description;
dateItem.innerHTML = formatDate(response.data.time *1000);
}

let appKey = "bfot5b9073814ac4cad9fb1fee3aac2c";
let appUrl =
`https://api.shecodes.io/weather/v1/current?query=London&key=${appKey}&units=metric`;

axios.get(appUrl).then(displayWeather);
