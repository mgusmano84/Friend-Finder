$(document).ready(function() {

	$('.questions').select2({
	placeholder: "Select an Option"
	})
	


	$('.butt2').on('click', function(){

   		var newFriendData = {
      		name: $('#name').val().trim(),
      		photo: $('#image').val().trim(),
			scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
		}
		console.log(newFriendData)
    


    $.post("/api/friends", newFriendData,
	    function(){

	    	//reset the name and image
	        $('#name').val("");
			$('#image').val("");
		});
	

	var currentURL = window.location.origin;

	var resultArray = []

	var matchName;
    var matchImage;

    // ****************************************************************
   
    $.get(currentURL + "/api/friends", function(friendData){
        
        for (var i = 0; i < friendData.length; i++) {
          console.log(friendData[2].name);
          var matchName=friendData[2].name;
          var matchImage=friendData[2].photo;
          $("#match-name").text(matchName);
          $("#match-img").attr("src", matchImage);
        }
      })

    //          if (resultArray.length == friendData.length) {
    //         var indexOfMatch = resultArray.indexOf(Math.min.apply(Math, resultArray));
    //         matchName = friendData[indexOfMatch].name;
    //         matchImage = friendData[indexOfMatch].image;
    //         displayModal();
    //       }
    // })

    // function compareMatches(friendData, newFriendData) {
    // y= 0
    // y++;
    // var resultArray = [];
    // console.log("==== Friend " + y + " results ====" )
    // for (i = 1; i <= 10; i++){
    // 	var compare = Math.abs(friendData[i] - newFriendData[i]); 
     
    //   resultArray.push(compare);
    // }

    // }

          //Display modal with information on match.
      // function modalMain() {
      //   // $("#user-name").text(newFriendData.name);
        
      //   // $("#match-img").attr("src", matchImage);
      //   $("#myModal").modal('show');
      // }

// **************************************************

	});




});







		