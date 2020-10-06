
var res;


// We store all of the retrieved data inside of an object called "response"
// .then(function (response) {

//     // Log the queryURL
//     console.log(queryURL);

//     // Log the resulting object
//     console.log(response);


//     // Transfer content to HTML
//     $("#city").html("<h1>" + response.name + " Weather Details</h1>");

//     // add temp content to html
//     // $("#temp").text("Temperature (K) " + response.main.temp);
//     $("#tempF").text("Temperature (F) " + tempF.toFixed(2));

//     // Transfer content to HTML
//     $("#humidity").text("Humidity: " + response.main.humidity);
//     $("#wind").text("Wind Speed: " + response.wind.speed);


//     // Log the data in the console as well
//     console.log("Wind Speed: " + response.wind.speed);
//     console.log("Humidity: " + response.main.humidity);
//     console.log("Temperature (F): " + tempF);
// });


document.getElementById("search").addEventListener("click", searchWeatherByCity);

function searchWeatherByCity() {
    var searchTerm = document.getElementById("searchTerm");
    // URL we need to quuery the database
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm.value}&appid=${APIKey}&units=imperial`


    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
        res = response;
        
        document.getElementById("nameOfCity").innerText = res.name
        document.getElementById("temp").innerText = res.main.temp
        document.getElementById("humidity").innerText = document.getElementById("humidity").innerText + res.wind.speed
        


    })
}