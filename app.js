// Variables
const
  firstName = document.getElementById("first-name"),
  lastName = document.getElementById("last-name"),
  submitBtn = document.getElementById("submit-btn"),
  display = document.getElementById("display");


// Functions
// Function to create add person
const addPerson = (e) => {
  // Set entry to the input values
  const entry = new Person(firstName.value, lastName.value);

  // Display the value in the display div
  display.innerHTML += `${entry.firstName} ${entry.lastName} <br>`;

  // Call the function that clears the displays
  clearInputs();

  // Prevent any default behaviors
  e.preventDefault();
}

// Event Listener - need to figure out why MY event listeners have to go to below. I've seen it go above.
submitBtn.addEventListener("click", addPerson);

// Clear inputs function
const clearInputs = () => {
  firstName.value = "";
  lastName.value = "";
}

// Person Constructor

// Cannot use arrow functions as constructors
/*const Person = (firstName, lastName) => {
  this.firstName = firstName,
  this.lastName = lastName
}*/

function Person(firstName, lastName) {
  this.firstName = firstName,
    this.lastName = lastName
}
