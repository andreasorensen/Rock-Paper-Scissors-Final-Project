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

  {name: 'water2',
  image: '<img class="fighter" type="image" id="water-btn2" src="assests/water.png" alt="water-button">',
  defeats: 'fire'}
];

// // data model variables:
var players = [];
var computerPlayer;
var userPlayer;
var game;

 // //Query Selector Variables: 

var gameChoicePrompt = document.querySelector('#game-choice-header');
var fighterChoiceHeader = document.querySelector('#fighter-choice-header');
var userWins = document.querySelector('#num-user-wins');
var computerWins = document.querySelector('#num-computer-wins')
var changeGameBtn = document.querySelector('#change-game-btn');

// // HOME VIEW

var gameButtons = document.querySelector('.game-buttons')
var classicGameBtn = document.querySelector('.classic-btn');
var difficultGameBtn = document.querySelector('#difficult-game-btn'); // do i need this if event handler is on gameButtons section?
var fighterDisplay = document.querySelector('.fighter-display');

/// REFACTOR THE BELOW TO DRY!! 👇👇👇 ////

// // CLASSIC GAME VIEW

var classicGameView = document.querySelector('.classic-fighters-view')
var birdFighter = document.querySelector('#bird');
var waterFighter = document.querySelector('#water');
var stoneFighter = document.querySelector('#stone');

// // DIFFICULT GAME VIEW

var difficultGameView = document.querySelector('.difficult-game-view');
var earthFighter = document.querySelector('#earth');
var waterFighter2 = document.querySelector('#water2')
var fireFighter = document.querySelector('#fire');
var airFighter = document.querySelector('#air');

//// EVENT LISTENERS /////

// Need to refactor to show event delegation with event.target but works for now 👇👇👇 maybe use event.target.parentElement === ???

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

changeGameBtn.addEventListener('click', function(){ 
  show(gameButtons)
  show(gameChoicePrompt)
  hide(difficultGameView) 
  hide(classicGameView)
  hide(fighterChoiceHeader)
  hide(changeGameBtn)
})

/// REFACTOR THE BELOW TO DRY!! 👇👇👇 ////

birdFighter.addEventListener('click', assignClassicUserChoice)
waterFighter.addEventListener('click', assignClassicUserChoice)
stoneFighter.addEventListener('click', assignClassicUserChoice)

earthFighter.addEventListener('click', assignDifficultUserChoice)
waterFighter2.addEventListener('click', assignDifficultUserChoice)
fireFighter.addEventListener('click', assignDifficultUserChoice)
airFighter.addEventListener('click', assignDifficultUserChoice)

// Game Functions

function createPlayer(name, token, wins=0){
  var player = {
    name: name, 
    token: token,
    wins
  }
  return player
}

function createGame(){
  computerPlayer = createPlayer("computer", " 💻 ", computerWins.innerText);
  userPlayer = createPlayer("human", " 👩‍🦱 ", userWins.innerText);
  game = {
    players: [userPlayer, computerPlayer],
    score: `user: ${userPlayer.wins}, computer: ${computerPlayer.wins}`, // I think this can be taken out.
  }
  players = game.players
  return game
}

function assignClassicUserChoice(event) {
  console.log(event.target.id)
  for (var i=0; i<classicGameChoices.length; i++){
    if (event.target.id === classicGameChoices[i].name) {
      userPlayer.fighter = classicGameChoices[i];
    }
  } determineComputerChoice();
}

function assignDifficultUserChoice(event) {
  console.log(event.target.id)
  for (var i=0; i<difficultGameChoices.length; i++) {
    if (event.target.id === difficultGameChoices[i].name) {
      userPlayer.fighter = difficultGameChoices[i]
    }
  } determineComputerChoice();
}

function determineComputerChoice(){
  if (game.gameType === 'classic'){ 
    var i = Math.floor(Math.random() * classicGameChoices.length)
    computerPlayer.fighter = classicGameChoices[i]
  } else {
    var i = Math.floor(Math.random() * difficultGameChoices.length);
    computerPlayer.fighter = difficultGameChoices[i]
  }
  detectDraw()
}

function showBattle(winner){
  hide(classicGameView)
  hide(difficultGameView)
  fighterDisplay.innerHTML = `${userPlayer.fighter.image} ${computerPlayer.fighter.image}`
  // if (winner = userPlayer){
  //   fighterDisplay.innerText = 'You win!'
  timeout();
}

// change the innerText of fighterHeader to: either: 'You Won!' || 'Computer Won!'  w/timeout ????
  // also need to invoke timeout() so that game board resets
//hide(fighterHeader ??)
//hide(difficultGameView) 
//hide(classicGameView)
// change innerHTML of results-display to have img of both userPlayer.fighter.image & computerPlayer.fighter.image

// function resetBoard()
// this function will reset the gameBoard after each round

// function beginNewGame()
//this function will have an event listener on the begin new game button


function detectDraw(){
  if (computerPlayer.fighter === userPlayer.fighter){
    fighterChoiceHeader.innerText = "It's a draw!"
    showBattle() 
  } else {
    determineWinner();
  }
}

function determineWinner(){
  var winner;
  if (userPlayer.fighter.defeats === computerPlayer.fighter.name){
    winner = userPlayer
    fighterChoiceHeader.innerText = "Human Wins!"
  } else {
    winner = computerPlayer
    fighterChoiceHeader.innerText = "Computer Wins!"
  } 
  showBattle()
  updateWins(winner)
}

function updateWins(winner){
  winner.wins++
  if (winner === userPlayer){
    userWins.innerText = `${userPlayer.wins}`
  } else {
    computerWins.innerText = `${computerPlayer.wins}`
  }
}

function timeout(){
  setTimeout(() => {
    fighterChoiceHeader.innerText = "Choose your fighter!", fighterDisplay.innerHTML = ""
  }, 2000)
}

function showGame(){
  hide(gameButtons)
  hide(gameChoicePrompt)
  show(fighterChoiceHeader)
  show(changeGameBtn)
  createGame()
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
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

// TO REFACTOR: go thgouh & see if I can pass any of the variables as parameters

// add reset game button & function
  // reset wins to zero
  // only display if score is > 0
      // if (userPlayer.wins || computerPlayer.wins > 0)
        // show(resetGameButton)
  // ok to have on main page as well

  // make userChoice buttons function

  // display the computerChoice image & the userChioce image
  // resetBoard? with timeout after each roundb