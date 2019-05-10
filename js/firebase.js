//Login Code
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write('Hello ${user.displayName}');
            console.log(user)
        })
        .catch(console.log)
}




// Packing List code
function renderPackingList(list){

// Empties out the HTML
$("#items").empty(); 

// Render the entered items onto the page
for(var i = 0; i< list.length; i++){

    // Create a new variable that will hold the p tag and then set the value for the packing list item to the p tag.
    var packingListItems = $("<p>");
    packingListItems.text(list[i]);

    // Create a button and give it unique IDS based on what number the item is on the list.
    var itemClose = $("<button>");

    // Giving the button the data attributes of "data-packing-item" and the list item number
    itemClose.attr("data-packing-item", i);

    // Making the button a checkbox and giving it a check mark
    itemClose.addClass("checkbox far fa-check-circle btn btn-warning");

    // Append the button to the list item
    packingListItems = packingListItems.prepend(itemClose);

    // Append the button and the list item to the div that is holding the packing list
    $("#items").append(packingListItems)
}
}

$('.add-to-list').on("click", function(event){
    event.preventDefault();

    // Get the value of the packing item from the textbox and store it as a variable
    var itemsAdd = $("#to-bring").val().trim()

    // Adding the new item to our local list variable and adding it to the local storage
    list.push(itemsAdd);

    // Update the list of packing items to the page
    renderPackingList(list);

    // Save the list of packing items to session storage
    // I used JSON.stringify to turn the list from an array into a string
    sessionStorage.setItem("packinglist", JSON.stringify(list));

    // clear the textbox when the item has been submitted
    $("#to-bring").val("");
});

// When the user clicks the checkbox it deletes the content attached to it
$(document).on("click", ".checkbox", function(){

// get the number of the button from the data attribute it was assigned and hold in a variable called itemNumber
var itemNumber = $(this).attr("data-packing-item");

// deletes the item that had the checkbox clicked
list.splice(itemNumber, 1);

// update the packing items on the page
renderPackingList(list);

// save the items into the session storage
// I used JSON.stringify to turn the list from an array to a string
sessionStorage.setItem("packinglist", JSON.stringify(list));

});

// load the items from the session storage
// used JSON.parse to turn the string that was pulled in from the array into a string
var list = JSON.parse(sessionStorage.getItem("packinglist"));

// Checks to see if the list of items exists in local storage and is an array
// If it is not it sets a local list variable to an empty array
// otherwise list the current list of items
if(!Array.isArray(list)){
    list = [];
}

// Render the packing list on page load so even if refreshed the items are still there
renderPackingList(list);


// Contact sheet firebase
// Initialize Firebase

var config = {
    apiKey: "AIzaSyCWDeJVuDDy76ttB7nKF9PV2mv9SeZO_dk",
    authDomain: "travelbud-86bbc.firebaseapp.com",
    databaseURL: "https://travelbud-86bbc.firebaseio.com",
    projectId: "travelbud-86bbc",
    storageBucket: "travelbud-86bbc.appspot.com",
    messagingSenderId: "534479797714"
  };
  firebase.initializeApp(config);

// Created a variable that I can use to referencce the firebase database
  var database = firebase.database();

// When clicking submit on the contact us Submit Button initiate the function to store the data to Firebase
  $("#submitButton").on("click", function(event){

    // Variables for the different elements that are being inputted on the contact us section
    var nameInput = $("#nameArea").val().trim();
    var emailInput = $("#emailArea").val().trim();
    var commentInput = $("#textArea").val().trim();

    // Pushing the information collected from the input sections into the firebase database
    // in ref if it is contact add contact to what database you are referencing .ref(contact)
    database.ref().push({
        name: nameInput,
        email: emailInput,
        comment: commentInput

    })
//need to clear out contact form once the data has been submitted
    $("#nameArea").val("");
    $("#emailArea").val("");
    $("#textArea").val("");

});