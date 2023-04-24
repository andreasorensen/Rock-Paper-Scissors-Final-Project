var classicGameChoices = ['stone', 'water', 'bird'];
var difficultGameChoices = ['earth', 'air', 'fire', 'water'];

// // data model variables:
var players = [];
var computerPlayer;
var userPlayer;
var computerChoice;
// var gameType = game.gameType
var game;  //create function that changes "gameType" to "currentSelection" based on what button the user chooses.(beginGame)
var userChoice;

 // //Query Selector Variables: 

var gameChoicePrompt = document.querySelector('#game-choice-header');
var fighterChoiceHeader = document.querySelector('#fighter-choice-header');

// // These 👇 will be used to interpolate game results as well as change the number of wins:
// var gameResultBanner = document.getElementById('game-result-header')
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
  }
  players = game.players
  // takeTurn();
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
    userPlayer.fighter = classicGameChoices[i]
  } else {
    var i = Math.floor(Math.random() * difficultGameChoices.length);
    userPlayer.fighter = difficultGameChoices[i]
  }
}

function determineComputerChoice(){
  if (game.gameType === 'classic'){ 
    var i = Math.floor(Math.random() * classicGameChoices.length)
    computerPlayer.fighter = classicGameChoices[i]
  } else {
    var i = Math.floor(Math.random() * difficultGameChoices.length);
    computerPlayer.fighter = difficultGameChoices[i]
  }
}

function detectDraw(){
  if (computerPlayer.fighter === userPlayer.fighter){
    fighterChoiceHeader.innerText = "It's a draw!"
    console.log(computerPlayer, userPlayer)
    timeout()
    takeTurn()
  } else {
    // determineWinner();
  }
}

function timeout(){
  setTimeout(() => {
    fighterChoiceHeader.innerText = "Choose your fighter!"
  }, 2000)
}

function showFighterChoices(){
  
}

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

    ///////////////////////dom updates////////////////////////////////

// Event Listeners:


// gameButtons.addEventListener('click', function (event){
//   showGame(event)
//   updateGameType(event)
// })
  
// Need to refactor to show event delegation with event.target but works for now 👇👇👇 maybe use event.target.parentElement === ???

difficultGameBtn.addEventListener('click', function(event){
  showGame(event)
  updateGameType(event)
  show(difficultGameView)
  takeTurn();
})

classicGameBtn.addEventListener('click', function(event){
  showGame(event)
  updateGameType(event)
  show(classicGameView)
  takeTurn();
})

changeGameBtn.addEventListener('click', function(){ 
  show(gameButtons)
  show(gameChoicePrompt)
  hide(difficultGameView) 
  hide(classicGameView)
  hide(fighterChoiceHeader)
  hide(changeGameBtn)
})



// gameButtons.addEventListener('click', function(event){
//   showGame(event)
//   updateGameType(event)
// })

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
}


function showGame(){
  hide(gameButtons)
  hide(gameChoicePrompt)
  show(fighterChoiceHeader)
  show(changeGameBtn)
  createGame()
}


function updateGameType(event){
  if (event.currentTarget === classicGameBtn) {
    game.gameType = 'classic'
  } else {
    game.gameType = 'difficult'
  }
  return game
}
  
  // why is my event.target not working?




// function beginNewGame(event){

// add another button to reset game scores 
  
//   } // also need timeout() included here.

// function beginNewGame();  // includes timeout()
//displayGameResult(){};
// function handlePlayersChoice(){};


// TO REFACTOR: go thgouh & see if I can pass any of the variables as parameters

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

