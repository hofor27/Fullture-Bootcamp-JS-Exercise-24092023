// 1. Start.

// 2. Prompt the user to enter their weight in kilograms.
let weight = parseFloat(prompt("Enter your weight in kilograms:"));

// 3. Prompt the user to enter their height in meters.
let height = parseFloat(prompt("Enter your height in meters:"));

// 4. Calculate the Body Mass Index (BMI) using the formula.
let bmi = weight / height ** 2;

// 5. Display the calculated BMI.
console.log("Your Body Mass Index (BMI) is: " + bmi);

// 6. End.
