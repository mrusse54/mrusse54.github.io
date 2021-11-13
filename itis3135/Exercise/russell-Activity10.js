"use strict";

jQuery(document).ready(() => {

    jQuery("#image_list li a:first").focus(); // focus first a element 

        jQuery("#image_list a").each((index, images) => { // load the images

        const links = new Image();
        links.src = images.href;
    });


    jQuery("#image_list a").click(evt => { // click event for the imagelist

        evt.preventDefault(); // href is not loaded when clicked

        const clickImg = evt.currentTarget; //gets the element that was clicked => a

        jQuery("#image").fadeOut(3000); // fade out over 3 seconds
        jQuery("#caption").fadeOut(3000, ()=>{ // callback begins

        jQuery("#image").attr("src", clickImg.href); // assign new attributes
        jQuery("#caption").text(clickImg.title);

        jQuery("#image").fadeIn(3000); // fades back in over 3 seconds
        jQuery("#caption").fadeIn(3000, ()=> // call back
        jQuery("#caption").animate({fontSize: "2.0em"}, 3000) //increase font size
        );
});

jQuery("#image_list li a:first").focus(); // focus first a element 

    });


        
});