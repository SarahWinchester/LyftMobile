//this function hide the splash and reapper again the image in a soft fade in 
$(function(){
  $('.splash').hide();
  $('.splash').fadeIn(2000)
  });
//this function take the time the image is showing and fade it out , then makes appear the intro
 $(function(){
     setTimeout(function() {
       $(".splash").fadeOut(2000, function() {
       $("#copy").show();
    });
   }, 3000);
  });

//function to take the value pre established in flags 
function getCountryCode(){
 var $phoneCode = $("#flagSelection").val();
 var $inputphone = $("#phoneInput").val();
  $inputphone = $phoneCode;
  console.log($inputphone);
 
 };






//materialize function for  flags
$(document).ready(function(){
  $('select').formSelect();
});
      

//materialize function for modals
  $(document).ready(function(){
    $('.modal').modal();
    
  });
  
