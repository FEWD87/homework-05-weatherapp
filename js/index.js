$(function(){
 
// listen for user clicking 'submit'/submitting text

$("#submit-btn").click(changeBackground);
// $("#submit-btn").click(convertTemp);

function convertTemp() {
 // Set the initial variables for c (Celsius) and f (Fahrenheit)
 var ctemp = document.getElementById('ctemp'), ftemp = document.getElementById('ftemp');
 // Test if there is a value for Celsius
 if(ctemp.value != '') {
  // Set the value for Fahrenheit
  ftemp.value = Math.round(ctemp.value * 9 / 5 + 32);
  // Clear the value for Celsius
  // ctemp.value = '';
 // If there isn't a value for Celsius
 }
}



 
function changeBackground(event) {
 
  event.preventDefault();
  convertTemp();
 
  
  var ftemp = parseInt($("#ftemp").val());
  console.log(ftemp,(typeof ftemp))
  
  
  
  if(ftemp <= 32){
      $("body").attr("class", "cold");
  }
  
  else if(ftemp > 32 && ftemp < 55){
      $("body").attr("class", "mild");
  }
  
  else if(ftemp >= 55 && ftemp < 75){
      $("body").attr("class", "average");
  }
  
  else if(ftemp >= 75){
      $("body").attr("class", "hot");
  }
  

  
  else{
      $("body").attr("class", "");
  }
 
 
  }
}); 