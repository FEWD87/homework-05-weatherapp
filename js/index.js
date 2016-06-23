$(function(){

    $("#submit-btn").click(convert);

    function convert(event) {
        event.preventDefault();

        // obtain celsius degree that user has input
        var c = $("#celsius").val();
        // convert user input to an integer
        var parsedC = parseInt(c);
        // calculate value of celsius/convert to fahrenheit
        var f = Math.round(parsedC * 9 / 5 + 32);

        // Print result to screen
        $("#fahrenheit").html(f + "&deg;" + "F");

        if (f <= 32) {
        // if the above is true, change class to reflect background-image of "freezing"    
            $('body').attr('class', 'freezing'); 
        } else if (f > 32 && f <= 50) {
        // if the above isn't true, follow all below instructions to display associated background-image
        // based on the converted temperature
            $('body').attr('class', 'cool');
        } else if (f > 50 && f <= 65) {
            $('body').attr('class', 'moderate');
        } else if (f > 65 && f <= 80) {
            $('body').attr('class', 'warm');
        } else {
            $('body').attr('class', 'hot');
        }
    }

});