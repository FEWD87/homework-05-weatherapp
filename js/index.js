$(function(){

  $("#submit-btn").click(handleCelsius);

  function handleCelsius(event){
    event.preventDefault();

    var celcius = $("#temperatureVal").val();

    var fahren = celcius * 9/5 + 32;

    $("#fahren").text("Fahrenheit" + " " + fahren);

    if (fahren < 40) {
      $("body").attr("class", "winter");
    }
    else if (fahren < 74) {
      $("body").attr("class", "fall");
    }
    else if (fahren > 75) {
      $("body").attr("class", "summer");
    }
  }

//else if (fahren > 75) {
      //$("container").attr("background-image", "url(images/peaceful-summer-day-wallpapers-1920x1080.jpg");
 //   }
 // }




  });