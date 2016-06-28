$(function(){

  var total = 0;
  $("#temperature").submit(handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    var enteredTemperature = $("#originalTemp").val();

    $("#originalTemp").val("");

    var parsedTemperature = parseFloat(enteredTemperature);

    total = parsedTemperature;

    total = total * 1.8 + 32

    $("#result").text(total.toFixed(0) + "° F");

    if (total < 40) {
      $("body").attr("class", "cold");
      $("#result").css("color", "#151B54");
    }

    if (total >= 40 & total <= 65) {
      $("body").attr("class", "tepid");
      $("#result").css("color", "white");
    }

    if (total >= 66 & total < 90) {
      $("body").attr("class", "warm");
      $("#result").css("color", "#25383C");
    }

    if (total >= 90) {
      $("body").attr("class", "hot");
      $("#result").css("color", "yellow");
    }

}





});