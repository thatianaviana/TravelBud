

$(".find_button").on("click", "button",function() {

    var flight = $(this).attr("data-name");
    var appId = "240766ef"
    var apiKey = "c171a1e862d6550fa4f0ae7d6dc00c5a"


    var queryURL = "https://api.flightstats.com/flex/schedules/rest/v1/json/" +
    "appId=" + appId + "&api_key=" + apiKey + "?callback=myCallback";


  // How to AJAX call on rest API? 

    $.ajax({
            url: queryURL,
            method: "GET",
            dataType: "jsonp",
        })
        .done(function(response) {
            var results = response.data;
            }
        );
});


$(".find_button").click(function() {
    event.preventDefault();

    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    var airline = $("#airline").val().trim();
    var flightNumber = $("#flightNumber").val().trim();
    var date = $("#date").val().trim();
      console.log("Airline: " + airline);
      console.log("Flight Number: " + flightNumber);
      console.log("Date: " + date);

    // Local object for flight data
    var newFlight = {
      nameOfAirline: airline,
      numOfAirline: flightNumber,
      departureDate: date,
  };

    var departureDetails = {
        depature: Airport, 
        departureDate: date, 
        scheduleofDeparture: Time;
        actualDeparture: ;
        terminal: ;
        gate: ;
    }


// Departure Details 
var newRow = $("<tr>").append(
    $("<td>").text(departure),
    $("<td>").text(departureDate),
    $("<td>").text(scheduleOfDeparture),
    $("<td>").text(actualDeparture),
    $("<td>").text(terminal),
    $("<td>").text(gate),
);

  $("#flightSearch").append(newRow);

  $("#contentArea").prepend(imageDiv);


// Arrival Details

    $("#arrival").val("");
    $("#arrivalDate").val("");
    $("#scheduledArrival").val("");
    $("#estimatedArrival").val("");
    $("#gate").val("");


  //   $.getJSON("http://localhost:8080/restws/json/product/get?callback=?",
  //  function(data) {
  //    alert(data);         
  //  });

  //   $.ajax({ 
  //     type: "GET",
  //     dataType: "jsonp",
  //     url: "http://localhost:8080/restws/json/product/get",
  //     success: function(data){        
  //       alert(data);
  //     }
  //  });









