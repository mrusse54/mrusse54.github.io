"use strict";

let counter = 0;

$(document).ready(() => {

    $("#image_list a").each((index, link) => {

        const image = new Image();
        image.src = link.href;
    });

    $("#image_list a").click(evt => {

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
