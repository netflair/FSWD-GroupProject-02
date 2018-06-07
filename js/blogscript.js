
$(document).ready(function() {
 
  $('#butOne').click(function() {
   
    $('#hideOne').collapse('toggle');
  });

  $('#butTwo').click(function() {
   
    $('#hideTwo').collapse('toggle');
  });

  $('#butThree').click(function() {
   
    $('#hideThree').collapse('toggle');
  });

  $('#butFour').click(function() {
   
    $('#hideFour').collapse('toggle');
  });

  $(function(){
   $("#butOne").click(function() {
      $(this).text(function(i, text){
          return text === "Close" ? "Read More" : "Close";
      });
   });
});

    $(function(){
   $("#butTwo").click(function() {
      $(this).text(function(i, text){
          return text === "Close" ? "Read More" : "Close";
      });
   });
});

      $(function(){
   $("#butThree").click(function() {
      $(this).text(function(i, text){
          return text === "Close" ? "Read More" : "Close";
      });
   });
});

        $(function(){
   $("#butFour").click(function() {
      $(this).text(function(i, text){
          return text === "Close" ? "Read More" : "Close";
      });
   });
});

  });




