$(document).ready(function() {

    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('show')){
			$('.navbar-collapse').removeClass('show');
		}
		
    });
    
    $('.scren-owl').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:9000,
        margin:50,
        responsiveClass:true,
       
       responsive:{
            0:{
                items:1,
                nav:false,
                dots:false
            },
            700:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:true,
            },
            1400:{
                items:3,
                nav:true,
                loop:true,
            }
        }
      
      })


});