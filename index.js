let gameStart = confirm("START GAME?");

let gameDetails = {
  playerScore: 0,
  dealerScore: 0,
  scoreLimit: 21,
}

if (gameStart) {
  blackjack();
} else {
  alert("Maybe another time...");
}

function drawOne() {
  return Math.floor(Math.random() * (11 - 2 + 1) + 2);
}

function blackjack() {
  // let player add one random card to his total every time he confirms "draw one"
  gameDetails.playerScore += drawOne() + drawOne();
  gameDetails.dealerScore += drawOne();

  

  alert(`
    You are given two cards. The dealer reveals one of his two.
    Your Score: ${gameDetails.playerScore}
    Dealer's Score: ${gameDetails.dealerScore}
    `
  );

  if(gameDetails.playerScore === 21){
    alert("BLACKJACK! YOU WIN!");
    endGame();
  };
};

function endGame() {alert(`Your Score: ${gameDetails.playerScore} Dealer's Score: ${gameDetails.dealerScore} GAME OVER`); return;}