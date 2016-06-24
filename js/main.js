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


    if (ferinheight > -50 && ferinheight  <= 40 ) {
      $("body").attr("class", "snow");
    } else if (ferinheight <= 65) {
      $("body").attr("class", "nice");
    } else {
      $("body").attr("class", "hot");
    }

  }


 function calculateFerinheight (celcius) {
    return celcius * 1.8 + 32;
  }

});

