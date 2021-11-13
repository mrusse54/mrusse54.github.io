"use strict";

const $ = selector => document.querySelector(selector);

let employees = ["Tom","Nancy","Jim","ebenezer","Phil"]; // list of employees

let salaries = [ 10000,15000,20000,25000,30000]; // salaries of employees in order



function displayResults() {

    const clearDiv = document.getElementById("results");

    clearDiv.innerHTML="";

    let averageSalary = 0;
    let highestSalary = 0;

    for(let i = 0; i < salaries.length; i++){
        averageSalary += salaries[i];

        if(highestSalary < salaries[i]){
            highestSalary = salaries[i];
        }
        }

        averageSalary = averageSalary/salaries.length;

        averageSalary= averageSalary.toFixed(2) // rounds it to two decimal places

        const h2 = document.createElement("h2");
        const h2Text = document.createTextNode("");

        h2.appendChild(h2Text);

        const p1 = document.createElement("p");
        const p1Text = document.createTextNode("");

        p1.appendChild(p1Text);

        const p2 = document.createElement("p");
        const p2Text = document.createTextNode("");

        p2.appendChild(p2Text);

        h2.innerHTML = "The highest and average salaries"; // not needed the rubrik says innerHTML to be used but could put text in the createTextNode
        p1.innerHTML = "The highest salary is: $" + highestSalary;
        p2.innerHTML = "The average salary is: $" + averageSalary;

       document.getElementById("results").appendChild(h2);
       document.getElementById("results").appendChild(p1);
       document.getElementById("results").appendChild(p2);

       document.getElementById("employeeDropdown").focus();
        }


function displaySalary() {

    const clearTable = document.getElementById("results_table");

    clearTable.innerHTML="";

    const headerRow = document.createElement("tr");
    document.getElementById("results_table").appendChild(headerRow);


    const tableHeaderEmp = document.createElement("th");
    const tableHeaderEmpText = document.createTextNode( "Employee");
    const tableHeaderSal = document.createElement("th");
    const tableHeaderSalText = document.createTextNode( "Salary");

    tableHeaderEmp.appendChild(tableHeaderEmpText);
    tableHeaderSal.appendChild(tableHeaderSalText);

    headerRow.appendChild(tableHeaderEmp);
    headerRow.appendChild(tableHeaderSal);


    for(let i = 0; i < salaries.length; i++){

        const employeeData = employees[i];

        const salaryData = salaries[i];

        const employeeSalaryRow = document.createElement("tr");
    document.getElementById("results_table").appendChild(employeeSalaryRow);

    const employeeHeader = document.createElement("th");
    const employeeHeaderText = document.createTextNode(employeeData);

    const salaryHeader = document.createElement("th");
    const salaryHeaderText = document.createTextNode("");
    salaryHeaderText.textContent = "$"+salaryData;

    employeeHeader.appendChild(employeeHeaderText);
    salaryHeader.appendChild(salaryHeaderText);

    employeeSalaryRow.appendChild(employeeHeader);
    employeeSalaryRow.appendChild(salaryHeader);

    }

    document.getElementById("employeeDropdown").focus();
}

function addSalary() {

    var employeeName;

    var employeeSalary;

    do{

     employeeName = prompt("Please enter an employee's name");

     employeeSalary = prompt("Please enter an employee's salary");

    }while(dataValidation(employeeName, employeeSalary) == false)


    employees[employees.length] = employeeName;

    salaries[salaries.length] = parseInt(employeeSalary);

    const employeeList = document.getElementById("employeeDropdown");

     const newEmployee = document.createElement("option");
    const newEmployeeText = document.createTextNode(employeeName);
    newEmployee.appendChild(newEmployeeText);

    employeeList.appendChild(newEmployee);

    document.getElementById("employeeDropdown").focus();

}

function dataValidation(a,b){

    let nameEmpty = false;
    let numberNan = false;

    if(a == ""){
    nameEmpty = true;
    }

    if( isNaN(parseInt(b))){
    numberNan = true;
    }

    if(nameEmpty == true && numberNan == true){
        alert("Enter a valid name and salary");
        return(false);
    }else if(nameEmpty == true){
        alert("Enter a valid name");
        return(false);
    } else if(numberNan == true){
        alert("Enter a valid salary");
        return(false);
    }else{
        return(true);
    }



}



document.addEventListener('DOMContentLoaded', () => {
    $("#displayResultsButton").addEventListener("click", displayResults)
    $("#displaySalaryButton").addEventListener("click", displaySalary)
    $("#addSalaryButton").addEventListener("click", addSalary)
   
});