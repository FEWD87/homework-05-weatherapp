$(function(){
    
    $('#submitBtn').click(ConvertTemp)

    function ConvertTemp(event){
      event.preventDefault();
      var celsiusInput = parseInt($('#newEntry').val());
      var result1Val = (celsiusInput *(9/5)) + 32;


    $('#result1').html(result1Val);

        if (result1Val >85){
          $('body').css('background',"url(images/sun.jpeg");
        } else if (result1Val >32){
         $('body').css('background',"url(images/spring.jpg");
        } else if (result1Val <= 32){
          $('body').css('background',"url(images/snowflakes.jpg");
        }
    }

});