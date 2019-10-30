$(document).ready(function() {
  var html = '';

  // Get logos
  $.getJSON("https://s3-us-west-2.amazonaws.com/jessguilford.com/yesler/logos.json", function(data) {

    // Shuffle the array of logos
    for (var i=data.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      // Swap data at the current index with data at a random index
      var temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    // Select 6 logos
    var logos = data.slice(0,6);

    // for each logo, format the image
    logos.forEach(function(logo) {
      html +=
        '<div class="col-4 col-md-2 no-padding-mobile">' +
        '<img src="images/logos/'+logo.file+'" class="img-responsive" alt="'+logo.alt+'">' +
        '</div>';
    });

    // render the logo html
    $('#logos').append(html);
  });
});

// Add smooth scroll to any href that links to another section on the page
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'easeOutSine');
});

// Get position of the bottom of the hero
var heroPos = $('#hero').offset().top;
var heroBottom = heroPos + $('#hero').height();

$(window).scroll(function() {
  // When the user has scrolled fully past the hero, show the slidedown banner
  if ( $(this).scrollTop() > heroBottom ) {
    $('.slidedown').slideDown(300);
  } else {
    $('.slidedown').slideUp();
  }
});
