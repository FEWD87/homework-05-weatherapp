$(function(){

  $("#submit").click(convertTemp);

  function convertTemp() {
    event.preventDefault();

    $("#tempF").html("&#8457"); 

    var enteredTemp = $("#tempC").val();
    var fahrenheit = enteredTemp * 1.8 + 32;

    $("#tempF").prepend(fahrenheit.toFixed(1));
//     if (fahrenheit <= 30 && fahrenheit >= -30) {
//       $("body").attr("class", "freezing");

//     } else if (fahrenheit > 30 && fahrenheit <= 60) {
//       $("body").attr("class", "cold");

//     } else if (fahrenheit > 60 && fahrenheit <= 75) {
//       $("body").attr("class", "warm");

//     } else if (fahrenheit > 75 && fahrenheit <= 95) {
//       $("body").attr("class", "hot");

//     } else (fahrenheit > 95) {
//       $("body").attr("class", "boiling");
//     }

  }

});

