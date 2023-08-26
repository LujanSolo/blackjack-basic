//* GAME START CONFIRMATION (ENTRY POINT)
let gameStart = confirm("START GAME?");

//* OBJECT TO HOLD GAME DETAILS
let gameDetails = {
  playerScore: 0,
  dealerScore: 0,
  scoreLimit: 21,
};

//* CONDITIONAL FOR GAME START
if (gameStart) {
  blackjack();
} else {
  alert("Maybe another time...");
}

//* FUNCTION TO DRAW A SINGLE CARD
function drawOne() {
  return Math.floor(Math.random() * (11 - 2 + 1) + 2);
}

function scoreboard() {
  alert(
    `
    Your Score: ${gameDetails.playerScore}
    Dealer's Score: ${gameDetails.dealerScore}
    `
  );
}

//* BASIC GAME FUNCTIONALITY
function blackjack() {
  gameDetails.playerScore += drawOne() + drawOne(); // sets opening player score
  gameDetails.dealerScore += drawOne();  // sets opening dealer score

  // Since Aces can be valued at 1 or 11, starting values will never be double 11's
  // hence, we reset values of 22 to 21 for the player
  if (gameDetails.playerScore === 22) {
    gameDetails.playerScore = 21;
  }

  // SCOREBOARD (function?)
  alert("You are given two cards. The dealer reveals one of his two cards.")
  scoreboard();

  if (gameDetails.playerScore === 21) {
    alert("BLACKJACK! YOU WIN!");
    endGame();
  }
}

function endGame() {
  alert(
    `
    FINAL SCORE
    YOUR SCORE: ${gameDetails.playerScore}
    DEALER'S SCORE: ${gameDetails.dealerScore}
    `
  )
  return;
}
