$(document).ready(function() {
	
	/* nav dropdown menu */
	if ($(window).width() > 768) {
		$('#navbar .nav').removeClass('animated bounceInDown');
		$('ul.nav li.dropdown').hover(function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeIn();
			//$(this).find('.dropdown-menu').stop(true, true).slideDown();
			$(this).find('.dropdown-menu').removeClass('animated flipOutY').addClass('animated rubberBand');
			$(this).addClass('open');
		}, function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeOut();
			//$(this).find('.dropdown-menu').stop(true, true).slideUp();
			//$(this).find('.dropdown-menu').removeClass('animated flipInY').addClass('animated flipOutY');
			$(this).removeClass('open');
		});
	} else {
		$('#navbar .nav').addClass('animated bounceInDown');
	}
	
	/* remove focus from bootstrap btn */
	$('.btn').focus(function(event) {
		event.target.blur();
	});

	/* remove empty p tag */
	$('p').each(function() {
		var $this = $(this);
		if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});

	/* remove error image */
	$("img").error(function () { 
    	$(this).hide(); 
	});
	
	/* window scroll */
	// $fn.scrollSpeed(step, speed, easing);
	jQuery.scrollSpeed(100, 600);
	
	/* chart */
	$('.chart-mom').easyPieChart({
		barColor: '#f48221', // The color of the curcular bar. You can either pass a valid css color string, or a function that takes the current percentage as a value and returns a valid css color string.
		trackColor: '#e1e2e4', // The color of the track, or false to disable rendering.
		scaleColor:	'#fff', // The color of the scale lines, false to disable rendering.
		scaleLength: 0, // Length of the scale lines (reduces the radius of the chart).
		lineCap: 'square', // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
		lineWidth: 25, // Width of the chart line in px.
		size: 200, // Size of the pie chart in px. It will always be a square.
		rotate: 0, // Rotation of the complete chart in degrees.
        animate: 2000, // Object with time in milliseconds and boolean for an animation of the bar growing ({ duration: 1000, enabled: true }), or false to deactivate animations.
        onStart: function() {}, // Callback function that is called at the start of any animation (only if animate is not false).
        onStop:	 function() {}, // Function that is called at the end of any animation (only if animate is not false).
		onStep: function() {}, // Callback function that is called during animations providing the current value (the context is the plugin, so you can access the DOM element via this.$el). 
    });
    
    $('.chart-dad').easyPieChart({
		barColor: '#179cd7', // The color of the curcular bar. You can either pass a valid css color string, or a function that takes the current percentage as a value and returns a valid css color string.
		trackColor: '#e1e2e4', // The color of the track, or false to disable rendering.
		scaleColor:	'#fff', // The color of the scale lines, false to disable rendering.
		scaleLength: 0, // Length of the scale lines (reduces the radius of the chart).
		lineCap: 'square', // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
		lineWidth: 25, // Width of the chart line in px.
		size: 200, // Size of the pie chart in px. It will always be a square.
		rotate: 0, // Rotation of the complete chart in degrees.
        animate: 2000, // Object with time in milliseconds and boolean for an animation of the bar growing ({ duration: 1000, enabled: true }), or false to deactivate animations.
        onStart: function() {}, // Callback function that is called at the start of any animation (only if animate is not false).
        onStop:	 function() {}, // Function that is called at the end of any animation (only if animate is not false).
		onStep: function() {}, // Callback function that is called during animations providing the current value (the context is the plugin, so you can access the DOM element via this.$el). 
    });
	
	/* animate progress bar */
	
	$("#purchase").animate({
	    width: "20%"
	}, 1500);
	
	$("#subscribe").animate({
	    width: "6%"
	}, 1500);
	
	$("#bay").animate({
	    width: "8%"
	}, 1500);
	
	$("#listen").animate({
	    width: "66%"
	}, 1500);
	
	$("#use").animate({
	    width: "53%"
	}, 1500);
	
	$("#streaming").animate({
	    width: "48%"
	}, 1500);
	
});