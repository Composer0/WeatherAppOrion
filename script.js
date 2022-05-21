let appKey = "key=9c6045f2530f4a24a81130713221505"
let query = req.body.cityName
let searchTerm = search.value
let url = "https://api.weatherapi.com/v1/current.json?" + appKey + "&q=" + searchTerm
const defaultURL = 'https://api.weatherapi.com/v1/current.json?key=9c6045f2530f4a24a81130713221505&q=Aiken'

// values being gathered for app.
let city = weatherData.location.name
let currentDay = weatherData.current.is_day
let conditionText = weatherData.current.condition.text
let icon = weatherData.current.condition.icon
let tempC = weatherData.current.temp_c
let tempF = weatherData.current.temp_f
let windMPH = weatherData.current.wind_mph
let windKPH = weatherData.current.wind_kph




// // This will be need later to swap between celcius and fahrenheit data.

let celsius = document.querySelector("#celcius");
celsius.addEventListener("click", convertToCelcius);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToFahrenheit);

function convertToCelsius (event){
    event.preventDefault();
     if (currentTemp == null){
      alert("Please search for a city");
    }
    fahrenheit.classList.remove("active");
    celsius.classList.add("active");
    let displayCelsius= document.querySelector(".currentTemp");
    tempC = Math.round((currentTemp - 32) * 5/9);
    displayCelsius.innerHTML= tempC;
  }
  
  function convertToFahrenheit (event) {
    event.preventDefault();
    if (currentTemp == null || tempC == null){
      searchCurrentCity();
    }
    celsius.classList.remove("active");
    fahrenheit.classList.add("active");
    let displayFahrenheit = document.querySelector(".currentTemp");
    let tempF = Math.round((celsiusTemp * 9/5) + 32);
    displayFahrenheit.innerHTML = tempF;
  }







console.log(city, region, country, tempC, tempF, currentDay, windMPH, windKPH, conditionText)