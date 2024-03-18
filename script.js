let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function updateDisplay(number){
    displayValue += number + " ";
    display.value = displayValue;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText >= 0 && buttonText <= 9) {
            updateDisplay(buttonText);
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            // If an operator button is clicked
            if (firstNumber === "") {
                firstNumber = parseFloat(displayValue);
                operator = buttonText;
                displayValue = "";
            } else {
                // If there's already a first number stored, calculate immediately
                secondNumber = parseFloat(displayValue);
                let result = operate(firstNumber, secondNumber, operator);
                display.value = result;
                // Store the result as the new first number
                firstNumber = result;
                secondNumber = "";
                operator = buttonText;
                displayValue = "";
            }
        } else if (buttonText === '=') {
            // If the "=" button is clicked
            if (firstNumber !== "" && operator !== "" && displayValue !== "") {
                secondNumber = parseFloat(displayValue);
                let result = operate(firstNumber, secondNumber, operator);
                display.value = result;
                // Reset stored values
                firstNumber = "";
                secondNumber = "";
                operator = "";
                displayValue = "";
            }
        } else if (buttonText === 'C') {
            // Clear button
            clear();
        }
    })
})

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
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

function clear(){
    number1 = "";
    number2 = "";
    operator = "";
    displayValue = "";
    display.value = displayValue;
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