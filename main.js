var classicGameChoices = ['stone', 'water', 'bird'];
var difficultGameChoices = ['earth', 'air', 'fire', 'water'];

// // data model variables:
var players = [];
var computerPlayer;
var userPlayer;
var computerChoice;
// var gameType = game.gameType
var game = createGame()  //create function that changes "gameType" to "currentSelection" based on what button the user chooses.(beginGame)
var userChoice;
var winner;

// Game Functions

function createPlayer(name, token, wins=0){
  var player = {
    name: name, 
    token: token,
    wins
    // add fighter here?? replace in the function that the choice is chosen in? 
  }
  return player
}

function createGame(){
  computerPlayer = createPlayer("computer", " 💻 ");
  userPlayer = createPlayer("human", " 👩‍🦱 ");
  game = {
    players: [userPlayer, computerPlayer],
    score: `user: ${userPlayer.wins}, computer: ${computerPlayer.wins}`,
    gameType: "difficult" // this will be updated with another function that changes it depending on which game the user chooses
  }
  players = game.players
  takeTurn();
  return game
}

function takeTurn() {
  determineComputerChoice();
  determineUserChoice();
  detectDraw();
}

function determineUserChoice(){
  if (game.gameType === 'classic'){ 
    var i = Math.floor(Math.random() * classicGameChoices.length)
    userChoice = classicGameChoices[i]
  } else {
    var i = Math.floor(Math.random() * difficultGameChoices.length);
    userChoice = difficultGameChoices[i]
  }
  console.log(userChoice)
  return userChoice
}

function determineComputerChoice(){
  if (game.gameType === 'classic'){ 
    var i = Math.floor(Math.random() * classicGameChoices.length)
    computerChoice = classicGameChoices[i]
  } else {
    var i = Math.floor(Math.random() * difficultGameChoices.length);
    computerChoice = difficultGameChoices[i]
  }
  console.log(computerChoice)
  return computerChoice
}

function detectDraw(){
  if (computerChoice === userChoice){
    console.log(`It's a draw! You both chose ${userChoice}!`)
  } else {
    determineWinner();
  }
}

function determineWinner(){
  if (game.gameType === 'classic'){
    determineClassicWin();
  } else {
    determineDifficultWin();
  }
}

function determineClassicWin() {
  if ((userChoice === "bird" && computerChoice === "water") || (userChoice === "stone" && computerChoice === "bird") || (userChoice === "water" && computerChoice === "stone")) {
    winner = "user"
    console.log("You win!")
  } else {
    winner = "computer"
    console.log('You lose!')
  }
  checkWins();
}

function determineDifficultWin() {
  if ((userChoice === "water" && computerChoice === "fire") || (userChoice === "earth" && computerChoice === "air") || (userChoice === "fire" && computerChoice === "earth") || (userChoice === "air" && computerChoice === "water")) {
    console.log("You win!")
    winner = "user"
  } else {
    console.log('You lose!')
    winner = "computer"
  }
  checkWins();
}

function checkWins(){
  if (winner === "user") {
    userPlayer.wins = userPlayer.wins + 1
    console.log('userPlayer.wins:', userPlayer.wins)
    takeTurn();
  } else {
    computerPlayer.wins = computerPlayer.wins + 1
    console.log('computerPlayer.wins:', computerPlayer.wins)
    takeTurn();
  }
}




// function beingNewGame();  // includes timeout()
//displayGameResult(){};




// function checkWins(){}; // check game board for current wins -- use this function to updateWins() ?? Or are these two the same thing? 
// function updateWins(){}; // update the newGame.score[i], based on winner

// function handlePlayersChoice(){};




// function changeView(event) {
//   if (event.target === )
// }

// 1. write function that changes the view depending on which button they push - classic or difficult
    // write conditional -- if event.target === classic, call another function that hides/shows everything not included/included on the classic view page
    // if !event.target === classic, call the another function that hides/shows everything not incldued/included on the difficult view page

      // function to hide/show on classic view

        // what to hide:   game buttons & choose your game header
        // what to show: classic game buttons, change game button, & choose your fighter header

      // function to hide/show on difficult view

          // what to hide: choose game buttons & choose your game header
          // what to show: difficult game buttons, change game button & choose your fighter header.

       // also need to run all beginning createPlayer, createGame, etc. for the above functions



// 3. DIFFICULT VIEW -- basically the same as above but with 4 options 
    // is there a way I can use the same functions to determine the computer chocie as well as determine the winner?