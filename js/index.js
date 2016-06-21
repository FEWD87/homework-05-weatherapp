
//This app will preform temperature conversion
//takes user inputs from both fahrenheit text field and celsius text field

$(function(){

  // Listen to the submit event on the celsius-input-field
  $("#celsius").submit(function(event) {

    //assign user input Degree Celsius to celsius(variable)
    var celsius = $("#celsius-input-field").val();
    
    //prevent Default behavior from happening
    event.preventDefault();

    $("#fahrenheit-input-field").val(convertToFahrenheit(celsius));

    //adding logic : changing background picture according to temperature (degree Celsius)
    if (celsius <= 0 ) {
      $("body").attr("class","cold");
    } else if (celsius >= 30 ) {
      $("body").attr("class","hot");
    } else {
      $("body").attr("class","general");
    }
    /*console.log("called");*/

  });

  
  // listen to the submit event on the fahrenheit-input-field
  $("#fahrenheit").submit(function(event) {

    //assign user input Degree fahrenheit to fahrenheit(variable)
    var fahrenheit = $("#fahrenheit-input-field").val();

    //prevent Default behavior from happening
    event.preventDefault();

    $("#celsius-input-field").val(convertToCelsius(fahrenheit));
    
    //adding logic : changing background picture according to temperature (degree Fahrenheit)
    if (fahrenheit <= 10 ) {
      $("body").attr("class","cold");
    } else if (fahrenheit >= 86 ) {
      $("body").attr("class","hot");
    } else {
      $("body").attr("class","general");
    }
  });

 

  //This is a function : Convert degree from Fahrenheit to Celsius
  function convertToCelsius(fahrenheitDegree) {
    //round up the number and then return the result
    return Math.round((fahrenheitDegree - 32) / 1.8);
  }
  
  //This is a function : Convert degree from Celsius to Fahrenheit
  function convertToFahrenheit(celsiusDegree) {
    //round up the number and then return the result
    return Math.round((celsiusDegree * 1.8) +32);
  }



});