$( document ).ready(function(){
	/*JQuery para activar el sideNav*/
	$(".button-collapse").sideNav();
	
	/*JQuery para activar el carrusel*/
	$('.carousel.carousel-slider').carousel({
		fullWidth:true,
		indicators:true
	}).css("height", $(window).height());

	/*JQuery para activar seleccion */
	$('select').material_select()

	/*JQuery para activar fanpage Facebook */
	$.ajaxSetup({ cache: true });
	  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
	    FB.init({
	      appId: '{your-app-id}',
	      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
	    });     
	    $('#loginbutton,#feedbutton').removeAttr('disabled');
	    FB.getLoginStatus(updateStatusCallback);
	  });
})    
setInterval(function(){
  $('.carousel.carousel-slider').carousel('next');
}, 4000);

//SCROLLSPY
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});
