let number1,number2,operator;
let displayValue = "";
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function updateDisplay(number){
    displayValue += number + " ";
    display.value = displayValue;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    })
})

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}
function divison(a,b){
    if(b === 0){
        return "Cannot divide number by 0";
    }
    return a / b;
}

function operate(a, b, operator){
    switch (operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divison(a, b);
        
    }
}