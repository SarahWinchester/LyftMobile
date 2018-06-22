// var getCode = window.location.search.substring(1);
// var splitCode = getCode.split(“&”);
// var pair = splitCode[0].split(“=”);
// var codeValue = pair[1];

var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);
//this function hide the splash and reapper again the image in a soft fade in 
$(function(){
  $("#copy").hide();
  $("#splash").hide();
  $("#splash").fadeIn(2000)
  
  });
//this function take the time the image is showing and fade it out , then makes appear the intro
 $(function(){
     setTimeout(function() {
       $("#splash").fadeOut(2000, function() {
       $("#copy").show();
    });
   }, 3000);
  });




//function to take the value pre established in flags 
function getCountryCode(){
 var phoneCode = $("#flagSelection").val();
 var $inputphone = $("#phoneInput");
  $inputphone.val(phoneCode);
  console.log($inputphone.val());
 };

$('#phoneInput').keypress(function(){
   var $textInput = $(this);
   console.log($textInput.val())
     if ($textInput.val().length === 10 ) {
    $('.btnSignUp').removeAttr("disabled");
   }else{
    $('.inputDisabled').attr("disabled");
  };
});

$('.btnSignUp').click(function(){
  var code1 = Math.floor(Math.random() * 10); 
  var code2 = Math.floor(Math.random() * 10); 
  var code3 = Math.floor(Math.random() * 10); 
  var completeCode = "LAB - " + code1 + code2 + code3;
  console.log(completeCode);
  swal("Este es tu codigo, no olvides escribirlo! "  + completeCode , {
  }).then(function(){
    window.location.href='Verify.html?code='+ code1 + code2 + code3;
  })
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var code= getParameterByName('code'); 


$('#lab-code').keyup(function(){
  var inputTextFinal = $('#lab-code');
  console.log(code,inputTextFinal.val());
  
   if(inputTextFinal.val() === code){
    swal("Good job!", "You did it!", "success");
  }else if(inputTextFinal.val().length === 3){
    swal("No!", "Try Again!", "error");
  }

});.then(function(){
  window.location.href='Verify.html?code='

//materialize function for  flags
$(document).ready(function(){
  $('select').formSelect();
});
      

//materialize function for modals
  $(document).ready(function(){
    $('.modal').modal();
  });
