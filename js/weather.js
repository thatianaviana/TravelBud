var APIKey = "ee58048cde36570dd38665f9f7468325";
var cityInput = "";

$("#weatherButton").on("click", function () {

    cityInput = $("#weatherApp").val();


    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    console.log(cityInput);

    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        console.log(response.name);
        console.log(response.main.temp);
        // Create CODE HERE to transfer content to HTML
        $(".city").html("<h1 class='weather-header'>" + response.name + " Current Weather</h1>");
        // $(".city").append(response.name);
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $(".temp").html("Current Temperature: " + response.main.temp + "&#176");
        $(".temp-high").html("High: " + response.main.temp_max + "&#176");
        $(".temp-low").html("Low: " + response.main.temp_min + "&#176");
        $('#weatherIcon').attr('src', iconurl);
 




        // Create CODE HERE to calculate the temperature (converted from Kelvin)

        // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
        // Create CODE HERE to dump the temperature content into HTML


    });





})
