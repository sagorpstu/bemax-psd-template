$(document).ready(function(){
  

jQuery('#mobile-menu').meanmenu({

    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu',
    meanShowChildren: false,
    meanRevealColour: "#4272d7",
   
});


$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    smartSpeed:1000,
    autoplayHoverPause:true,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.project-slider').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    smartSpeed:500,
    autoplayHoverPause:true,
    items:1,
    dots:false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },

         992:{
            items:4
        },

        1200:{
            items:4
        }
    }
});



$('.blog-active').owlCarousel({
    loop:true,
    smartSpeed:500,
    nav:true,
    autoplayHoverPause:true,
    items:1,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



$('.test-active').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:500,
    autoplayHoverPause:true,
    items:1,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.brand-active').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:500,
    autoplayHoverPause:true,
    items:1,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },

         992:{
            items:5
        },

        1000:{
            items:6
        }
    }
});




$('.xx').magnificPopup({
  type: 'iframe'
  // other options
});


});