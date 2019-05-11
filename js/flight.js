
// set up variables
var carrier = "";
var flightNum = "";
var date = "";
var newDate = (date.substring(date.length - 4, date.length) + "/" + date.substring(0, 2) + date.substring(2, 4));

var baseURL = "https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/";
var appId = "?appId=240766ef"
var apiKey = "&appKey=58e50827114a43dca4fe80587bcc8f37";

var queryURL = baseURL + carrier + "/" + flightNum + "/arr/" + newDate + appId + apiKey;

// Functions 
function runQuery(flightStats, queryURL) {
  //$.support.cors = true;
  console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp",
    xhrFields: { withCredentials: true },
    success: function (flightData) {

      $('#tbody').empty();

      for (var i = 0; i < flightData.flightStatuses.length; i++) {

        var departureTime = moment(flightData.flightStatuses[i].departureDate.dateLocal).format('MMMM Do YYYY, h:mm a');
        var arrivalTime = moment(flightData.flightStatuses[i].arrivalDate.dateLocal).format('MMMM Do YYYY, h:mm a');
        
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
          $("<td>").text(departureTime),
          $("<td>").text(arrivalTime),
          $("<td>").text(flightData.flightStatuses[i].airportResources.arrivalTerminal),
          $("<td>").text(flightData.flightStatuses[i].airportResources.arrivalGate),
          
        )
        $("#tbody").append(newRow);

      }
    },
    error: function (err) {
      console.log('No Flight Information Available');
      // $('#tbody').empty();
      // var newRow = $("<tr>").append(
      //   $("<td>").text("No Flight Information Available"),
      // )
      //   $("#tbody").append(newRow);
    }
  })
};

// on click this pulls the query from the flightstats api 
$(".find_button").click(function () {
  event.preventDefault();

  // Get Airlinecode (carrier), Flight Number, and Date of Arrival
  flightStats = $("#flightStats").val();
  carrier = $("#airline").val().trim();
  flightNum = $("#flightNumber").val().trim();
  date = $("#date").val().trim();

  newDate = (date.substring(date.length - 4, date.length) + "/" + date.substring(0, 2) + date.substring(2, 4));

  console.log("Airline: " + carrier);
  console.log("Flight Number: " + flightNum);
  console.log("Date: " + date);
  console.log("New Date: " + newDate)

  var newURL = baseURL + carrier + '/' + flightNum + "/arr/" + newDate + appId + apiKey;

  runQuery(flightStats, newURL);

});










