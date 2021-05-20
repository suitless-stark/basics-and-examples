// All custom js

// pseudocode steps
// 1. set a click event on the hamburger icon
// 2. once clicked demonstrate jQuery chaining
// 3. Finally demonstrate jQuery callback functions

$('document').ready(function(){

  // select the mobile menu icon, add a click event, trigger an alert

  $('.burger-menu').click(function(){
    $('.daily-section').hide(3000, function(){
      $('.map-section').hide(3000, function(){
        $('.fav-container').hide(3000, function(){
          $('.footer-section').hide(3000);
        });
      });
    });
  });
});
