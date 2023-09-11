// 1. Start.

// 2. Prompt the user to enter the previous price of the product.
let previousPrice = parseFloat(
  prompt("Enter the previous price of the product:")
);

// 3. Prompt the user to enter the current price of the product.
let currentPrice = parseFloat(
  prompt("Enter the current price of the product:")
);

// 4. Calculate the price during the promotion using the three options.
let option1 = previousPrice;
let option2 = currentPrice * 0.9; // 10% discount on the current price
let option3 = ((currentPrice + previousPrice) * 0.9) / 2; // 10% discount on the average

// 5. Find the lowest price among the three options.
let lowestPrice = Math.min(option1, option2, option3);

// 6. Display the price during the promotion.
console.log("The price during the promotion is: R$" + lowestPrice.toFixed(2));

// 7. End.
