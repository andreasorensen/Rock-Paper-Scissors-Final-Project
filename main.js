var classicGameChoices = ['stone', 'water', 'bird'];
var difficultGameChoices = ['earth', 'air', 'fire', 'water'];
var player;

var classicGameBtn = document.querySelector('#classic-game-btn');
var difficultGameBtn = document.querySelector('#difficult-game-btn');

classicGameBtn.addEventListener(function(event){
  changeViewClassic();

});


function createPlayer(name, token, wins=0){
  player = {
    name: name, 
    token: token,
    wins
  }
} return player

function createGame(){
  
}