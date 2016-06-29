$(function(){

  $("#convert").click(convertTemp);

    function convertTemp(event) {
      event.preventDefault();
    
    var temp = $("#temp").val();
    var parseTemp = parseInt(temp);
    var Farenheit = Math.round(parseTemp * 9 / 5 + 32);
   
    $("#output").text("Here you go: " + Farenheit + "F");

        if (Farenheit <= 35) {
            $("body").attr("class", "freezing"); 
        } else if (Farenheit > 35 && Farenheit <= 65) {
            $("body").attr("class","average");
        } else if (Farenheit >= 66) {
            $("body").attr("class", "hot");
        } else {
            $("body").attr("class", "none");
        }
    }

    $("#temp").val("");

});