let number1,number2,operator;

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