$(function(){

  //grab celcius and turn it into an integer
  //do the math - multiply the integer * 1.8 + 32
  //display ferinheight in span

  $("#submitCelcius").click(handleCelcius);

  function handleCelcius() {
    var celcius = parseInt($("#celciusInput").val()); 
    // console.log("celcius input", celcius);
    var ferinheight = calculateFerinheight(celcius);
    $("#ferinheight").text(ferinheight);
    $("#returnCelcius").text(celcius);
    $("#celciusInput").val("");
  }

  //if ferinheight >= 80 display hot.img
  //else if ferinheight <= 30 display snow.img
  //else display nice.img

  $("#submitCelcius").click(changeBackground);

  function changeBackground() {
    var celcius = parseInt($("#celciusInput").val()); 
    var ferinheight = calculateFerinheight(celcius);
    
    if (ferinheight <= 90) {
      $("body").attr("class", "hot");
    } else if (ferinheight <= 50) {
      $("body").attr("class", "nice");
    } else {
      $("body").attr("class", "snow");
    }
    $("#cityType").val("");
  }

 function calculateFerinheight (celcius) {
    return celcius * 1.8 + 32;
  }

});

