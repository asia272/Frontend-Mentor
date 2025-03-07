# Calculator with Theme Toggle

## Overview
This project is a calculator with multiple theme options, built using **HTML, CSS, and JavaScript**. The main focus was on implementing **CSS variables for theme switching** and handling calculations efficiently with JavaScript.

## What I Learned

### 🎨 Using CSS Variables for Theming
- Defined CSS variables and switched themes dynamically by applying different classes.
- Used `:root` to store theme variables and changed them based on user selection.
- Implemented radio buttons to allow users to switch between multiple themes smoothly.

### ⚡ Handling Theme Toggle with JavaScript
- Ensured that the selected theme persisted when toggled.
- Used `document.documentElement.classList` to remove the previous theme and apply the new one dynamically.

### 🧮 Implementing a Calculation Function
- Faced challenges in parsing and evaluating mathematical expressions safely.
- Used `match()` to extract numbers and operators from the input string.
- Implemented a loop with conditions to process calculations step by step, avoiding unsafe `eval()` usage.
- Handled errors such as **division by zero** by displaying an error message.

### 🎯 Handling Button Click Events
- Used `querySelectorAll` and `forEach` loop to assign event listeners to calculator buttons.
- Implemented logic for handling number input, operators, reset, and delete functionality effectively.

## 🚀 Challenges & Solutions
| Challenge | Solution |
|-----------|----------|
| Applying multiple themes using CSS variables | Used `:root` variables and dynamically switched themes via JavaScript. |
| Implementing a safe calculation function | Used `match()` to extract tokens and a loop to evaluate expressions instead of `eval()`. |
| Handling errors like division by zero | Added conditions to check and display an error message if division by zero occurs. |

## 🌍 Live Preview
Check out the live version of the calculator here:  
🔗 [Live Site](https://asia272.github.io/Frontend-Mentor/intermediate/calculator-app-main/)

---

This project improved my understanding of **CSS variables, theme toggling, and JavaScript calculations**. Looking forward to building more projects! 🚀  
