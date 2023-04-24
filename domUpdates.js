// //Query Selector Variables: 

var gameChoicePrompt = document.querySelector('#game-choice-header');
var fighterChoicePrompt = document.querySelector('#fighter-choice-header');

// // These 👇 will be used to interpolate game results as well as change the number of wins:

var gameResultBanner = document.querySelector('#game-result-header')
var userWins = document.querySelector('#user-wins');
var computerWins = document.querySelector('#computer-wins')

var changeGameBtn = document.querySelector('#change-game-btn');

// // HOME VIEW

var gameButtons = document.querySelectorAll('.game-buttons')
var classicGameBtn = document.querySelector('#classic-game-btn');
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

gameButtons.addEventListener('click', function(event){
  showGame();
  // create/add function that hides all similar elements, then add functions to display what's needed after each if statement?
  if(event.target === classicGameBtn){
    // should i use showClassicGame() OR just invoke function
    // show(classicGameView)
  } else {
    // should i use showDifficultGame() OR just invoke function:
    // show(classicGameView)
  };
})


function showGame(event){
  hide(gameButtons)
  show(fighterChoicePrompt)
  show(changeGameBtn)
  if(event.target === classicGameBtn){
    show(classicGameView)
  } else {
    show(difficultGameView)
  }
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
// function showClassicGame(){

// };

// function showDifficultGame(){

// };

function beginGame(event){
  //   if (event.target === classicGameBtn){
  //     newGame.gameType = ""
  //   }
  
  } // also need timeout() included here.
  
  function show(element) {
    element.classList.remove('hidden');
  }
  
  function hide(element) {
    element.classList.add('hidden')
  }