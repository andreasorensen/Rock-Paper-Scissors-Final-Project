var classicGameChoices = ['stone', 'water', 'bird'];
var difficultGameChoices = ['earth', 'air', 'fire', 'water'];

// data model variables:
var players = [];
var userPlayer;
var computerPlayer;
var newGame;


var classicGameBtn = document.querySelector('#classic-game-btn');
var difficultGameBtn = document.querySelector('#difficult-game-btn');

classicGameBtn.addEventListener(function(event){

    // createPlayer()

});


function createPlayer(name, token, wins=0){
  player = {
    name: name, 
    token: token,
    wins
  }
} return player

function createGame(userPlayer, computerPlayer, currentGameType){
  newGame = {
    players: [userPlayer, computerPlayer],
    score: [userPlayer.wins, computerPlayer.wins],
    // is the above line ?? necessary ??
    gameType: currentGameType
  }
  return game
}

