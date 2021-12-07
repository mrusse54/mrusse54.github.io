$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/quater.json",
        beforeSend: function () {
            $("#wearing").html("Loading...");
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
                        "<p>" + value.product + "</p>" + //appends p tags like in activty 15
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.color + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Pink Lily";
                    $("#productInfoOne").append(aTag);
                });


            });
        }
    });
});

$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/skirt.json",
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
                        "<p>" + value.product + "</p>" + //appends p tags like in activty 15
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.color + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Nordstrom";
                    $("#productInfoTwo").append(aTag);
                });


            });
        }
    });
});


$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/booties.json",
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
                        "<p>" + value.product + "</p>" + //appends p tags like in activty 15
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.color + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Macys";
                    $("#productInfoThree").append(aTag);
                });


            });
        }
    });
});


$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/bag.json",
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
                        "<p>" + value.product + "</p>" + //appends p tags like in activty 15
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.color + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Prada";
                    $("#productInfoFour").append(aTag);
                });


            });
        }
    });
});
