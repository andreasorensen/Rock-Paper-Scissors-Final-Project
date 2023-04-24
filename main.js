var classicGameChoices = [

  {name: 'stone', 
  image: '<img class="fighter" type="image" id="stone-btn" src="assests/rock.png" alt="stone-button">', 
  defeats: 'bird'}, 
  
  {name: 'water', 
  image: '<img class="fighter" type="image" id="water-btn" src="assests/water2.png" alt="water-button">', 
  defeats: 'stone'}, 

  {name: 'bird', 
  image: '<img class="fighter" type="image" id="bird-btn" src="assests/pinkbird.png" alt="bird-button">', 
  defeats: 'water'}
];


var difficultGameChoices = [
  
  {name: 'earth',
  image: '<img class="fighter" type="image" id="earth-btn" src="assests/earth.png" alt="earth-button">',
  defeats: 'air'},
  
  {name: 'air',
  image: '<img class="fighter" type="image" id="air-btn" src="assests/wind.png" alt="air-button">',
  defeats: 'water'},
  
  {name: 'fire',
  image: '<img class="fighter" type="image" id="fire-btn" src="assests/fire.png" alt="fire-button">',
  defeats: 'earth'},

  {name: 'water',
  image: '<img class="fighter" type="image" id="water-btn2" src="assests/water.png" alt="water-button">',
  defeats: 'fire'}
];

// // data model variables:
var players = [];
var computerPlayer;
var userPlayer;
var computerChoice;
// var gameType = game.gameType
var game;  //create function that changes "gameType" to "currentSelection" based on what button the user chooses.(beginGame)

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
    timeout()
    takeTurn() // I don't think I will need this here
  } else {
    determineWinner();
  }
}

function determineWinner(){
  var winner;
  if (userPlayer.fighter.defeats === computerPlayer.fighter.name){
    winner = userPlayer
  } else {
    winner = computerPlayer
  } 
  updateWins(winner)
}

  // how can i get the wins to persist when I move back to the home page? What function is resetting it in my logic-- the createGame? when/where is this called? -- how can I change it?

function updateWins(winner){
   winner.wins = winner.wins + 1
   console.log(winner)
}

function timeout(){
  setTimeout(() => {
    fighterChoiceHeader.innerText = "Choose your fighter!"
  }, 2000)
}

function showFighterChoices(){
  
}

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

// function beginNewGame(); 
//displayGameResult(){};
// function handlePlayersChoice(){};


// TO REFACTOR: go thgouh & see if I can pass any of the variables as parameters




