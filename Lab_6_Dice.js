// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls;

// Initialize the balance to 0
balance = 0;

function rollDice() {
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  dieSum = die1 + die2;

  // set the dice images based on the roll
  die1Image = document.querySelectorAll("img")[0];
  die1Name = "images/dice" + die1 + ".png";
  die1Image.setAttribute("src", die1Name);

  die2Image = document.querySelectorAll("img")[1];
  die2Name = "images/dice" + die2 + ".png";
  die2Image.setAttribute("src", die2Name);
}

function whoWon() {
  // in h3 report how much money was won or lost and update the balance
  if (dieSum <= 5) {
    outcome = "You lose, -$5.";
    balance -= 5;
  } else if (dieSum >= 9) {
    outcome = "You win, +$5.";
    balance += 5;
  } else {
    outcome = "It's a draw, nobody wins or loses.";
  }

  // Report the outcome and balance:
  banner = die1 + " + " + die2 + " is: " + dieSum;
  document.querySelector("h3").innerHTML = banner + "<br>" + outcome + "<br>Balance: $" + balance;
}

function playMultipleTimes() {
  numRolls = parseInt(document.getElementById("numRollsInput").value);

  if (numRolls > 0) {
    for (let i = 0; i < numRolls; i++) {
      rollDice();
      whoWon();
    }
  } else {
    alert("Please enter a valid number of rolls (greater than 0).");
  }
}