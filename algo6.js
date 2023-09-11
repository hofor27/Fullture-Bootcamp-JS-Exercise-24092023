// 1. Start.

// 2. Prompt the user to enter the first integer (num1).
let num1 = parseInt(prompt("Enter the first integer:"));

// 3. Prompt the user to enter the second integer (num2).
let num2 = parseInt(prompt("Enter the second integer:"));

// 4. Calculate the result of addition.
let additionResult = num1 + num2;

// 5. Calculate the result of subtraction.
let subtractionResult = num1 - num2;

// 6. Check if num2 is not equal to zero to avoid division by zero.
if (num2 !== 0) {
  // 7a. Calculate the result of division.
  let divisionResult = num1 / num2;
  // 8. Display the result of division.
  console.log("Division result: " + divisionResult);
} else {
  // 7b. If num2 is zero, display an error message for division by zero.
  console.log("Division by zero is not allowed.");
}

// 9. Calculate the result of multiplication.
let multiplicationResult = num1 * num2;

// 10. Display the results of addition, subtraction, and multiplication.
console.log("Addition result: " + additionResult);
console.log("Subtraction result: " + subtractionResult);
console.log("Multiplication result: " + multiplicationResult);

// 11. End.
