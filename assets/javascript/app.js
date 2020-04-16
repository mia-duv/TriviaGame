var timer; 
var game = {

counter: 30,

countdown: function() {
	game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
	  clearInterval(timer);
	  $("#sub-wrapper h2").remove();
	  $("#userInput").remove();
	$("#answerDisplay").prepend(
		"<p>'Time is up! Try again'</p>"
	);
	
	}
},
	
 start: function() {

	$("#btnNext").on("click", function(){
	
	timer = setInterval(game.countdown, 1000);
	$("#sub-wrapper").prepend(
		"<h2>Time Remaining: <span id='counter-number'>10</span> Seconds</h2>",
		"<button id='btnReset'> Reset Game</button>",
	
	  );
   $("#btnNext").remove();
	var queryURL = "http://jservice.io/api/random";
$.ajax({
	url: queryURL,
	method: "GET"
  })
  .then(function(response) {
	  console.log(response);
	 currentAnswer = response[0].answer;
	  $("#question").text("Question: " + response[0].question);
	  $("#userInput").prepend(
		"<form> <input type='text' placeholder='Enter you answer here' id='userAnswer'><input type='button' value='Submit' id='submit'></form>"
	  )
	console.log(response[0].question);
	console.log(response[0].answer);
  
  $("#submit").on("click", function() {
	event.preventDefault();
	clearInterval(timer);
	$("#sub-wrapper h2").remove();
	$("#answerDisplay").prepend(
		"<h4>Answer<h4>",
		"<p id='answer'></p>"
	);
	$("#answer").text("Answer: " + response[0].answer);

})
})
})
	}

	
};


	$(document).on("click", "#startGame", function() {
		game.start();
	  });

	  $(document).on("click", "#btnReset", function() {
		window.location.reload(true);
	  });
