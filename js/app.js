// Materialize Animated
$( document ).ready(function(){
  $(".button-collapse").sideNav();
	$('.carousel.carousel-slider').carousel({
		fullWidth:true,
	}).css("height", $(window).height());

  var options = [ {selector: '#section_achievements_text1', offset: 250, callback: function(el) { Materialize.fadeInImage($(el)); } }, {selector: '#section_achievements_text2', offset: 300, callback: function(el) { Materialize.fadeInImage($(el)); } }, {selector: '#section_achievements_text3', offset: 350, callback: function(el) { Materialize.fadeInImage($(el)); } } ]; Materialize.scrollFire(options);
})

setInterval(function(){
  $('.carousel.carousel-slider').carousel('next');
	$('.carousel').carousel('next');
}, 4000);

// JavaScript Animated
var animate = document.querySelectorAll('.animateOpacity');
function showScroll() {
  var scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animate.length; i++) {
    var alturaAnimate = animate[i].offsetTop;
    if (alturaAnimate -400 < scrollTop) {
      animate[i].style.opacity = 1;
      animate[i].classList.add('showAbove')
    }
  }
}

window.addEventListener('scroll', showScroll);
