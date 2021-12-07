$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/cooking_slides.json",
        beforeSend: function () {
            $("#cooking").html("Loading...");
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

                    imgOne.src = value.pumpkin; //gets value from json and assigns it to src
                    imgOne.setAttribute("class", "productImg"); //sets attr of class to productImg
                    imgOne.setAttribute("alt", "Pumpkin pie");//sets attr of alt to foods name
                    $("#productImgOne").append(imgOne); // append to a tag in html
                    // etc

                    imgTwo.src = value.drink;
                    imgTwo.setAttribute("class", "productImg");
                    imgTwo.setAttribute("alt", "Pain Killer");
                    $("#productImgTwo").append(imgTwo);

                    imgThree.src = value.meatloaf;
                    imgThree.setAttribute("class", "productImg");
                    imgThree.setAttribute("alt", "Bacon wrapped Meatloaf");
                    $("#productImgThree").append(imgThree);

                    imgFour.src = value.squash;
                    imgFour.setAttribute("class", "productImg");
                    imgFour.setAttribute("alt", "Squash Casserole");
                    $("#productImgFour").append(imgFour);
                   
                });


            });
        }
    });
});