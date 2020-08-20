$( document ).ready(function(){
  $(".button-collapse").sideNav();

  /*JQuery para activar el carrusel*/
	$('.carousel.carousel-slider').carousel({
		fullWidth:true,
	}).css("height", $(window).height());
})

setInterval(function(){
  $('.carousel.carousel-slider').carousel('next');
	$('.carousel').carousel('next');
}, 4000);
