 
// set up variables
  var carrier = "";
  var flightNum = "";
  var date = "";

  var baseURL = "https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/";
  var appId = "?appId=240766ef"
  var apiKey = "&appKey=58e50827114a43dca4fe80587bcc8f37";
 
  var queryURL = baseURL + carrier + "/" + flightNum + "/arr/" + date + appId + apiKey;

  // Functions 
  function runQuery(flightStats, queryURL) {
      //$.support.cors = true;
      $.ajax({ url: queryURL, method: "GET", dataType: "jsonp", 
          xhrFields: {withCredentials: true},
      })
      // .done runs if the data is retrieved successfully. 
      .done(function(flightData) {
                   
      // Clear Flight Search from previous run
      $('#flightSearch').empty();


      // Need to figure out how to loop through web service. 
        console.log(flightData.flightStatuses);

      for (var i = 0; i < flightData.flightStatuses.length; i++) {
        console.log(flightData.flightStatuses[i].arrivalDate.dateLocal);
        console.log(flightData.flightStatuses[i].airportResources.arrivalGate);
      }

      // console.log(flightStats);
      // console.log(queryURL);
      // console.log(flightData);   
  });

}

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

//Attach content to appropriate arrival row.
// var newRow = $("<tr>").append(
//   $("<td>").text(airportCode),
//   $("<td>").text(scheduledTime),
//   $("<td>").text(scheduledDate),
//   $("<td>").text(actualDate),
//   $("<td>").text(terminal),
//   $("<td>").text(gate),
// )

  // $("#flightSearch").append(newRow);
  // $("#contentArea").prepend(imageDiv);





  

