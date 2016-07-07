$(function(){
	//make a click function that will run conversion
	$("#convertF").click(convertFa);


	function convertFa(e){
		e.preventDefault();
		//grab user input
		//parse inputted value 
		//store parse value into a variable
		var cToF = parseInt($("#celsius").val());
		//convert this variable to fah
		var finalTemp = ( (9/5) * cToF + 32);
		$("#result").text("Fahrenheit:" + finalTemp + " " + "degrees");	


		if (finalTemp < 35) {
			$("body").css({"background-image": "url(images/snow.jpg)"});
		} else if (finalTemp < 64) {
			$("body").css({"background-image", "url(images/spring.jpg" , "background-repeat": "no-repeat", "background-size": "cover"}); 
		} else if (finalTemp > 65) {
			$("body").css({"background-image", "url(images/desert.jpg)"});
		};


	};

	


	



	//convert this variable to fah

	//store converted variable into a variable then change text into f results

	//do if else if else based on groups of 40 range so 0-50 to ice 50-70 -> spring -> 70-100 -> summer 





});
