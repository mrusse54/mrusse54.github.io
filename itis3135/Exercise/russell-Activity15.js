$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "facultyList.json",
        beforeSend: function () {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#faculty").html("");
           
            $.each(data, function () {
                $.each(this, function (key, value) {
                    var imageFac = new Image(); // creates an image you need to create a new img each time.
                    imageFac.src = value.image; // sets the src
                    $("#faculty").append(imageFac); // append the img
                    $("#faculty").append(
                            "<h2>" + value.full_name + "</h2>" +
                            "<h3>" + value.department + "</h3>" +
                            "<p>" + value.bio + "</p>"); //appends the remaining stuff


                });


            });
        }
    });
});