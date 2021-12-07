$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/pumpkin.json",
        beforeSend: function () {
            $("#cooking").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
       
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#productInfoOne").append(
                            "<p>" + value.category + "</p>" + //appends p tags like in activty 15
                            "<p>" + value.name + "</p>" +
                            "<p>" + value.preptime + "</p>" +
                            "<p>" + value.cost + "</p>" +
                            "<p>" + value.total + "</p>" );
                            const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                            aTag.href = value.recipe; 
                            aTag.innerText = "Recipe: Link";
                            $("#productInfoOne").append(aTag);
                });


            });
        }
    });
});

$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/drink.json",
        beforeSend: function () {
            $("#cooking").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
       
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#productInfoTwo").append(
                            "<p>" + value.category + "</p>" + //appends p tags like in activty 15
                            "<p>" + value.name + "</p>" +
                            "<p>" + value.preptime + "</p>" +
                            "<p>" + value.cost + "</p>" +
                            "<p>" + value.total + "</p>" );
                            const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                            aTag.href = value.recipe; 
                            aTag.innerText = "Recipe: Link";
                            $("#productInfoTwo").append(aTag);
                });


            });
        }
    });
});


$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/meatloaf.json",
        beforeSend: function () {
            $("#cooking").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
        
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#productInfoThree").append(
                            "<p>" + value.category + "</p>" + //appends p tags like in activty 15
                            "<p>" + value.name + "</p>" +
                            "<p>" + value.preptime + "</p>" +
                            "<p>" + value.cost + "</p>" +
                            "<p>" + value.total + "</p>" );
                            const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                            aTag.href = value.recipe; 
                            aTag.innerText = "Recipe: Link";
                            $("#productInfoThree").append(aTag);
                });


            });
        }
    });
});


$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/squash.json",
        beforeSend: function () {
            $("#cooking").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {

            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#productInfoFour").append(
                            "<p>" + value.category + "</p>" + //appends p tags like in activty 15
                            "<p>" + value.name + "</p>" +
                            "<p>" + value.preptime + "</p>" +
                            "<p>" + value.cost + "</p>" +
                            "<p>" + value.total + "</p>" );
                            const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                            aTag.href = value.recipe; 
                            aTag.innerText = "Recipe: Link";
                            $("#productInfoFour").append(aTag);
                });


            });
        }
    });
});
