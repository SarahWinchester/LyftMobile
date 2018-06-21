$(function(){
  setTimeout(function() {
     $('.splash').fadeOut(500);
  },1000);
});


  $(document).ready(function(){
    $('.modal').modal();
    $("#add-contact").click(getContactData);
  });
   
  
