// 1. Start.

// 2. Prompt the user to enter the electricity consumption in KWh.
let consumption = parseFloat(
  prompt("Enter the electricity consumption in KWh:")
);

// 3. Initialize a variable to store the total electricity bill.
let bill = 0;

// 4. Calculate the electricity bill based on the consumption table.
if (consumption <= 300) {
  // If consumption is up to 300 KWh, the price is 1.25 R$ per KWh.
  bill = consumption * 1.25;
} else if (consumption <= 600) {
  // If consumption is between 301 and 600 KWh, the price is 1.50 R$ per KWh.
  bill = consumption * 1.5;
} else if (consumption <= 1000) {
  // If consumption is between 601 and 1000 KWh, the price is 1.75 R$ per KWh.
  bill = consumption * 1.75;
} else {
  // If consumption is above 1000 KWh, the price is 2.00 R$ per KWh.
  bill = consumption * 2.0;
}

// 5. Display the calculated electricity bill.
console.log("The electricity bill is: R$" + bill.toFixed(2));

// 6. End.
