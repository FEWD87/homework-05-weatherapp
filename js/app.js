$(function(){

	var temperature = 0

		$("#entry").submit(function(){

		event.preventDefault();
		//console.log(event);
		//console.log('form was submitted');

		//read amount entered in (this will be a string)
		var enteredAmount = $("#celsius").val();

		// convert string amount to integer
		var parsedAmount = parseInt(enteredAmount);

		//add the amount to the total
		temperature = parsedAmount * 9 / 5 + 32;

		console.log('celsius', temperature)

		//print updated total to screen and keeps two decimal places and the $ sign
		$("#temp").text(temperature + " F");
		//clear text field
		$("#celsius").val("");
	

		if(temperature > 90){
			$('body').css('background', 'url(images/fire.jpg)');
			$('#temp').css('color', 'orange');
		} else if  (temperature < 60) {
			$('body').css('background', 'url(images/ice.jpg)');
			$('#temp').css('color', '#b0e0e6');
		} else {
			$('body').css('background', 'url(images/cloud.jpg)');
			$('#temp').css('color', 'black');
		}
		

		});


});