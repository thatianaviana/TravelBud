


$("#buttons-view").on("click", "button",function() {
    var person = $(this).attr("data-name");
    
    var baseURL = "https://api.flightstats.com/flex/schedules/rest/v1/json/flight";
    var appId = "240766ef"
    var apiKey = "c171a1e862d6550fa4f0ae7d6dc00c5a";
    var carrier 
    var flightNumber
    var year
    var month
    var day

    var searchTerm = $(this).text();

    var queryURL = baseURL + carrier + flightNumber + year + month + day + "?appId=" + appId + "&appKey=" + appKey;


    $("#contentArea").empty();

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var imageDiv = $("<div class='item'>");
                var rating = results[i].rating;

                var p = $("<p class='rating'>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height_still.url);
                personImage.attr("data-animate", results[i].images.fixed_height.url);
                personImage.attr("data-still", results[i].images.fixed_height_still.url);
                personImage.attr("data-state", "still");
                personImage.addClass("gif");

                imageDiv.prepend(p);
                imageDiv.prepend(personImage);

                $("#contentArea").prepend(imageDiv);
                
            }
        });
});