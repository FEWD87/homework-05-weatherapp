$(function(){

  var temp = 0
 $("#entry").submit(handleSubmit);
 

  function handleSubmit(event) {

    /** the default behavior is to send the form entry
    to the backend server. This will prevent that**/
    event.preventDefault();

    var enteredAmount = $("#newEntry").val();

    var parsedAmount = parseInt(enteredAmount);


    temp = parsedAmount * 1.8 + 32;

    //clear text field
    //$("#newEntry").val("")

    console.log("temp", temp);

    //print updated total to the screen - keep 2 decimal places
    $("#readout").text(temp);

    if (temp <= 0) {
      $("body").attr("class", "low");
    } else if (temp <= 10 && temp > 0) {
      $("body").attr("class", "zero");
    } else if (temp <= 20 && temp > 10) {
      $("body").attr("class", "ten");
    } else if (temp <= 30 && temp > 20) {
      $("body").attr("class", "twenty");
    } else if (temp <= 40 && temp > 30) {
      $("body").attr("class", "thirty");
    } else if (temp <= 50 && temp > 40) {
      $("body").attr("class", "forty");
    } else if (temp <= 60 && temp > 50) {
      $("body").attr("class", "fifty");
    } else if (temp <= 70 && temp > 60) {
      $("body").attr("class", "sixty");
    } else if (temp <= 80 && temp > 70) {
      $("body").attr("class", "seventy");
    } else if (temp <= 90 && temp > 80) {
      $("body").attr("class", "eighty");
    } else if (temp <= 100 && temp > 90) {
      $("body").attr("class", "ninety");
    } else if (temp > 100) {
      $("body").attr("class", "high");
    }


  }



});