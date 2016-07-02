$(function(){

$("#convert").click(function(){
  // console.log('click')
  event.preventDefault();
  //console.log('preventDefault')
  var enteredDegree = $('#celcius').val();

  var parsedDegree = parseInt(enteredDegree);

  var farDegree = Math.round(parsedDegree * 9 / 5 + 32);

  //clear text field
  $("#celcius").val("");

  //print result in result field & add far sign
  $("#result").text("Result: °F " + farDegree);

  if (farDegree<65) 
    { $('body').attr("class", "winter"); 
  } 
  else if (farDegree >= 65 && farDegree<90) {
    $('body').attr("class","spring");
  }
  else {
    $('body').attr("class", "summer");
  }

  });

  $("#spanish").click(function(){
  $("#spanish").hide();
  // $("#spanish").slideToggle();
  });

  $("#french").click(function(){
  $("#french").hide();
  // $("#french").slideToggle();
  });

  $("#russian").click(function(){
  $("#russian").hide();
  // $("#russian").slideToggle();
  });

  $("div").click(revealThanks);

  function revealThanks () {
    $("#spanish").slideToggle();
    $("#french").slideToggle();
    $("#russian").slideToggle();
  }



//   $("function toggleThanks () {

 
//   }
// });

//how do I make enter work as well as click?






});