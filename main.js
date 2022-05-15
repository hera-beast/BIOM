$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });
});


// where, when you need it section

 let scrollContainer = document.getElementById('images');

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 0.02;
}); 

// instagram section

let scrollContainerInstagram = document.getElementById('clean-with-biom'); 

scrollContainerInstagram.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerInstagram.scrollLeft += evt.deltaY * 0.02;
	
});

// mobile menu show/hide

$(function() {
'use strict'; $('.hamburger-icon').on('click', function() {
$('.mobile-menu').toggle();
});
});

$(window).resize(function() {
   'use strict'; if ($(window).width() >= 797) {
      $(".mobile-menu").hide();
    }
  });
