// Here I'm creating the function that will run when the user presses on the translate button

$("#return").on("click", function (event) {
    event.preventDefault();

    // Here I'm storing my original language and my requested language into two different variables 
    var lang1 = $("#master-lang").val();
    var lang2 = $("#target-lang").val();

    // I also need to store the user's input from the first text box
    var input = $("#text-box1").val();

    // Storing my query URL in a variable with my API Key already included in it
    var queryURL = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190430T234631Z.f2cd0cc3ffc83d9d.9687146faee98bbd406d12ca501e34809de7412b&text=' + input + '&lang=' + lang1 + '-' + lang2;

    // Making the AJAX call to pull data from the URL

    $.ajax({
        method: 'GET',
        url: queryURL
    }).then(function (response) {
        console.log(response.text[0]);

        //Lastly, making sure the translated text in the response object shows up in text box 2
        $("#text-box2").text(response.text[0]);

    })
})

