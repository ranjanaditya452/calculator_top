const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    if (b === 0) return "Error";
    return a / b;
}

let num1 = null;
let num2 = null;
let operator = null;
let waitingForNextNumber = false;

const screenB = document.querySelector(".screen");
const digitMenu = document.querySelector(".digitButtons");
const opMenu = document.querySelector(".opButtons");
const resetBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return b;
    }
}

function clearAll() {
    screenB.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
    waitingForNextNumber = false;
}

for (let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    digitMenu.appendChild(button);
}

digitMenu.addEventListener('click', function (event) {
    if (event.target.tagName !== 'BUTTON') return;
    const digit = event.target.textContent;
    
    if (waitingForNextNumber) {
        screenB.textContent = digit;
        waitingForNextNumber = false;
    } else {
        if (screenB.textContent === "0") {
            screenB.textContent = digit;
        } else {
            screenB.textContent += digit;
        }
    }
});

opMenu.addEventListener('click', function (event) {
    if (event.target.tagName !== 'BUTTON') return;
    const newOperator = event.target.textContent;
    
    if (operator && !waitingForNextNumber) {
        num2 = Number(screenB.textContent);
        let result = operate(num1, num2, operator);
        if (result === "Error") {
            clearAll();
            screenB.textContent = "Error";
            return;
        }
        screenB.textContent = result.toFixed(2);
        num1 = result;
    } else {
        num1 = Number(screenB.textContent);
    }
    
    operator = newOperator;
    waitingForNextNumber = true;
});

equalBtn.addEventListener('click', function () {
    if (operator && !waitingForNextNumber) {
        num2 = Number(screenB.textContent);
        let result = operate(num1, num2, operator);
        if (result === "Error") {
            clearAll();
            screenB.textContent = "Error";
            return;
        }
        screenB.textContent = result.toFixed(2);
        num1 = result;
        operator = null;
        waitingForNextNumber = true;
    }
});

resetBtn.addEventListener('click', clearAll);
