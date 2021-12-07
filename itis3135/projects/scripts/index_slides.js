$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/index_slides.json",
        beforeSend: function () {
            $("#wearing").html("Loading...");
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

                    imgOne.src = value.guest; //gets value from json and assigns it to src
                    imgOne.setAttribute("class", "productImg"); //sets attr of class to productImg
                    $("#productImgOne").append(imgOne); // append to a tag in html
                    // etc

                    imgTwo.src = value.teapot;
                    imgTwo.setAttribute("class", "productImg");
                    $("#productImgTwo").append(imgTwo);

                    imgThree.src = value.squash;
                    imgThree.setAttribute("class", "productImg");
                    $("#productImgThree").append(imgThree);

                    imgFour.src = value.top;
                    imgFour.setAttribute("class", "productImg");
                    $("#productImgFour").append(imgFour);
                   
                });


            });
        }
    });
});