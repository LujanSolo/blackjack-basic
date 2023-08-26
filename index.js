let playerScore = 0;
let dealerScore = 0;
let scoreLimit = 21;

let drawOne = Math.floor(Math.random() * (11 - 2 + 1) + 2);


let gameStart = confirm("START GAME?");

if(gameStart) {
  console.log('game will start')
} else {
  alert("Maybe another time...");
};

function blackjack() {
  playerScore = drawOne + drawOne;
  dealerScore = drawOne;

  let drawAgain = confirm(`
    Your Score: ${playerScore}
    Dealer's Score: ${dealerScore}
    Draw again?
    `
  );

  if(drawAgain) {
    playerScore += drawOne
  }
};

blackjack()