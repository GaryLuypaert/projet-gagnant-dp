// Add smooth scrolling on all links inside the navbar
$(".navbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  }
});// End if

// Add smooth scrolling on all links inside the mission
$(".pillars-container a").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){

      window.location.hash = hash;
    });

  }
});// End if



$(document).ready(function () {
	$(function () {
		var heightEligibility = $('#eligibility').height();
		var heightEvaluation = $('#evaluation').height();
		var maxHeight;
		if(heightEligibility >= heightEvaluation){
			maxHeight = heightEligibility
		} else {
			maxHeight = heightEvaluation;
		}
		$('#eligibility').height(maxHeight);
		$('#evaluation').height(maxHeight);
	});

	$(".carousel").swipe({

	  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

	    if (direction == 'left') $(this).carousel('next');
	    if (direction == 'right') $(this).carousel('prev');

	  },
	  allowPageScroll:"vertical"

	});
});
