// 1. Start.

// 2. Prompt the user to enter the first grade (n1).
let n1 = parseFloat(prompt("Enter the first grade:"));

// 3. Prompt the user to enter the second grade (n2).
let n2 = parseFloat(prompt("Enter the second grade:"));

// 4. Calculate the arithmetic mean (average) of the two grades.
let average = (n1 + n2) / 2;

// 5. Check if the average is greater than or equal to 6.
if (average >= 6) {
  // 6a. If the average is greater than or equal to 6, display "Passed."
  console.log("Passed");
} else {
  // 6b. If the average is less than 6, display "Failed."
  console.log("Failed");
}

// 7. End.
