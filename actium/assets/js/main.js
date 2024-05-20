(function($) {
    'use strict';

    /*====================================
	// 	Inpage Smooth Scroll
	======================================*/
    $(document).on('click', '.ips', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });

}(jQuery))