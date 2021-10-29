"use strict";


$(document).ready(() => {

    $("#galleryImages a").each((index, images) => {

        const slides = new Image();
        slides.src = images.href;
    });

    $("#galleryImages a").click(evt => {

        evt.preventDefault();

        const clickImg = evt.currentTarget;

        $("#full_image").attr("src", clickImg.href);

        $("#caption").text(clickImg.title);
    });

    $("#SlideRight").click(evt => {



        if ($("#caption").text() == "Chilling on the beach") {

            $("#full_image").attr("src", "images/boardwalk.jpg");

            $("#caption").text("Walking down the boardwalk");

        }

        else if ($("#caption").text() == "Walking down the boardwalk") {

            $("#full_image").attr("src", "images/bugatti.jpg");

            $("#caption").text("Bugatti veyron at Petersen Automotive Museum");

        }
        else if ($("#caption").text() == "Bugatti veyron at Petersen Automotive Museum") {

            $("#full_image").attr("src", "images/peace.jpg");

            $("#caption").text("Leaving the beach");

        }
        else if ($("#caption").text() == "Leaving the beach") {

            $("#full_image").attr("src", "images/reflection.jpg");

            $("#caption").text("Shopping");

        }
        else if ($("#caption").text() == "Shopping") {

            $("#full_image").attr("src", "images/theBoys.jpg");

            $("#caption").text("Group picture infront of the Hollywood sign");

        }
        else if ($("#caption").text() == "Group picture infront of the Hollywood sign") {

            $("#full_image").attr("src", "images/beach.jpg");

            $("#caption").text("Chilling on the beach");

        }

    });

    $("#slideLeft").click(evt => {


        if ($("#caption").text() == "Chilling on the beach") {

            $("#full_image").attr("src", "images/theBoys.jpg");

            $("#caption").text("Group picture infront of the Hollywood sign");

        }
        else if ($("#caption").text() == "Group picture infront of the Hollywood sign") {

            $("#full_image").attr("src", "images/reflection.jpg");

            $("#caption").text("Shopping");


        }
        else if ($("#caption").text() == "Shopping") {

            $("#full_image").attr("src", "images/peace.jpg");

            $("#caption").text("Leaving the beach");


        }
        else if ($("#caption").text() == "Leaving the beach") {

            $("#full_image").attr("src", "images/bugatti.jpg");

            $("#caption").text("Bugatti veyron at Petersen Automotive Museum");


        }
        else if ($("#caption").text() == "Bugatti veyron at Petersen Automotive Museum") {

            $("#full_image").attr("src", "images/boardwalk.jpg");

            $("#caption").text("Walking down the boardwalk");


        }
        else if ($("#caption").text() == "Walking down the boardwalk") {

            $("#full_image").attr("src", "images/beach.jpg");

            $("#caption").text("Chilling on the beach");

        }

    });


});
