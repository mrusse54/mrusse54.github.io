$(document).ready(function() { // accordion pluggin for each of the products
    $("#accordionOne").accordion({
    event: "click", // if clicked then it will cary out an action
    heightStyle: "content", // fits the content
    collapsible: true // can be closed
    }); // repeat for the remaining three
});

$(document).ready(function() {
    $("#accordionTwo").accordion({
    event: "click",
    heightStyle: "content",
    collapsible: true
    });
});

$(document).ready(function() {
    $("#accordionThree").accordion({
    event: "click",
    heightStyle: "content",
    collapsible: true
    });
});


$(document).ready(function() {
    $("#accordionFour").accordion({
    event: "click",
    heightStyle: "content",
    collapsible: true
    });
});

