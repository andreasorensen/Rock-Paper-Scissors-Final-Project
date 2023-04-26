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

// keep fighterChoiceHeader - change name to gamePrompt
// change innerText of newGamePrompt anytime gameChoicePrompt is being shown/hidden
// replace fighterChoiceHeader with gameChoicePrompt

var userWins = document.querySelector('#num-user-wins');
var computerWins = document.querySelector('#num-computer-wins')

/////// buttons ////////
var changeGameBtn = document.querySelector('#change-game-btn');
var resetScoreBtn = document.querySelector('#reset-score-btn')
var gameButtons = document.querySelector('.game-buttons')
var classicGameBtn = document.querySelector('#classic-game-btn');
var difficultGameBtn = document.querySelector('#difficult-game-btn'); // do i need this if event handler is on gameButtons section?

/////// views /////////
var fighterDisplay = document.querySelector('.fighter-display');
var classicGameView = document.querySelector('.classic')
var difficultGameView = document.querySelector('.difficult');
var gameView = document.querySelector('.game-view')


//// EVENT LISTENERS /////

resetScoreBtn.addEventListener('click', resetPlayerWins)

difficultGameBtn.addEventListener('click', function(event) {
  showGame(event)
  updateGameType(event)
  show(difficultGameView)
})

classicGameBtn.addEventListener('click', function(event) {
  showGame(event)
  updateGameType(event)
  show(classicGameView)
})

// gameButtons.addEventListener('click', function(event) {
//   showGame(event)
//   updateGameType(event)
//   if (event.target.closest('button').className.includes('classic')) {
//     show(classicGameView)
//   } else {
//     show(difficultGameView)
//   }
// })


changeGameBtn.addEventListener('click', function() { 
  show(gameButtons)
  show(gameChoicePrompt)
  hide(difficultGameView) 
  hide(classicGameView)
  hide(fighterChoiceHeader)
  hide(changeGameBtn)
})

gameView.addEventListener('click', function(event) {
  if (event.target.parentElement.classList.contains('classic')) {
    assignClassicUserChoice(event)
  } else {
    assignDifficultUserChoice(event)
  }
})

////// Game Functions ///////

function createPlayer(name, token, wins=0) {
  var player = {
    name: name, 
    token: token,
    wins
  }

  return player
}

function createGame() {
  computerPlayer = createPlayer("Computer", " 💻 ", computerWins.innerText);
  userPlayer = createPlayer("Human", " 👩‍🦱 ", userWins.innerText);
  game = {
    players: [userPlayer, computerPlayer],
  };

  players = game.players
  return game
}

function assignClassicUserChoice(event) {
  for (var i=0; i<classicGameChoices.length; i++) {
    if (event.target.id === classicGameChoices[i].name) {
      userPlayer.fighter = classicGameChoices[i];
    }
  };

  determineComputerChoice();
}

function assignDifficultUserChoice(event) {
  for (var i=0; i<difficultGameChoices.length; i++) {
    if (event.target.id === difficultGameChoices[i].name) {
      userPlayer.fighter = difficultGameChoices[i]
    }
  } determineComputerChoice();
}

function determineComputerChoice() {
  if (game.gameType === 'classic') { 
    var i = Math.floor(Math.random() * classicGameChoices.length)
    computerPlayer.fighter = classicGameChoices[i]
  } else {
    var i = Math.floor(Math.random() * difficultGameChoices.length);
    computerPlayer.fighter = difficultGameChoices[i]
  }
  detectDraw()
}

function showBattle() {
  if (game.gameType === 'classic') {
    hide(classicGameView)
  } else {
    hide(difficultGameView)
  }
  fighterDisplay.innerHTML = `${userPlayer.fighter.image} ${computerPlayer.fighter.image}`
  timeout();
}

function detectDraw() {
  if (computerPlayer.fighter === userPlayer.fighter) {
    fighterChoiceHeader.innerText = "It's a draw!"
    showBattle() 
  } else {
    determineWinner();
  }
  hide(changeGameBtn)
}

function determineWinner() {
  var winner;
  if (userPlayer.fighter.defeats === computerPlayer.fighter.name) {
    winner = userPlayer
  } else {
    winner = computerPlayer
  } 

  announceWinner(winner)
  showBattle()
  updateWins(winner)
}

function announceWinner(winner) {
  fighterChoiceHeader.innerHTML = `${winner.name} Wins!`
}

function updateWins(winner) {
  winner.wins++
  updateScoreBoard(winner)
}

function updateScoreBoard(winner) {
  if (winner === userPlayer) {
    userWins.innerText = `${userPlayer.wins}`
  } else {
    computerWins.innerText = `${computerPlayer.wins}`
  }

  showResetScoreBtn()
}

function timeout() {
  setTimeout(() => {
    fighterChoiceHeader.innerText = "Choose your fighter!", fighterDisplay.innerHTML = "", resetBoard()
  }, 2000)
}

function resetBoard() {
  if (game.gameType === 'classic') {
    show(classicGameView)
  } 
  else if (game.gameType === 'difficult') {
    show(difficultGameView)
  }

  show(changeGameBtn)
}

function showGame() {
  hide(gameButtons)
  hide(gameChoicePrompt) /// can get rid of this HTML change ... instead have anohter function to update Banner
  show(fighterChoiceHeader) /// can get rid of this HTML change ...
  show(changeGameBtn)
  createGame()
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
}

function updateGameType(event) {
  if (event.currentTarget === classicGameBtn) {
    game.gameType = 'classic'
  } else {
    game.gameType = 'difficult'
  }

  return game
}

function showResetScoreBtn() {
  if(userPlayer.wins || computerPlayer.wins) {
    show(resetScoreBtn)
  }
}

function resetPlayerWins() {
  userPlayer.wins = 0
  computerPlayer.wins = 0
  resetScoreBoard()
}

function resetScoreBoard() {
  userWins.innerText = `${userPlayer.wins}`
  computerWins.innerText = `${computerPlayer.wins}`
  hide(resetScoreBtn)
}


// function changeBanner(event) {
//   if (event.target.classList.contains)
// }

//if i could pass element as parameter?