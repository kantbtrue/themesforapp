(function ($) {
    'use strict';
    $(function () {
        /*====================================
        //     Inpage Smooth Scroll
        ======================================*/
        $(document).on('click', '.ips', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 600);
        });
        /*====================================
            Themes Carousel
        ======================================*/
        if ($('.team-carousel').length !== 0) {
            $('.team-carousel').owlCarousel({
                items: 3,
                center: true,
                loop: true,
                mouseDrag: true,
                touchDrag: true,
                autoplay: true,
                smartSpeed: 500,
                nav: true,
                dots: true,
                autoWidth: true
            });
        }
    });
}(jQuery));