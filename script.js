// script.js

function getFormValue() {
    // Get the form element by its ID
    var form = document.getElementById("myForm");

    // Access the values of the first and last name fields
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;

    // Display the values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Attach the function to the form's submit event
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Call the custom function to handle the form submission
    getFormValue();
});

}



