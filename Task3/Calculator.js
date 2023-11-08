document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentValue = "";
    let operator = "";
    let previousValue = "";

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.innerText;

            if (/\d/.test(value)) {
                currentValue += value;
                display.value = currentValue;
            } else if (value === "C") {
                currentValue = "";
                previousValue = "";
                operator = "";
                display.value = "";
            } else if (value === "=") {
                if (currentValue && operator && previousValue) {
                    currentValue = operate(operator, parseFloat(previousValue), parseFloat(currentValue));
                    display.value = currentValue;
                    previousValue = "";
                    operator = "";
                }
            } else {
                if (currentValue) {
                    operator = value;
                    previousValue = currentValue;
                    currentValue = "";
                }
            }
        });
    });

    function operate(operator, num1, num2) {
        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 !== 0) {
                    return num1 / num2;
                } else {
                    return "Error";
                }
        }
    }
});
