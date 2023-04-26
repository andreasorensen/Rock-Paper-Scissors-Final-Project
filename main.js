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

    ///////////// data model variables/////////////

var players = [];
var game;

      ////////  QUERY SELECTORS ////////////
var gameChoicePrompt = document.querySelector('#game-choice-header');
var fighterChoiceHeader = document.querySelector('#fighter-choice-header');
var userWins = document.querySelector('#num-user-wins');
var computerWins = document.querySelector('#num-computer-wins');

             /////// buttons ////////
var changeGameBtn = document.querySelector('#change-game-btn');
var resetScoreBtn = document.querySelector('#reset-score-btn');
var gameButtons = document.querySelector('.game-buttons')
var classicGameBtn = document.querySelector('#classic-game-btn');
var difficultGameBtn = document.querySelector('#difficult-game-btn');

              /////// views /////////
var fighterDisplay = document.querySelector('.fighter-display');
var classicGameView = document.querySelector('.classic')
var difficultGameView = document.querySelector('.difficult');
var gameView = document.querySelector('.game-view')

          //////// EVENT LISTENERS ////////
resetScoreBtn.addEventListener('click', resetPlayerWins);

difficultGameBtn.addEventListener('click', function(event) {
  showGame(event)
  updateGameType(event)
  show(difficultGameView)
});

changeGameBtn.addEventListener('click', function() { 
  show(gameButtons)
  show(gameChoicePrompt)
  hide(difficultGameView) 
  hide(classicGameView)
  hide(fighterChoiceHeader)
  hide(changeGameBtn)
});

gameView.addEventListener('click', function(event) {
  takeTurn(event)
});

classicGameBtn.addEventListener('click', function(event) {
  showGame()
  updateGameType(event)
  show(classicGameView)
});

          /////////// FUNCTIONS ////////////

function createPlayer(name, token, wins=0) {
  var player = {
    name: name, 
    token: token,
    wins
  }

  return player
}

function createGame() {
  var computerPlayer = createPlayer("Computer", " 💻 ", computerWins.innerText);
  var userPlayer = createPlayer("Human", " 👩‍🦱 ", userWins.innerText);
  game = {
    players: [userPlayer, computerPlayer],
  };

  players = game.players
  return game
}

function takeTurn(event) {
  if (event.target.parentElement.classList.contains('classic')) {
    assignClassicUserChoice(event)
  } else {
    assignDifficultUserChoice(event)
  }

  determineComputerChoice()
};

function assignClassicUserChoice(event) {
  for (var i=0; i<classicGameChoices.length; i++) {
    if (event.target.id === classicGameChoices[i].name) {
      players[0].fighter = classicGameChoices[i];
    }
  }
}

function assignDifficultUserChoice(event) {
  for (var i=0; i<difficultGameChoices.length; i++) {
    if (event.target.id === difficultGameChoices[i].name) {
      players[0].fighter = difficultGameChoices[i]
    }
  } 
}

function determineComputerChoice() {
  if (game.gameType === 'classic') { 
    var i = Math.floor(Math.random() * classicGameChoices.length)
    players[1].fighter = classicGameChoices[i]
  } else {
    var i = Math.floor(Math.random() * difficultGameChoices.length);
    players[1].fighter = difficultGameChoices[i]
  }

  detectDraw()
}

function showGame() {
  hide(gameButtons)
  hide(gameChoicePrompt)
  show(fighterChoiceHeader)
  show(changeGameBtn)
  createGame()
}

function showBattle() {
  hide(gameView)
  fighterDisplay.innerHTML = `${players[0].fighter.image} ${players[1].fighter.image}`
  timeout();
}

function detectDraw() {
  if (players[1].fighter === players[0].fighter) {
    announceDraw()
    showBattle() 
  } else {
    determineWinner();
  }

  hide(changeGameBtn)
}

function announceDraw() {
  fighterChoiceHeader.innerText = "It's a draw!"
}

function determineWinner() {
  var winner;
  if (players[0].fighter.defeats === players[1].fighter.name) {
    winner = players[0]
  } else {
    winner = players[1]
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
  if (winner === players[0]) {
    userWins.innerText = `${players[0].wins}`
  } else {
    computerWins.innerText = `${players[1].wins}`
  }

  showResetScoreBtn()
}

function timeout() {
  setTimeout(() => {
    fighterChoiceHeader.innerText = "Choose your fighter!", fighterDisplay.innerHTML = "", resetBoard()
  }, 2000)
}

function resetBoard() {
  show(gameView)
  show(changeGameBtn)
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
  if(players[0].wins || players[1].wins) {
    show(resetScoreBtn)
  }
}

function resetPlayerWins() {
  players[0].wins = 0
  players[1].wins = 0
  resetScoreBoard()
}

function resetScoreBoard() {
  userWins.innerText = `${players[0].wins}`
  computerWins.innerText = `${players[1].wins}`
  hide(resetScoreBtn)
}

