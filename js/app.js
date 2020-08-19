// $(document).ready(function(){
//   $(".dropdown-trigger").dropdown();
//   $('.sidenav').sidenav();
//   $('.carousel').carousel();
//   $('.carousel.carousel-slider').carousel({
//    fullWidth: true,
//    indicators: true
//  });
// });
$( document ).ready(function(){
	/*JQuery para activar el sideNav*/
	$(".button-collapse").sideNav();

	/*JQuery para activar el carrusel*/
	$('.carousel.carousel-slider').carousel({
		fullWidth:true,
		indicators:true
	}).css("height", $(window).height());

	$('.carousel').carousel();
})
setInterval(function(){
  $('.carousel.carousel-slider').carousel('next');
	$('.carousel').carousel('next');
}, 5000);
