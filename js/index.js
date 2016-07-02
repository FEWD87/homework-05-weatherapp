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


  // Add a click event to each list item
  $(".list").click(function(){
    //Add toggleClass method to the item
    // that is clicked so its class will toggle
    // ".done" on and off
    //if u click one of the elements it will add / remove class done
    $(this).toggleClass('done');
    //THIS one is for each one to work separately =)
  });

  var isDisplayed = false;

  $("#showStuff").click(function() {
    // create a variable with staff names
    var stuff = ['Irina', 'lazy', 'cool'];

    // iterate (loop through array), we automatically get access to the 
      // element and the index variables
    $.each(stuff, function(index, element){
      $("#stuff").append("<li>" + element + "</li>");
      $("#showStuff").text("Hide Fun Stuff");
    });

    if (isDisplayed) {
       isDisplayed = false;
      $("li").hide();

    } else {
      isDisplayed = true;
      $("li").show();
    };

  //DO I MAKE SHOW FUN STUFF REPEAT ?

  });

  // $("#showStuff").click(function() {
      
  //     $("#showStuff").text("Show Fun Stuff");
  // });
  //HOW 

  //HOW do I make click on enter on keyboard work as well as click for the top?

// put in a form




});