 
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
      .done(function(flightData) {
                   
        $('#tbody').empty();
      
      for (var i = 0; i < flightData.flightStatuses.length; i++) {

      if (flightData.flightStatuses[i] != "null") {
        
      }
        var currentTime = moment(flightData.flightStatuses[i].departureDate.dateLocal).format('MMMM Do YYYY, h:mm:ss a');

        // console.log(flightData.flightStatuses[i].flightNumber);
        // console.log(flightData.flightStatuses[i].departureAirportFsCode);
        // console.log(flightData.flightStatuses[i].arrivalAirportFsCode);
        // console.log(flightData.flightStatuses[i].departureDate.dateLocal);
        // console.log(flightData.flightStatuses[i].airportResources.arrivalTerminal);
        // console.log(flightData.flightStatuses[i].airportResources.arrivalGate);
        // console.log(flightData.flightStatuses);   

      // Send to HTML Here: 
      var newRow = $("<tr>").append(
        $("<td>").text(flightData.flightStatuses[i].flightNumber),
        $("<td>").text(flightData.flightStatuses[i].departureAirportFsCode),
        $("<td>").text(flightData.flightStatuses[i].arrivalAirportFsCode),
        $("<td>").text(currentTime),
        $("<td>").text(flightData.flightStatuses[i].airportResources.arrivalTerminal),
        $("<td>").text(flightData.flightStatuses[i].airportResources.arrivalGate),
      )

      $("#tbody").append(newRow);

  }});

};
     
// on click this pulls the query from the flightstats api 
$(".find_button").click(function() {
    event.preventDefault();

    // Get Airlinecode (carrier), Flight Number, and Date of Arrival
    flightStats = $("#flightStats").val();
    carrier = $("#airline").val().trim();
    flightNum = $("#flightNumber").val().trim();
    date = $("#date").val().trim();

      console.log("Airline: " + carrier);
      console.log("Flight Number: " + flightNum);
      console.log("Date: " + date);
      
      var newURL = baseURL + carrier + '/' + flightNum + "/arr/" + date + appId + apiKey;

      runQuery(flightStats, newURL);

  });

    
   





  

