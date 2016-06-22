$(function(){

  $('form').submit(changeBackground);

  function changeBackground(event){
    event.preventDefault();
    var cTemp = parseFloat($("#cTemp").val());
    var fResult = fTemp(cTemp);
    $("#tempResult").text(fResult.toFixed(1) + String.fromCharCode(176) + "F");

    if (cTemp >= 35) {
      $('body').attr("class", "desert")
    } else if (cTemp >= 25) {
      $('body').attr("class", "beach")
    } else if (cTemp >= 15) {
      $('body').attr("class", "spring")
    } else if (cTemp >= 10) {
      $('body').attr("class", "fall")
    } else if (cTemp > 0) {
      $('body').attr("class", "cold")
    } else if (cTemp <= 0) {
      $('body').attr("class", "arctic")
    }
  }

  function fTemp(cTemp) {
    return 9/5 * cTemp + 32;
  }




});