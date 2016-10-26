/*!
 * Flickity PACKAGED v2.0.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2016 Metafizzy
 */




$(function() {

//    $('.carousel').flickity({
//   // options
//  		 autoPlay:2000,pauseAutoPlayOnHover: false,
 
         
// 	});
// });


$("#carousel > .carousel-one:gt(0)").hide();

setInterval(function() {
  $('#carousel > .carousel-one:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#carousel');
}, 3000);

});



