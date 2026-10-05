const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

for (const button of buttons) {
    button.addEventListener("click", () => {
        if (!isNaN(Number(button.textContent))) {
            if (operator == "") {
                firstNumber = firstNumber + button.textContent;
                display.textContent = firstNumber;
            } else {
                secondNumber = secondNumber + button.textContent;
                display.textContent = secondNumber;
            }
        } else if (
            button.textContent === "+" ||
            button.textContent === "-" ||
            button.textContent === "X" ||
            button.textContent === "/"
        ) {
            operator = button.textContent;
        }else if (button.textContent === ".") {
           if (operator === "") {
            firstNumber += ".";
           display.textContent = firstNumber;
        } else {
            secondNumber += ".";
            display.textContent = secondNumber;
       }
       }  
        else if (button.textContent === "=") {
            const result = operate(
                operator,
                Number(firstNumber),
                Number(secondNumber)
            );
            display.textContent = result;
            firstNumber = result;
            secondNumber = "";
            operator = "";
        }
        else if (button.textContent === "AC") {
                firstNumber = "";
               secondNumber = "";
                operator = "";
                display.textContent = "0";
        }
        else if (button.textContent === "DEL") {
            if (operator === "") {
                firstNumber = firstNumber.slice(0, -1);
                display.textContent = firstNumber || "0";
            } else {
                secondNumber = secondNumber.slice(0, -1);
                display.textContent = secondNumber || "0";
            }
        }
    });
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        return "dumbahh";
    } else {
        return a / b;
    }
}
function operate(op, a, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "X":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalid operation";
    }
}