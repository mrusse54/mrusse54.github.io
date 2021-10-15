"use strict";

function welcome(){

    // get todays date YYYY-MM-DD
    const todayDate = new Date();

    const formattedDate = todayDate.getUTCMonth() + "/" + todayDate.getUTCDay() + "/" + todayDate.getFullYear();

    // get todays time H:M:S
    const currentTime = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds(); 

    // display prompt and takes input
    const customerName = prompt("Enter your name please.");

    // display prompt and takes input
    const customerDoing = prompt("Enter how you are doing please.");

    // puts all the info together
    const greeting = `Today is ${formattedDate}, and the time is: ${currentTime}
                         The MR Designs team welcomes you, ${customerName}!
                        We're glad you are doing ${customerDoing}!`

    // displays the greeting variable value on the html page
    document.getElementById("welcomeUser").innerText = greeting;

}

function alertButton(){
 alert("Nice my script is running!");
}

function addition(){
    
    const num1 = parseFloat(prompt("Enter your first number please."));

    const num2 = parseFloat(prompt("Enter your second number please."));

    const num3 = num2 + num1;

    const displayNumber = `Your number is ${num3}`;

    document.getElementById("displayAdd").innerText = displayNumber;


}

function subraction(){

    const num1 = parseFloat(prompt("Enter your first number please."));

    const num2 = parseFloat(prompt("Enter your second number please."));

    const num3 = num1 - num2;

    const displayNumber = `Your number is ${num3}`;

    document.getElementById("displaySubtraction").innerText = displayNumber;

}


function calculateTax(){

    const tax = parseFloat(prompt("Enter your tax rate ie 7% = .07"));

    const total = parseFloat(prompt("Enter your total cost"));

    const taxOnTotal = tax * total;

    const totalAndTax = total + ( tax * total);

    const displayTax = `Your tax on the total cost is $${taxOnTotal}.
                        Your total cost with tax is $${totalAndTax}`;

    document.getElementById("displayTax").innerText = displayTax;   

}

function coinFlip(){

    const odds = Math.floor(Math.random() * 2);

    let coinFace = "";

    if(odds == 0){
        coinFace = "heads"
    }
    else{
        coinFace = "tails"  
    }

    const displayCoinFace = `The coin landed on ${coinFace}.`

    document.getElementById("coinFlip").innerText = displayCoinFace;   
}

function rollDice(){
    
    const odds = Math.floor(Math.random() * 6) + 1;

    let diceFace = "";

    switch(odds){
        case(1):
        diceFace = "1";
        break;
        case(2):
        diceFace = "2";
        break;
        case(3):
        diceFace = "3";
        break;
        case(4):
        diceFace = "4";
        break;
        case(5):
        diceFace = "5";
        break;
        case(6):
        diceFace = "6";
        break;
    }

    const displayDiceFace = `The dice landed on ${diceFace}.`

    document.getElementById("rollDice").innerText = displayDiceFace; 
}