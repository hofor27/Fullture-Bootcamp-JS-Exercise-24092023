// 1. Start.

// 2. Prompt the user to enter the first integer (num1).
let num1 = parseInt(prompt("Enter the first integer:"));

// 3. Prompt the user to enter the second integer (num2).
let num2 = parseInt(prompt("Enter the second integer:"));

// 4. Prompt the user to enter the third integer (num3).
let num3 = parseInt(prompt("Enter the third integer:"));

// 5. Calculate the smallest among the three numbers.
let smallest = Math.min(num1, num2, num3);

// 6. Calculate the average of the three numbers.
let average = (num1 + num2 + num3) / 3;

// 7. Display the smallest number.
console.log("The smallest number is: " + smallest);

// 8. Display the average of the three numbers.
console.log("The average of the three numbers is: " + average);

// 9. End.
