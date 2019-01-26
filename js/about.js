$(document).ready(function(){
	// Show Menu toggle below 992 px
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active')
	});

	// Background video
	var b = ["colours-01", "colours-02", "colours-03", "colours-04", "colours-05", "colours-06"];
    var d = Math.floor(Math.random() * b.length);
    var a = "";
    a += '<video src="video/' + b[d] + '.mp4" poster="video/' + b[d] + '.jpg" autoplay muted loop>';
    $(".video-wrapper").append($(a));

})

var prev = 0;
var $window = $(window);
var nav = $('header');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('negative-top', scrollTop > prev);
  prev = scrollTop;
});