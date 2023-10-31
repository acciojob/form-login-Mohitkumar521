// Get the form element by its ID
const form = document.getElementById('myForm');

// Function to handle form submission
function getFormValue(event) {
  // Prevent the form from submitting in the traditional way
  event.preventDefault();

  // Get the values of the First and Last name input fields
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Display the values in an alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Add an event listener to the form to call the getFormValue() function when submitted
form.addEventListener('submit', getFormValue);


