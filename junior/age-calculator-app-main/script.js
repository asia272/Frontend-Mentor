let formData = document.getElementById("form-data");

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // Month is zero-based
const currentYear = currentDate.getFullYear();

function calculateAge(day, month, year) {
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        let lastMonthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
        ageDays += lastMonthDays;
        ageMonths--;
    }

    document.getElementById("y").innerText = ageYears;
    document.getElementById("m").innerText = ageMonths;
    document.getElementById("d").innerText = ageDays;
}


formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let dayInput = formData.elements["day"];
    let monthInput = formData.elements["month"];
    let yearInput = formData.elements["year"];

    let day = dayInput.value.trim();
    let month = monthInput.value;
    let year = yearInput.value;
    
    let isValid = true;

    // Function to show error message
    function showError(inputField, message) {
        let label = inputField.previousElementSibling;
        if (label) label.style.color = "hsl(0, 100%, 67%)";

        let error = document.createElement("span");
        error.classList.add("error");
        error.style.color = "red";
        error.innerText = message;
        inputField.insertAdjacentElement("afterend", error);
        inputField.style.borderColor = "hsl(0, 100%, 67%)";
        inputField.style.outlineColor = "hsl(0, 100%, 67%)";
    }

    // Function to reset styles
    function resetStyles(inputField) {
        let label = inputField.previousElementSibling;
        if (label) label.style.color = ""; // Reset to default
        inputField.style.borderColor = "";
        inputField.style.outlineColor = "";
        let existingError = inputField.nextElementSibling;
        if (existingError && existingError.classList.contains("error")) {
            existingError.remove();
        }
    }

    // Reset previous errors
    document.querySelectorAll(".error").forEach((el) => el.remove());

    // Year validation
    if (yearInput.value.trim() === "") {
        showError(yearInput, "This filed is required");
        isValid = false;
    } else if (year > currentYear || year <= 0) {
        showError(yearInput, "Must be in the past");
        isValid = false;
    } else {
        resetStyles(yearInput);
    }

    // Validate month
    if (!monthInput.value) {
        showError(monthInput, "This field is required");
        isValid = false;
    } else if (month < 1 || month > 12) {
        showError(monthInput, "Must be a valid month");
        isValid = false;
    } else {
        resetStyles(monthInput);
    }

    // Validate day
    let maxDays = new Date(year, month, 0).getDate();
    if(!day){
        showError(dayInput,'This filed is required')
    }
    else if (day < 1 || day > maxDays) {
        showError(dayInput, `Must be a valid day`);
        isValid = false;
    } else {
        resetStyles(dayInput);
    }

    if (isValid) {
        calculateAge(day, month, year);
        dayInput.value = "";
        monthInput.value = "";
        yearInput.value = "";
    }
});
