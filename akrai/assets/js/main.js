/*====================================
Template Name:  Orator
Author Name:    QDONOW Themes
Author URI:     http://qdonow.com
Description:    Multipurpose HTML Template
Version:        1.0
======================================*/
/*====================================
[Start Table Of Content]
======================================
    * Curve Section
    * Header Sticky
    * Mobile Nav
    * Onepage Nav & Smooth Scroll
    * Isotop And Masonry Active
    * Wow JS
    * Magnific Popup
    * Typed Js
    * Stats JS
    * progress-bar
    * Scroll Up
    * Parallax JS
    * Testimonial Carousel
    * Blog Carousel
    * Brand Carousel
    * Video Background
    * Preloader JS
    * Fallback Preloader
======================================
[End Table Of Content]
======================================*/
(function($) {
    "use strict";

    /*======================================
    // Curve Section
    ======================================*/
    if ($('#hero .curve-bottom').length != 0) {
        var bgCurve = $('#hero').next('section').css('background-color');
        $('#hero').find('.curve-bottom path').attr('fill', bgCurve);
    }
    /*======================================
    // Header Sticky
    ======================================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 60) {
            $('#header').addClass('fixed-top animated fadeInDown').css("position", "fixed");
        } else {
            $('#header').removeClass('fixed-top animated fadeInDown').css("position", "");
        }
    });

    /*====================================
    //  Mobile Nav
    ======================================*/
    $('.header-nav__main').slicknav({
        prependTo: '.header-nav__mobile',
        closeOnClick: true,
        label: ''
    });

    /*======================================
    //  Onepage Nav & Smooth Scroll
    ======================================*/
    if ($.fn.onePageNav) {
        $('.header-nav__main .nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1000,
            easing: 'easeInOutQuart'
        });
        $('.slicknav_nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1000
        });
    }

    /*====================================
    //  Wow
    ======================================*/
    var window_width = $(window).width();
    if (window_width > 767) {
        new WOW().init();
    }

    /*======================================
    // Magnific Popup
    ======================================*/
    $('.popup-video').magnificPopup({
        type: 'video'
    });

    /*======================================
    // Stats JS
    ======================================*/
    if ($('section').hasClass('stats')) {
        $('.counter').counterUp({
            time: 1000
        });
    }

    /*====================================
    //  Progress Bar
    ======================================*/
    $('.single-progress__bg').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 3s'
        });
        setTimeout(function() {
            $this.appear(function() {
                $this.css('width', width + '%');
            });
        }, 500);
    });

    /*======================================
    // Scroll Up
    ======================================*/
    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 300,
        scrollFrom: 'top',
        scrollSpeed: 1000,
        easingType: 'linear',
        animation: 'none',
        animationSpeed: 600,
        scrollTrigger: false,
        scrollTarget: false,
        scrollText: ["<i class='fa fa-angle-up'></i>"],
        scrollTitle: false,
        scrollImg: false,
        activeOverlay: false,
        zIndex: 2147483647
    });

    /*======================================
    // Parallax JS
    ======================================*/
    if (typeof $.fn.stellar !== 'undefined') {
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
    }

    if (typeof $.fn.owlCarousel !== 'undefined') {

        /*====================================
        //  Testimonial Carousel
        ======================================*/
        $('.testimonial-active').owlCarousel({
            items: 1,
            loop: true,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 500
        });
        var scrollSpeed = 80;
        var current = 0;
        var direction = "h"

        function bgscroll() {
            current -= 1;
            $("#testimonial").css("backgroundPosition", (direction == "h") ? current + "px 0" : "0 " + current + "px");
        }
        setInterval(bgscroll, scrollSpeed);

        /*====================================
        //  Brand Carousel
        ======================================*/
        $('.brand-slider').owlCarousel({
            loop: true,
            mouseDrag: false,
            touchDrag: true,
            autoplay: true,
            smartSpeed: 500,
            nav: false,
            dots: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 2
                },
                575: {
                    items: 3
                },
                991: {
                    items: 6
                }
            },
        });
    }

    $(window).load(function() {        
        /*====================================
        //  Isotop And Masonry Active
        ======================================*/
        if (typeof $.fn.isotope !== 'undefined') {
            $('.isotop-active').masonry({
                itemSelector: '.masonry-item'
            });

            if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*'
                });

                $('.project-nav .nav-item').on('click', function() {
                    $('.project-nav .nav-item').removeClass("active");
                    $(this).addClass("active");
                    var selector = $(this).find('.nav-link').attr('data-filter');
                    $('.isotop-active').isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 700,
                            easing: 'easeOutCirc',
                            queue: false
                        }
                    });
                    return false;
                });
            }
        }

        /*======================================
        // Preloader JS
        ======================================*/
        $('.loader').fadeOut('slow', function() {
            $(this).remove();
        });
    }); 

    /*====================================
    //  Fallback
    ======================================*/
    // PreLoader
    if (!$("html").hasClass("cssanimations")) {
        $(".loader-inner").html("<img src='assets/images/loader.gif' alt='loader' class='loader-img'>");
    }

})(jQuery);
