const outputScreen = document.querySelector('.output-screen');
const operators = document.querySelectorAll('.operator');
const operands = document.querySelectorAll('.operand');
const equalButton = document.querySelector('.equal');
const negativeButton = document.querySelector('.negative');
const clearButton = document.querySelector('.clear-button');
const decimalButton = document.querySelector('.decimal');
let total = 0;
let num1 = '';
let num2 = '';
let operator1 = '';
let operator2 = '';
let isFirstNum = true;
let alreadyOperated = false;
let equalPressed = false;
let operandPressedAfterEqual = false;
let decimalPressed = false;

outputScreen.textContent = total;

function add(num1, num2) {
    operatorPressed = true;
    total = +num1 + +num2;
    return total;
}

function subtract(num1, num2) {
    total = +num1 - +num2;
    return total;
}

function multiply(num1, num2) {
    total = +num1 * +num2;
    return total;
}

function divide(num1, num2) {
    total = +num1 / +num2;
    return total;
}

function modular(num1, num2) {
    total = +num1 % +num2;
    return total;
}

function clear() {
    total = 0;
    outputScreen.innerHTML = 0;
    num1 = '';
    num2 = '';
    isFirstNum = true;
    alreadyOperated = false;
}

function operate(numun, numto, operator) {
    if (operator === '+') {
        outputScreen.textContent = add(numun, numto)
    } else if (operator === '-') {
        outputScreen.textContent = subtract(numun, numto)
    } else if (operator === '*') {
        outputScreen.textContent = multiply(numun, numto)
    } else if (operator === '/') {
        outputScreen.textContent = divide(numun, numto)
    } else if (operator === '%') {
        outputScreen.textContent = modular(numun, numto)
    }
    num1 = total;
    num2 = '';
    alreadyOperated = false;
}

operators.forEach((item) => {
    item.addEventListener('click', function(event) {
        operator2 = operator1;
        operator1 = event.target.textContent;
        outputScreen.textContent = operator1
        isFirstNum = false;
        if (alreadyOperated) {
            operate(num1, num2, operator2);
        }
        alreadyOperated = true;
    })
})

operands.forEach((item) => {
    item.addEventListener('click', function(event) {
        if (equalPressed && isFirstNum) {
            num1 = '';
            equalPressed = false;
        }
        if (isFirstNum) {
            num1 += event.target.dataset.value;
            outputScreen.textContent = num1;
        } else {
            num2 += event.target.dataset.value;
            outputScreen.textContent = num2;
        }
    })
})

negativeButton.addEventListener('click', function() {
    if (isFirstNum) {
        const makeNegative = num1 * -1
        num1 = makeNegative;
        outputScreen.textContent = num1;
    } else {
        const makeNegative = num2 * -1
        num2 = makeNegative;
        outputScreen.textContent = num2;
        isFirstNum = false;
    }
})

decimalButton.addEventListener('click', function() {
    if (isFirstNum) {
        const addDecimal = num1 + '.';
        num1 = addDecimal;
        outputScreen.textContent = num1;
    } else {
        const addDecimal = num2 + '.'
        num2 = addDecimal;
        outputScreen.textContent = num2;
    }
    decimalPressed = true;
})

equalButton.addEventListener('click', function() {
    operate(num1, num2, operator1)
    equalPressed = true;
    isFirstNum = true;
})

clearButton.addEventListener('click', function() {
    clear();
})
