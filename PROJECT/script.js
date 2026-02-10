var hours = document.getElementById("hours");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");
var AMPM = document.getElementById("ampm");

var cityEl = document.getElementById("city");
var tempEl = document.getElementById("temp");

function clockupdate() {
  var now = new Date();

  var hrs = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  var ampm = hrs >= 12 ? "PM" : "AM";

  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;

  hours.innerText = hrs;
  minute.innerHTML = min;
  second.innerHTML = sec;
  AMPM.innerText = ampm;
}

setInterval(clockupdate, 1000);
clockupdate();

var DEFAULT_CITY = "Jabalpur";
var API_KEY = "30c57aaa31356639f82849e3808f9f81";
var getWeather = (city = DEFAULT_CITY) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
  )
    .then((res) => res.json())
    .then((data) => {
      showDataOnUi(data);
    })
    .catch(() => {
      document.getElementById("result-div").innerHTML =
        "<p>Weather not available</p>";
    });
};

var showDataOnUi = (data) => {
  if (data.cod == 404) {
    document.getElementById("result-div").innerHTML = "<p>City not found</p>";
    return;
  }

  var temperature = data.main.temp;
  var location = data.name;
  var weatherSituation = data.weather[0].main;
  var icon = data.weather[0].icon;

  var html = `
    <div class="result-div-inner">
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" />
    </div>
    <div class="result-div-inner">
        <h2>${location}</h2>
    </div>
    <div class="result-div-inner">
        <h3>${Math.round(temperature)}° C</h3>
    </div>
    <div class="result-div-inner">
        <h4>${weatherSituation}</h4>
    </div>
  `;

  document.getElementById("result-div").innerHTML = html;
};
getWeather();
setInterval(() => {
  getWeather();
}, 3600000);
