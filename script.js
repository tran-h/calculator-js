let num1 = '', num2 = '', oper = '', displayText = '', result = '';

function addNum(a, b) {
    return a + b;
}

function subNum(a, b) {
    return a - b;
}

function multNum(a, b) {
    return a * b;
}

function divNum(a, b) {
    return a / b;
}

function operate(op, a, b) {
    let x = Number(a);
    let y = Number(b);
    switch (op) {
        case "+":
            result = addNum(x, y);
            break;
        case "-":
            result = subNum(x, y);
            break;
        case "*":
            result = multNum(x, y);
            break;
        case "/":
            result = divNum(x, y);
            break;
        default:
            break;
    }
}

let display = document.querySelector("#display");

let digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (oper != '') {
            displayText = '';
        }
        displayText += digit.textContent;
        display.textContent = displayText;
    });
});

let operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (num1 == '') {
            num1 = displayText;
            oper = operator.textContent;
        } else {
            num2 = displayText;
        }

        if (num1 != '' && num2 != '') {
            operate(oper, num1, num2);
            oper = operator.textContent;
            num1 = result;
            num2 = '';
            displayText = Math.round((result + Number.EPSILON) * 100) / 100;
            display.textContent = displayText;
        }
    });
});

let btnEquals = document.querySelector("#equals");
btnEquals.addEventListener("click", () => {
    num2 = displayText;
    if (num1 != '' && num2 != '') {
        operate(oper, num1, num2);
        displayText = Math.round((result + Number.EPSILON) * 100) / 100;
        display.textContent = displayText;
    }
});

let btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    oper = '';
    displayText = '';
    result = '';
    display.textContent = '0';
});