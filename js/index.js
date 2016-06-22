$(function(){

	$("#submit").click(convertTemp);

	function convertTemp() {
		event.preventDefault();

		$("#tempF").html("&#8457");	

		var enteredTemp = $("#tempC").val();
		var fahrenheit = enteredTemp * 1.8 + 32;

		$("#tempF").prepend(fahrenheit.toFixed(1));

		if (fahrenheit <= 40 & fahrenheit >= -30){
			$("body").attr("class","winter");

		} else if (fahrenheit > 40 & fahrenheit <= 65){
			var springFall = ['spring', 'fall'];
			var seasonImage = springFall[Math.floor(Math.random()*springFall.length)];
			$("body").attr("class",seasonImage);

		} else if (fahrenheit > 65 & fahrenheit <= 130){
			$("body").attr("class","summer");

		} else {
			$("body").attr("class","death");
		}

	}

});