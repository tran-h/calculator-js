let num1, num2, oper, displayText = "";

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
    switch (op) {
        case "+":
            addNum(a, b);
            break;
        case "-":
            subNum(a, b);
            break;
        case "*":
            multNum(a, b);
            break;
        case "/":
            divNum(a, b);
            break;
        default:
            break;
    }
}