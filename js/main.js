
jQuery(document).ready(function () {
    //wow js
    new WOW().init();
	//hamburger
    $('.hamburger').click(()=>
    $('.hamburger').toggleClass('is-active') )

    //owl carousel
    $('.project-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        
        responsive:{
            0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1200: {
				items: 4
			}
        }
    })

 //brand carousel  
 $('.partner-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin:0,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});

    
});

//sticky nav
window.addEventListener('scroll',function(){
    var header=this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >200);
})




