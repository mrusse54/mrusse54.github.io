"use strict";

const $ = selector => document.queryselector(selector);

    function polygonFunction() {

    
     var polygonName = ""; // setting up polygonName

       
    var userPolygon = validateEntry(prompt("Manic Rat team would like you to enter the number of sides of your polygon, 1-10.")); // prompt user and get value make sure it is a number and positive

    Math.floor(userPolygon); // round the number down

    while(userPolygon < 1 || userPolygon > 10){ // if number is less than 0 or greater than 10

        userPolygon = validateEntry(prompt("Manic Rat team would like to remind you that the number needs to be, 1-10")); // prompt user if the did bad input

        Math.floor(userPolygon);// round the number down

    }

    switch (userPolygon) { // Switch case simpler than a long if else

        // etc goes through all the cases matching with sides
        case 1:  polygonName = "henagon";
                 break; // dont forget break
        case 2:  polygonName = "digon";
                 break;
        case 3:  polygonName = "trigon";
                 break;
        case 4:  polygonName = "tetragon";
                 break;
        case 5:  polygonName = "pentagon";
                 break;
        case 6:  polygonName = "hexagon";
                 break;
        case 7:  polygonName = "heptagon";
                 break;
        case 8:  polygonName = "octagon";
                 break;
        case 9:  polygonName = "enneagon";
                 break;
        case 10: polygonName = "decagon";
                 break;
    }

    
    alert('Manic Rat found that a polygon with ' + userPolygon + ' sides is called a ' + polygonName +"."); //alert the user with their input and polygon

    document.getElementById("polygonOutput").innerText = 'Manic Rat team found that a polygon with ' + userPolygon + ' sides is called a ' + polygonName +".";  

}

function validateEntry(a){ // takes one parameter

    a = Math.abs(parseInt(a)); // absolute value and converts to an int chain

    return(a); //return what you got
}


document.addEventListener('DOMContentLoaded',  () => { // load the DOM
    const timer = setTimeout( polygonFunction, 100); //set a timer so the prompt does not load before CSS causing ugly page
  });