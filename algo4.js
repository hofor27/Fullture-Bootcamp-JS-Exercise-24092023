// 1. Start.

// 2. Prompt the user to enter a number.
let userInput = prompt("Enter a number:");

// 3. Convert the user input to a numeric variable.
let number = parseFloat(userInput);

// 4. Check if the number is greater than 100.
if (number > 100) {
  // 5a. If the number is greater than 100, display the original value.
  console.log("Value is greater than 100: " + number);
} else {
  // 5b. If the number is not greater than 100, display it as zero.
  console.log("Value is less than or equal to 100: 0");
}

// 6. End.
