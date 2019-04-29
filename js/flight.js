
// Set Up Variables

  var carrier = "";
  var flightNum = "";
  var date = "";

  var baseURL = "https://api.flightstats.com/flex/flightstatus/v2/json/flight/status";
  var appId = "?appId=240766ef"
  var apiKey = "appKey=c171a1e862d6550fa4f0ae7d6dc00c5a";
 
  var queryURL = baseURL + carrier + flightNum + "/arr/" + date + appId + apiKey;

  // Functions 
  function runQuery(flightStats, queryURL) {
      $.ajax({
          url: queryURL,
          method: "GET",
          dataType: "json",
      })
      .done(function(flightData) {
          console.log(flightData);            
      });

      // Clear Flight Search from previous run
      $('#flightSearch').empty();

      // Search through Flight data
      // Send information to HTML
      // Check if flight exists if not return Null
      // Attach content to appropriate row in HTML.

      console.log(flightStats);
      console.log(queryURL);

  };

  //  Return these fields to the #flightSearch table
// requestedFields: [ 
//   "airportCode", 
//   "scheduledTime", 
//   "scheduledDate", 
//   "actualDate", 
//   "terminal",
//   "gate",
// ]


// on click this pulls the query from the flightstats api 
$(".find_button").click(function() {
    event.preventDefault();

    var newURL = queryURLBase + "&q=" + flightInfo;

    flightStats = $("#flightStats").val();

    // Get Airlinecode (carrier), Flight Number, and Date of Arrival
    var carrier = $("#airline").val().trim();
    var flightNum = $("#flightNumber").val().trim();
    var date = $("#date").val().trim();
      console.log("Airline: " + carrier);
      console.log("Flight Number: " + flightNum);
      console.log("Date: " + date);
      
      runQuery(flightStats, newURL);

  });




//Attach content to appropriate departure row.
// var newRow = $("<tr>").append(
//     $("<td>").text(departure),
//     $("<td>").text(departureDate),
//     $("<td>").text(scheduleOfDeparture),
//     $("<td>").text(actualDeparture),
//     $("<td>").text(terminal),
//     $("<td>").text(gate),
// );

  // $("#flightSearch").append(newRow);

  // $("#contentArea").prepend(imageDiv);


// Attach content to appropriate Departure Row.

    // $("#arrival").val("");
    // $("#arrivalDate").val("");
    // $("#scheduledArrival").val("");
    // $("#estimatedArrival").val("");
    // $("#gate").val("");


// $("#flightSearch").append(newRow);

  // $("#contentArea").prepend(imageDiv);





