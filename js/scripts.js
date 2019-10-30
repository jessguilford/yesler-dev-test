// Add smooth scroll to any href that links to another section on the page
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// Get position of the bottom of the hero
var heroPos = $('#hero').offset().top;
var heroBottom = heroPos + $('#hero').height();

$(window).scroll(function() {
  // When the user has scrolled fully past the hero, show the slidedown banner
  if ( $(this).scrollTop() > heroBottom ) {
    $('.slidedown').slideDown(200);
  } else {
    $('.slidedown').slideUp();
  }
});
