let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

function calculateExpression(expression) {
    let tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokens) return "Error";

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        let operator = tokens[i];
        let num = parseFloat(tokens[i + 1]);

        if (isNaN(num)) return "Error";

        if (operator === '+') result += num;
        else if (operator === '-') result -= num;
        else if (operator === '*') result *= num;
        else if (operator === '/') {
            if (num === 0) return "Error";
            result /= num;
        }
    }
    return result;
}

let crntValue = "";
let ans = null;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;

        if (!isNaN(value) || value === "." || value === "+" || value === "-" || value === "*" || value === "/") {
            crntValue += value;
            display.textContent = crntValue;
        } else if (value === "=") {
            try {
                ans = calculateExpression(crntValue);
                display.textContent = ans;
                crntValue = ans.toString();
            } catch (error) {
                display.textContent = "Error";
                crntValue = "";
            }
        } else if (value === "reset") {
            crntValue = "";
            ans = null;
            display.textContent = "0";
        } else if (value === "del") {
            crntValue = crntValue.slice(0, -1);
            display.textContent = crntValue || "0";
        }
    });
});
