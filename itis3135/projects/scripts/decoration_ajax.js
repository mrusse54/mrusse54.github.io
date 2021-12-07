$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/vase.json",
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
                        "<p>" + value.product + "</p>" + //appends p tags like in activty 15
                        "<p>" + value.type + "</p>" +
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Amazon";
                    $("#productInfoOne").append(aTag);
                });


            });
        }
    });
});

$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/table.json",
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
                        "<p>" + value.type + "</p>" +
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Amazon";
                    $("#productInfoTwo").append(aTag);
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
                        "<p>" + value.type + "</p>" +
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Bloomingdales";
                    $("#productInfoThree").append(aTag);
                });


            });
        }
    });
});


$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "jason_files/holder.json",
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
                        "<p>" + value.type + "</p>" +
                        "<p>" + value.name + "</p>" +
                        "<p>" + value.brand + "</p>" +
                        "<p>" + value.cost + "</p>");
                    const aTag = document.createElement("a"); // could not figure out how to get code to work like activity 16 so simple solution
                    aTag.href = value.link;
                    aTag.innerText = "Where to buy: Bloomingdales";
                    $("#productInfoFour").append(aTag);
                });


            });
        }
    });
});
