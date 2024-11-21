document.addEventListener("DOMContentLoaded", function () {
    const dynamicForm = document.getElementById("dynamicForm");
    const numFieldsSelect = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    // Add an event listener to the dropdown menu to generate input fields dynamically
    numFieldsSelect.addEventListener("change", function () {
        const numFields = parseInt(numFieldsSelect.value);

        // Call the function to generate input fields with the selected number
        generateInputFields(numFields);
    });

    // Add an event listener to the form to validate before submission
    dynamicForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        // Call the function to validate the form
        if (validateForm()) {
            dynamicForm.submit(); // Submit the form if validation is successful
        }
    });

    function generateInputFields(numFields) {
        // Clear the existing input fields
        inputContainer.innerHTML = "";

        // Create and append new input fields based on the selected value
        for (let i = 1; i <= numFields; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = `field${i}`;
            input.placeholder = `Field ${i}`;
            inputContainer.appendChild(input);
        }
    }

    function validateForm() {
        const inputs = inputContainer.querySelectorAll("input");

        // Check if any input field is empty
        for (const input of inputs) {
            if (input.value.trim() === "") {
                alert("Please fill in all fields.");
                return false; // Prevent form submission
            }
        }

        return true; // Allow form submission if all fields are filled
    }
});