  //  https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/AA/1659/arr/2019/4/27?appId=240766ef&appKey=c171a1e862d6550fa4f0ae7d6dc00c5a&utc=false
// Set Up Variables

  var carrier = "";
  var flightNum = "";
  var date = "";

  //  https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/{airline}/{flightNumber}/arr/{year}/{month}/{day}?appId=240766ef&appKey=c171a1e862d6550fa4f0ae7d6dc00c5a&utc=false
  // https://api.flightstats.com/flex/schedules/rest/v1/json/flight/nw/1070/departing/2019/4/29?appId=240766ef&appKey=58e50827114a43dca4fe80587bcc8f37"

  var baseURL = "https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/";
  var appId = "?appId=240766ef"
  var apiKey = "&appKey=58e50827114a43dca4fe80587bcc8f37";
 
  // jQuery.ajaxPrefilter(function (options) {
  //   if (options.crossDomain && jQuery.support.cors) {
  //       options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  //   }
  // });

  

  var queryURL = baseURL + carrier + "/" + flightNum + "/arr/" + date + appId + apiKey;

  // Functions 

  function runQuery(flightStats, queryURL) {
      //$.support.cors = true;
      $.ajax({
          url: queryURL,
          method: "GET",
          dataType: "jsonp",
          xhrFields: {
            withCredentials: true
        },
        
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

    // var newURL = baseUrl + "&q=" + flightInfo;

    flightStats = $("#flightStats").val();

    // Get Airlinecode (carrier), Flight Number, and Date of Arrival
    carrier = $("#airline").val().trim();
    flightNum = $("#flightNumber").val().trim();
    date = $("#date").val().trim();
      console.log("Airline: " + carrier);
      console.log("Flight Number: " + flightNum);
      console.log("Date: " + date);
      
      var newURL = baseURL + carrier + '/' + flightNum + "/arr/" + date + appId + apiKey;

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





