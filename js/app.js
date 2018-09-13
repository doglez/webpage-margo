$( document ).ready(function(){
	/*JQuery para activar el sideNav*/
	$(".button-collapse").sideNav();
	
	/*JQuery para activar el carrusel*/
	$('.carousel.carousel-slider').carousel({
		fullWidth:true,
		indicators:true
	}).css("height", $(window).height());
})    
setInterval(function(){
  $('.carousel.carousel-slider').carousel('next');
}, 3000);

//SCROLLSPY
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
