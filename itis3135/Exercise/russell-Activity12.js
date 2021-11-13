$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true, // 1 random slide
        moveSlides: 1, // 2 moves only one slide at a time
        captions: true, //5 caption
        pause: 3000, //6 3 second pause for each slide
        pagerType: "short", // 7 pager numbers
        pagerSelector: "#id_pager", // 7 p is now displaying pager dont forget #
        auto: true,
        minSlides: 1, //3 - 1 slide at a time
        maxSlides: 1, //3- 1 slide at a time
        slideWidth: 500, //4 - width 500
        slideMargin: 20
        
    });
});