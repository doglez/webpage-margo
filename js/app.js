$( document ).ready(function(){
  $(".button-collapse").sideNav();
	$('.carousel.carousel-slider').carousel({
		fullWidth:true,
	}).css("height", $(window).height());

   $('.scrollspy').scrollSpy();
})

setInterval(function(){
  $('.carousel.carousel-slider').carousel('next');
	$('.carousel').carousel('next');
}, 4000);
