jQuery(document).ready(function(){
    jQuery(window).resize(function () {
        if (jQuery(window).width() > 767){
             jQuery('.slider-for').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                fade: true,
                asNavFor: '.slider-nav'
            });
            jQuery('.slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                asNavFor: '.slider-for',
                dots: true,
                centerMode: true,
                focusOnSelect: true,
                autoplay: true,
            });
        }
        
    });

    if (jQuery(window).width() > 767){
         jQuery('.slider-for').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        jQuery('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            autoplay: true,
        });
    }

});