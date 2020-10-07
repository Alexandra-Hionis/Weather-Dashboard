
var res;


// let cityDate = moment().format('LLL');


document.getElementById("search").addEventListener("click", searchWeatherByCity);

function searchWeatherByCity() {
    var searchTerm = document.getElementById("searchTerm");
    // URL we need to quuery the database
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm.value}&appid=${APIKey}&units=imperial`;

    var fiveDayForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm.value}&appid=${APIKey}&units=imperial`;

    // AJAx API calls
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        res = response;
    
    $.ajax({
        url: fiveDayForecastURL,
        method: "GET"
    })
    
    .then(function(response) {
        res = response;
    })
        
        // Display name, temp and humidity
        document.getElementById("nameOfCity").innerText = res.name
        document.getElementById("temp").innerText = res.main.temp
        document.getElementById("humidity").innerText = res.main.humidity
        document.getElementById("humidity").innerText = document.getElementById("humidity").innerText + res.main.humidity
        document.getElementById("windSpeed").innerText = res.wind.speed


        document.getElementById("dayOneDate").innerText = res.list[1].dt_txt
        document.getElementById("dayOneTemp").innerText = res.list[1].main.temp
    })
    searchedCities();
}
// Previously Searched Cities Saved to Local Storage //
function searchedCities() {
    let searchedCities = JSON.parse(localStorage.getItem("searchedCitiesContainer"));
    if (searchedCities !== null) {
    cities = searchedCities;
    }
}
function storeCities() {
    localStorage.setItem("searchedCitiesContainer", JSON.stringify(cities));
}

// function fiveDay() {
//     // Display name, temp and humidity
//     document.getElementById("dayOneDate").innerText = res.list[1].dt_txt
//     document.getElementById("temp").innerText = res.main.temp
//     document.getElementById("humidity").innerText = res.main.humidity
//     document.getElementById("humidity").innerText = document.getElementById("humidity").innerText + res.main.humidity
//     document.getElementById("windSpeed").innerText = res.wind.speed
// }