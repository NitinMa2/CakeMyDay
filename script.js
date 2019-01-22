$(document).ready(function(){
	// Show Menu toggle below 992 px
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active')
	});

	$(window).scroll(function(){ 
	//Show Nav after 550px                         
        if ($(this).scrollTop() > 550) {
        	$('header').addClass("zero-top");
            $('header').removeClass("negative-top");
        } else {
            $('header').addClass("negative-top");
            $('header').removeClass("zero-top");
        }

    //Display content after scroll
        if ($(this).scrollTop() > 400) {
        	$('#info').css("opacity","1");
        } else {
        	$('#info').css("opacity","0");
        }

    //Display content after scroll
        if ($(this).scrollTop() > $(window).height()) {
        	$('#info').removeClass("sticky");
        } else {
        	$('#info').addClass("sticky");
        }

        if ($(this).scrollTop() > $(window).height()+500) {
        	$('footer').css("opacity","1");
        } else {
        	$('footer').css("opacity","0");
        }

        if ($(this).scrollTop() > 1) {
        	$('.down-button').addClass("hidden");
        }
    });

})