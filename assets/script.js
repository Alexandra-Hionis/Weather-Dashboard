
var res;
var forecastRes

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
        console.log(response);
        res = response;  
        setCurrent();
    })
    $.ajax({
        url: fiveDayForecastURL,
        method: "GET"
    })
    
    .then(function(response) {
        console.log(response);
        forecastRes = response;
        setForecast();
    })

    addCityToStorage(searchTerm.value);
    setSearches();
    displayDate();
}

let currentDate = moment().format('dddd, MMMM Do YYYY');

function displayDate() {
  $("#currentDay").text(currentDate);
}

// Previously Searched Cities Saved to Local Storage //
function searchedCities() {
    if (searchedCities !== null) {
    cities = searchedCities;
    }
}

function addCityToStorage(city) {
    var savedSearch = localStorage.getItem("savedSearch")
    if (!savedSearch) {
        savedSearch = {
        savedCities: []
      };
    } else {
      savedSearch = JSON.parse(savedSearch)
    }
    savedSearch.savedCities.push(city);
    savedSearch = JSON.stringify(savedSearch);
    localStorage.setItem("savedSearch", savedSearch);
  }

  function setSearches(){
    let savedSearch = JSON.parse(localStorage.getItem("savedSearch"));
    var container = document.getElementById("searchedCitiesContainer");
  
    savedSearch.savedCities.forEach(city => {
      var paragraphElement = document.createElement("P");
      paragraphElement.innerText = city;
      container.appendChild(paragraphElement)
    });
  }

function setCurrent () {
    // Display name, temp and humidity
    document.getElementById("nameOfCity").innerText = res.name
    document.getElementById("temp").innerText = res.main.temp + "\xB0 F"
    var humidity = document.getElementById("humidity").innerText = res.main.humidity + " %"
    document.getElementById("windSpeed").innerText = res.wind.speed + " mph"
}
function storeCities() {
    localStorage.setItem("searchedCitiesContainer", JSON.stringify(cities));
}

function addToSavedSearch() {

}
// For loop to loop through forecast array ?
function setForecast() {

    for (let i = 1; i < 6; i++) {
      
        var currentDay = forecastRes.list[i];
  
        document.getElementById("day" + i).innerText = currentDay.dt_txt
        document.getElementById("temp" + i).innerText = currentDay.main.temp + "\xB0 F"
        document.getElementById("icon" + i).src = getIcon(currentDay.weather[0].icon);
    }
  
  } 

function getIcon(iconName){
    return `https://openweathermap.org/img/wn/${iconName}@2x.png`
}



