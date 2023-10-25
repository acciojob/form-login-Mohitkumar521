// Define a function to handle the form submission
function getFormValue(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the values of First and Last Name from the form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Display the values using the alert function
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Get a reference to the form element and attach an event listener to it
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", getFormValue);

