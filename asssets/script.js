


// This is our API key


// URL we need to quuery the database
var queryURL = "api.openweathermap.org/data/2.5/weather?" + "q=&APPID=" + APIKey;

console.log(APIKey);

$.ajax({
    url: queryURL,
    method: "GET"
})

// We store all of the retrieved data inside of an object called "response"
.then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    
    // Transfer content to HTML
    $("#city").html("<h1>" + response.name + " Weather Details</h1>");

    // add temp content to html
    // $("#temp").text("Temperature (K) " + response.main.temp);
    $("#tempF").text("Temperature (F) " + tempF.toFixed(2));

    // Transfer content to HTML
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#wind").text("Wind Speed: " + response.wind.speed);
    
    
    // // Convert the temp to fahrenheit
    // var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + tempF);
  });