$("#searchButton").on("click", function () {

    //when the function is called, it converts the amount, from/to 
    convertCurrency($("#from-amount").val(), $("#from").val(), $("#to").val(), function (err, amount) {
        $("#to-amount").val(amount);
        console.log(amount);
    });


});

function convertCurrency(amount, fromCurrency, toCurrency, callback) {
    var apiKey = 'c72b26fb69f4afbfed2b';

    // fromCurrency = encodeURIComponent(fromCurrency); make money characters readable - for any type of character 
    // toCurrency = encodeURIComponent(toCurrency);
    var query = fromCurrency + '_' + toCurrency;
    //USD_BRL

    var url = 'https://free.currconv.com/api/v7/convert?q='
        + query + '&compact=ultra&apiKey=' + apiKey;

    //could also use ajax call
    $.get(url, function (response) {
        // xhrFields: {
        //     withCredentials: true
        // },
        // $.support.cors = true;
        //we get an object response back - 

       console.log(response);

        //query contains the string whose value is equal to object's property
        //query = USD_BRL
        //USD_BRL is the property and the 0.874664 is the value (numbers & currency only for reference)
        var value = response[query];
        console.log(value);

        if (value) {
            var total = value * amount; //amount here refers to the amount the user is inputting in the site - value is the currency rate

            //callback is a parameter that we declared for the convertCurrency function 
            callback(null, Math.round(total * 100) / 100);
        } else {
            var err = new Error("Value not found for " + query);
            console.log(err);
            callback(err);
        }

    })
}

$.ajax 