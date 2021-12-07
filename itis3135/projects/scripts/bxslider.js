$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true, // 1 random slide
        moveSlides: 1, // 2 moves only one slide at a time
        captions: true, // caption
        pause: 3000, // 3 second pause for each slide
        pagerType: "short", // pager numbers
        pagerSelector: "#id_pager", // displays pager
        auto: true,
        minSlides: 1, //3 - 1 slide at a time
        maxSlides: 1, //3- 1 slide at a time
        slideWidth: 350, //4 - width 350
        
    });
});