let labels = document.querySelectorAll("label");

labels.forEach(label => {
    label.addEventListener("click", () => {
        let radioInput = label.querySelector("input"); 
        
        if (radioInput.checked) {
            console.log("This radio is selected:", radioInput.id);

            // Reset previous theme 
            document.documentElement.classList.remove("theme-1", "theme-2", "theme-3");

            // Apply new theme
            if (radioInput.id === "on1") {
                document.documentElement.classList.add("theme-1");
            } else if (radioInput.id === "on2") {
                document.documentElement.classList.add("theme-2");
            } else if (radioInput.id === "on3") {
                document.documentElement.classList.add("theme-3");
            }
        }
    });
});
