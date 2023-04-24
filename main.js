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
  // takeTurn();
  return game
}

// function takeTurn() {
//   determineComputerChoice();
//   determineUserChoice();
//   detectDraw();
// }

// function determineUserChoice(){
//   if (game.gameType === 'classic'){ 
//     var i = Math.floor(Math.random() * classicGameChoices.length)
//     userChoice = classicGameChoices[i]
//   } else {
//     var i = Math.floor(Math.random() * difficultGameChoices.length);
//     userChoice = difficultGameChoices[i]
//   }
//   console.log(userChoice)
//   return userChoice
// }

// function determineComputerChoice(){
//   if (game.gameType === 'classic'){ 
//     var i = Math.floor(Math.random() * classicGameChoices.length)
//     computerChoice = classicGameChoices[i]
//   } else {
//     var i = Math.floor(Math.random() * difficultGameChoices.length);
//     computerChoice = difficultGameChoices[i]
//   }
//   console.log(computerChoice)
//   return computerChoice
// }

// function detectDraw(){
//   if (computerChoice === userChoice){
//     console.log(`It's a draw! You both chose ${userChoice}!`)
//     takeTurn();
//   } else {
//     determineWinner();
//   }
// }

// function determineWinner(){
//   if (game.gameType === 'classic'){
//     determineClassicWin();
//   } else {
//     determineDifficultWin();
//   }
// }

// function determineClassicWin() {
//   if ((userChoice === "bird" && computerChoice === "water") || (userChoice === "stone" && computerChoice === "bird") || (userChoice === "water" && computerChoice === "stone")) {
//     var winner = "user"
//     console.log("You win!")
//   } else {
//     winner = "computer"
//     console.log('You lose!')
//   }
//   checkWins(winner);
// }

// function determineDifficultWin() {
//   if ((userChoice === "water" && computerChoice === "fire") || (userChoice === "earth" && computerChoice === "air") || (userChoice === "fire" && computerChoice === "earth") || (userChoice === "air" && computerChoice === "water")) {
//     console.log("You win!")
//     var winner = "user"
//   } else {
//     console.log('You lose!')
//     winner = "computer"
//   }
//   checkWins(winner);
// }

// function checkWins(winner){
//   if (winner === "user") {
//     userPlayer.wins = userPlayer.wins + 1
//     console.log('userPlayer.wins:', userPlayer.wins)
//     takeTurn();
//   } else {
//     computerPlayer.wins = computerPlayer.wins + 1
//     console.log('computerPlayer.wins:', computerPlayer.wins)
//     takeTurn();
//   }
// }

// function beginNewGame();  // includes timeout()
//displayGameResult(){};
// function handlePlayersChoice(){};


// TO REFACTOR: go thgouh & see if I can pass any of the variables as parameters



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


    ///////////////////////dom updates////////////////////////////////

    // //Query Selector Variables: 

var gameChoicePrompt = document.querySelector('#game-choice-header');
var fighterChoiceHeader = document.querySelector('#fighter-choice-header');

// // These 👇 will be used to interpolate game results as well as change the number of wins:

var gameResultBanner = document.querySelector('#game-result-header')
var userWins = document.querySelector('#user-wins');
var computerWins = document.querySelector('#computer-wins')

var changeGameBtn = document.querySelector('#change-game-btn');

// // HOME VIEW

var gameButtons = document.querySelector('.game-buttons')
var classicGameBtn = document.querySelector('.classic-btn');
var difficultGameBtn = document.querySelector('#difficult-game-btn'); // do i need this if event handler is on gameButtons section?

// // CLASSIC GAME VIEW

var classicGameView = document.querySelector('.classic-fighters-view')
var birdFighter = document.querySelector('#bird-btn');
var waterFighter = document.querySelector('#water-btn');
var stoneFighter = document.querySelector('#stone-btn');

// // DIFFICULT GAME VIEW

var difficultGameView = document.querySelector('.difficult-game-view');
var earthFighter = document.querySelector('#earth-btn');
var waterFighter2 = document.querySelector('#water-btn2')
var fireFighter = document.querySelector('#fire-btn');
var airFighter = document.querySelector('#air-btn');

// Event Listeners:


// gameButtons.addEventListener('click', function (event){
//   showGame(event)
//   updateGameType(event)
// })
  
// Need to refactor to show event delegation with event.target but works for now 👇👇👇 

difficultGameBtn.addEventListener('click', function(event){
  showGame(event)
  updateGameType(event)
  show(difficultGameView)
})

classicGameBtn.addEventListener('click', function(event){
  showGame(event)
  updateGameType(event)
  show(classicGameView)
})

  
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
}

// gameButtons.addEventListener('click', function(event){
//   showGame(event);
//   updateGameType(event);
// });

function showGame(event){
  hide(gameButtons)
  hide(gameChoicePrompt)
  show(fighterChoiceHeader)
  show(changeGameBtn)
  // console.log(event.target)
  // console.log(classicGameBtn)
  // if(event.target === difficultGameBtn){
  //   show(difficultGameView)
  // } else {
  //   show(classicGameView)
  // }
  createGame()
}


function updateGameType(event){
  if (event.target === classicGameBtn){
    game.gameType = 'classic'
  } else {
    game.gameType = 'difficult'
  }
  return game
}

// function beginGame(event){
//   //   if (event.target === classicGameBtn){
//   //     newGame.gameType = ""
//   //   }
  
//   } // also need timeout() included here.
