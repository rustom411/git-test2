; (function ($){


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
});


$(".video-play-btn").magnificPopup({
    type:"video",
  }); 


// $('.homepage-slide').owlCarousel({
//     loop:true,
//     nav:false,
//     dots:true,
//     items:1,
//     autoplay:true,
//     autoplayTimeout: 6000,
//   // animateOut:'fadeInRight',
//   // animateIn:'fadeOutLeft',
	
// });

// $('.testimonial-slide').owlCarousel({
//   loop:true,
//   nav:false,
//   dots:false,
//   items:3,
//   margin:50,
//   autoplay:true,
//   autoplayTimeout: 3000,
//   responsive:{
//     0:{
//         items:1
//    },
//     600:{
//          items:2
//     },
//     1000:{
//       items:3
//     }
//  }
// })

// heroSlider.on("changed.homepage-slide",function(event){
// 	var item = event.item.inbox;
	
// 	$('h2').removeClass('animatedfadeInUp');
// 	$('.owl-item').not('.cloned').eq(item).find('h2').addClass('animatedfadeInUp');

// });

// jQuery(document).ready(function($) {
//   $('.counter').counterUp({
//       delay: 10,
//       time: 1000,
//   });
// });


// $(document).ready(function(){
//   new WOW().init();
// });



})(jQuery);
