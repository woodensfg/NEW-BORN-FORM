// JavaScript code for form validation
const form = document.getElementById("registration-form");
const errorMessagesContainer = document.getElementById("error-messages");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now

    // Reset any previous error messages
    errorMessagesContainer.innerHTML = "";

    // Validate form fields
    const fullName = form.querySelector("#full-name").value.trim();
    const birthDate = form.querySelector("#birth-date").value;
    const birthPlace = form.querySelector("#birth-place").value.trim();
    const gender = form.querySelector("input[name='gender']:checked");
    const birthTime = form.querySelector("#birth-time").value;
    const parent1FullName = form.querySelector("#parent1-full-name").value.trim();
    const parent1Id = form.querySelector("#parent1-id").value.trim();
    const parent1Residence = form.querySelector("#parents1-residence").value.trim();
    const parent2FullName = form.querySelector("#parent2-full-name").value.trim();
    const parent2Id = form.querySelector("#parent2-id").value.trim();
    const parent2Residence = form.querySelector("#parents2-residence").value.trim();

    if (fullName === "") {
        displayError("Please enter the full name of the newborn.");
    }

    if (birthDate === "") {
        displayError("Please select the date of birth.");
    }

    if (birthPlace === "") {
        displayError("Please enter the place of birth.");
    }

    if (!gender) {
        displayError("Please select the gender.");
    }

    if (birthTime === "") {
        displayError("Please enter the time of birth.");
    }

    if (parent1FullName === "") {
        displayError("Please enter the full name of Parent 1.");
    }

    if (parent2FullName === "") {
        displayError("Please enter the full name of Parent 2.");
    }

    // If no errors, you can submit the form
    if (errorMessagesContainer.children.length === 0) {
        // You can submit the form to the server here if needed
        alert("Form submitted successfully!"); // Replace with actual submission code
    }
});

function displayError(message) {
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    errorMessagesContainer.appendChild(errorElement);
}
