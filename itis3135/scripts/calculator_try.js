"use strict";

const $ = selector => document.querySelector(selector);

const calc = evt => {
    const buttonPressed = evt.currentTarget

    const num = buttonPressed.value;


    if (document.getElementById("calcdisp").innerText == "0") {
        document.getElementById("calcdisp").innerText = num
    }
    else if (num == "10") {

        let displayNum = document.getElementById("calcdisp").innerText + "+";

        let displayNumLength = displayNum.length;

        let count = 0;

        for (let i = 0; i < displayNumLength; i++) {

            if (displayNum[i] == "+") {
                count++;
                continue;
        }
            else if (displayNum[i] == "-") {
                count++;
                continue;
        }

        }

        if (count == 2) {
            alert("Only one operator is allowed for the simple calculator please press enter");
        } else {
            document.getElementById("calcdisp").innerText = displayNum;
        }

    }
    else if (num == "11") {

        let displayNum = document.getElementById("calcdisp").innerText + "-";

        let displayNumLength = displayNum.length;

        let count = 0;

        for (let i = 0; i < displayNumLength; i++) {

            if (displayNum[i] == "+") {
                count++;
                continue;
    }
            else if (displayNum[i] == "-") {
                count++;
                continue;
    }

    }

        if (count > 1) {
            alert("Only one operator is allowed for the simple calculator please press enter");
    } else {
            document.getElementById("calcdisp").innerText = displayNum;
    }
    }
    else if (num == "12") {

        let displayNum = document.getElementById("calcdisp").innerText;

        let displayNumLength = displayNum.length;

        let num1 = "";
        let num2 = "";
        let op = "";
        let count = 0;
        let result = 0;

        for (let i = 0; i < displayNumLength; i++) {

            if (displayNum[i] == "+") {
                op = "+"
                count++;
                continue;
    }
            else if (displayNum[i] == "-") {
                op = "-"
                count++;
                continue;
    }


            if (count != 1) {
                num1 += displayNum[i];
    }
            else {
                num2 += displayNum[i];

    }
    }

        if (op == "+") {
            result = parseInt(num1) + parseInt(num2);

            result.toString();
        } else {
            result = parseInt(num1) - parseInt(num2);
            result.toString();
        }

        document.getElementById("calcdisp").innerText = result;

    } else if (num == "13") {
        document.getElementById("calcdisp").innerText = 0;

    }
    else {
        let displayNum = document.getElementById("calcdisp").innerText + num;

        document.getElementById("calcdisp").innerText = displayNum;
    }



}

document.addEventListener('DOMContentLoaded', () => {
    $("#buttoncalc0").addEventListener("click", calc)
    $("#buttoncalc1").addEventListener("click", calc)
    $("#buttoncalc2").addEventListener("click", calc)
    $("#buttoncalc3").addEventListener("click", calc)
    $("#buttoncalc4").addEventListener("click", calc)
    $("#buttoncalc5").addEventListener("click", calc)
    $("#buttoncalc6").addEventListener("click", calc)
    $("#buttoncalc7").addEventListener("click", calc)
    $("#buttoncalc8").addEventListener("click", calc)
    $("#buttoncalc9").addEventListener("click", calc)
    $("#buttoncalcplus").addEventListener("click", calc)
    $("#buttoncalcbsub").addEventListener("click", calc)
    $("#buttoncalcresult").addEventListener("click", calc)
    $("#buttoncalclear").addEventListener("click", calc)
});



