
/*

  Normalize Carousel Heights - Bootstrap Carousel items.
  https://coderwall.com/p/uf2pka/normalize-twitter-bootstrap-carousel-slide-heights

*/
$.fn.carouselHeights = function() {

    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    var normalizeHeights = function() {

        items.each(function() { //add heights to array
            heights.push($(this).height()); 
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $(this).parent().css('min-height',tallest + 'px');
        });
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        heights.length = 0;

        items.each(function() {
            $(this).parent().css('min-height','0'); //reset min-height
        }); 
        normalizeHeights(); //run it again 
    });

};