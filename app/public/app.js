$(document).ready(function() {

	$('.questions').select2({
	placeholder: "Select an Option"
	})
	
	

	// var user = {};
	// var userScore = [];

	// var y = 0;
	// var matchName;
 //  	var matchImage;


	$('.butt2').on('click', function(){

   		var newFriendData = {
      		name: $('#name').val().trim(),
      		photo: $('#image').val().trim(),
			scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
		};
		console.log(newFriendData)
    

    $.post("/api/friends", newFriendData,
	    function(){

	    	//reset the name and image
	        $('#name').val("");
			$('#image').val("");
		});



	});


});







		