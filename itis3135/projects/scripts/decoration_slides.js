$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/decorating_slides.json",
        beforeSend: function () {
            $("#decor").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            var imgOne = new Image(); // creates an image
            var imgTwo = new Image(); // creates an image 
            var imgThree = new Image(); // creates an image
            var imgFour = new Image(); // creates an image 
            $.each(data, function () {
                $.each(this, function (key, value) {

                    imgOne.src = value.vase; //gets value from json and assigns it to src
                    imgOne.setAttribute("class", "productImg"); //sets attr of class to productImg
                    imgOne.setAttribute("alt", "Blue and white porcelain vase with flower motif");//sets attr of alt to product name
                    $("#productImgOne").append(imgOne); // append to a tag in html
                    // etc

                    imgTwo.src = value.pumpkin;
                    imgTwo.setAttribute("class", "productImg");
                    imgTwo.setAttribute("alt", "Halloween Artificial Pumpkins");
                    $("#productImgTwo").append(imgTwo);

                    imgThree.src = value.teapot;
                    imgThree.setAttribute("class", "productImg");
                    imgThree.setAttribute("alt", "Royal Check 3-Quart Tea Kettle");
                    $("#productImgThree").append(imgThree);

                    imgFour.src = value.holder;
                    imgFour.setAttribute("class", "productImg");
                    imgFour.setAttribute("alt", "Royal Check Paper Towel Holder");
                    $("#productImgFour").append(imgFour);
                   
                });


            });
        }
    });
});