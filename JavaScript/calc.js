//JavaScript

//Declaring variables for everything required to make the calculator function 
var operators = document.querySelectorAll("button.operators"); // Makes everything that is a button with the class of operators into the variable "operators".
var numbers = document.querySelectorAll("button.numbers"); // Makes everything that is a button with the class of numbers into the variable "numbers".
var display = document.getElementById("screen");   // Makes everything with the id screen into the variable "display".
var equal = document.getElementById("equal");      // Makes everything with the id equal into the variable "equal".
var clear = document.getElementById("clear");      // Makes everything with the id clear into the variable "clear".
var sqrt = document.getElementById("sqrt");      // Makes everything with the id sqrt into the variable "sqrt".

// Listens for numbers 1 - 9 click and registers it then displays it onto the screen. 
function Numbers(htmlObj, index) { 
    htmlObj.addEventListener("click", function() { 
        display.value += index; //Displays/adds the inputed number onto the display/screen. 
            //alert(numbers)
    });
}

//Listens for an operator e.g multiplication divison, subtraction, addition then adds it onto the screen.
function Operators(htmlObj, index) {  //The operators are assigned an event listener
    htmlObj.addEventListener("click", function() { // The htmlObj has an event listener that listens for a click, when clicked, it will perfom a function, the function being it will display a value += index
        display.value += index;  // Adds a value to the current value of the variable
    });
}

//  For operators, it runs the same code over and over again, registers that you clicked/put an operator (+,-,×,÷) and enters it into the "equation"
for (var i = 0; i < operators.length; i++) {
    Operators(operators[i], operators[i].value);
}
// For numbers 1 through 9, it will run the same code over and over again, registers that you clicked/put in a number 1-9 and enters it into the "equation"
for (var i = 0; i < numbers.length; i++) {
    Numbers(numbers[i], numbers[i].value);
}

//Calculates the math inputed in the screen upon equal button click
if (equal.addEventListener("click", function() { // If there are actual values/applicable values it will calculate all of it, and then appear on the display
        display.value = eval(display.value)
    }));
    
//Clears the screen/display when the "CE" button is clicked 
clear.addEventListener("click", function() { // Basically is a clear button, when clicked it will perform a function, the function is to change the display value to " " which is nothing. 
    display.value = "" 
})

// Puts all the numbers and operators currently on the screen/display through an equation to generate the mean/avg 
var mean = document.getElementById("mean");   // Makes everything with the id mean into the variable "mean".
mean.addEventListener("click", function() {   // Mean is an event listener now, that "listens" for a click and will perform a function inside of the curly brackets
    // console.log("it works")
var ans;   // Ans will show up on the variable display
    ans = eval(display.value); // Eval calculates the math put into the display
    ans = ans / ((display.value.length / 2) + 0.5);  // Checks the string length of the display, divides it by 2, then add 0.5
    display.value = ans // When you click the equal sign on an applicable math equation/problem it is put through the eval math function which then outputs an answer
});