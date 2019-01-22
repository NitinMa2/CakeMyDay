$(document).ready(function(){
	// Show Menu toggle below 992 px
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active')
	});
})

var prev = 0;
var $window = $(window);
var nav = $('header');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('negative-top', scrollTop > prev);
  prev = scrollTop;
});