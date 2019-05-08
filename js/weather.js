var APIKey = "ee58048cde36570dd38665f9f7468325";
var cityInput = "";

$("#weatherButton").on("click", function () {
    //variable that will hold whatever city the use input in the search bar
    cityInput = $("#weatherApp").val();

    // Here we are building the URL we need to query the database
    //&units=imperial& is making the temperature F
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=" + APIKey;
    console.log(cityInput);


    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(queryURL);
        // console.log(response);
        // console.log(response.name);
        // console.log(response.main.temp);
        // Code below will transfer content to HTML
        $(".city").html("<h1 class='weather-header'>" + response.name + " Current Weather</h1>");
        // $(".city").append(response.name);
        //the variable below holds the info for the icons for the weather track
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        //math.round is making the numbers round. &#176 is for the degree symbol
        $(".temp").html("Temperature: " + Math.round(response.main.temp) + "&#176");
        $(".temp-high").html("High: " + Math.round(response.main.temp_max) + "&#176");
        $(".temp-low").html("Low: " + Math.round(response.main.temp_min) + "&#176");
        //this will place the weather icons into HTML
        $('#weatherIcon').attr('src', iconurl);
    });
})
