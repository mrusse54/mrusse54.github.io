$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/list.json",
        beforeSend: function () {
            $("#index").html("Loading...");
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
                        "<p>" + value.version + "</p>" + //appends p tags like in activty 15
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.author + "</p>" +
                        "<p>" + value.genre + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link; // gets link from json file
                    aTag.innerText = "Where to buy: Amazon"; // a tag text
                    $("#productInfoOne").append(aTag); // appends a tag to div
                });


            });
        }
    });
});

$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/kettle.json",
        beforeSend: function () {
            $("#index").html("Loading...");
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
                        "<p>" + value.product + "</p>" + //appends p tags like in activty 15
                        "<p>" + value.type + "</p>" +
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Bloomingdales";
                    $("#productInfoTwo").append(aTag);
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
            $("#index").html("Loading...");
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
                            aTag.href = value.recipe; // gets link from json file
                            aTag.innerText = "Recipe: Link";// a tag text
                            $("#productInfoThree").append(aTag);// appends a tag to div
                });


            });
        }
    });
});


$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/quater.json",
        beforeSend: function () {
            $("#index").html("Loading...");
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
                        "<p>" + value.product + "</p>" + //appends p tags like in activty 15
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.color + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Pink Lily";
                    $("#productInfoFour").append(aTag);
                });


            });
        }
    });
});