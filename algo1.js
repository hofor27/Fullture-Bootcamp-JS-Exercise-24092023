// Initialize variables A and B in our Algorithm
let A = 0;
let B = 0;

// Create a function to read and process user input
function processInput() {
  // Prompt the user to enter a number
  let user_input = prompt("Enter a number (enter '0' to finish):");

  // Convert the input to a floating-point number
  let number = parseFloat(user_input);

  // Check if the number is positive, negative, or zero
  if (number > 0) {
    A += number;
  } else if (number < 0) {
    B += number;
  }

  // Check if the user wants to finish
  if (number !== 0) {
    processInput(); // Recursively call the function for more input
  } else {
    // Display the values of A and B at the end
    console.log("Positive (A): " + A);
    console.log("Negative (B): " + B);
  }
}

// Start the input processing
processInput();
