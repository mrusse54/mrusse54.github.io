"use strict";

jQuery(document).ready(() => {

        jQuery("#slides img").each((index, images) => {
    
            const preload = new Image();
            preload.src = images.src;
        });
    

    let slide = jQuery("#slides img:first-child");

    const slideshow = () => {
     
        jQuery("#caption").fadeOut(1000);
        jQuery("#slide").fadeOut(1000, () =>{
            if (slide.next().length == 0){
             slide = jQuery("#slides img:first-child");
            }else{
                slide = slide.next();
            }
            const nextSlide = slide.attr("src");
            const nextCaption = slide.attr("alt");
            jQuery("#slide").attr("src", nextSlide).fadeIn(1000);
            jQuery("#caption").text(nextCaption).fadeIn(1000);
        }
            );
    };

    jQuery("#slide").click( () => {
        if(timer != null){
            clearInterval(timer);
            timer = null
        }else{
            slideshow();
            timer = setInterval(slideshow, 4000);
        }


    });

    jQuery("#slideLeft").click( () => {
        jQuery("#caption").fadeOut(1000);
        jQuery("#slide").fadeOut(1000, () => {
            if (slide.prev().length == 0){
             slide = jQuery("#slides img:last-child");
            }else{
                slide = slide.prev();
            }
            const nextSlide = slide.attr("src");
            const nextCaption = slide.attr("alt");
            jQuery("#slide").attr("src", nextSlide).fadeIn(1000);
            jQuery("#caption").text(nextCaption).fadeIn(1000);
        }
            );
    });

    jQuery("#slideRight").click( () => {
        jQuery("#caption").fadeOut(1000);
        jQuery("#slide").fadeOut(1000, () =>{
            if (slide.next().length == 0){
             slide = jQuery("#slides img:first-child");
            }else{
                slide = slide.next();
            }
            const nextSlide = slide.attr("src");
            const nextCaption = slide.attr("alt");
            jQuery("#slide").attr("src", nextSlide).fadeIn(1000);
            jQuery("#caption").text(nextCaption).fadeIn(1000);
        }
            );   
    });

});