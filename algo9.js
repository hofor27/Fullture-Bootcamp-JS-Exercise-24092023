// 1. Start.

// 2. Initialize variables to store the information of the most expensive wine.
let mostExpensiveName = "";
let mostExpensivePrice = -1;
let mostExpensiveType = "";

// 3. Create a loop to input wine information until the name is "end".
while (true) {
  // 4. Prompt the user to enter the wine name.
  let name = prompt("Enter the wine name (or 'end' to finish):");

  // 5. Check if the name is "end" to exit the loop.
  if (name.toLowerCase() === "end") {
    break;
  }

  // 6. Prompt the user to enter the wine price.
  let price = parseFloat(prompt("Enter the wine price:"));

  // 7. Prompt the user to enter the wine type (T for red, B for white, R for rosé).
  let type = prompt(
    "Enter the wine type (T for red, B for white, R for rosé):"
  );

  // 8. Check if the current wine is more expensive than the previously most expensive.
  if (price > mostExpensivePrice) {
    mostExpensiveName = name;
    mostExpensivePrice = price;
    mostExpensiveType = type;
  }
}

// 9. Display the description of the most expensive wine.
console.log("The most expensive wine is:");
console.log("Name: " + mostExpensiveName);
console.log("Price: $" + mostExpensivePrice.toFixed(2));
console.log("Type: " + mostExpensiveType);

// 10. End.
