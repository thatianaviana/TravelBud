    
    // Lists
    // $(document).ready(

    //     $("#addItem").on("click", function(event))
    //     // function(){
    //     //     $('#addItem').click(
    //     //         function(){
    //     //             var toAdd = $('input[name=newItem]').val();
    //     //              $('ol').append('<li>' + toAdd + '</li>');
    //     //         });
           
    //     //    $("input[name=newItem]").keyup(function(event){
    //     //       if(event.keyCode == 13){
    //     //         $("#addItem").click();
    //     //       }         
    //     //   });
          
    //     //   $(document).on('dblclick','li', function(){
    //     //     $(this).toggleClass('strike').fadeOut('slow');    
    //     //   });
          
    //     //   $('input').focus(function() {
    //     //     $(this).val('');
    //     //   });
          
    //     // //   $('ol').sortable();  
          
    //     }
    // );


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

// refrencing the database
      var database = firebase.database();

// When clicking submit on the contact us section
      $("#submitButton").on("click", function(event){


        var nameInput = $("#nameArea").val().trim();
        var emailInput = $("#emailArea").val().trim();
        var commentInput = $("#textArea").val().trim();

        database.ref().push({
            name: nameInput,
            email: emailInput,
            comment: commentInput

        })

    });
