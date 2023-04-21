var classicGameChoices = ['stone', 'water', 'bird'];
var difficultGameChoices = ['earth', 'air', 'fire', 'water'];

// // data model variables:
var players = [];
var computerPlayer;
var userPlayer;
// var gameType = game.gameType
var game = createGame()  //create function that changes "gameType" to "currentSelection" based on what button the user chooses.(beginGame)

var userChoice; //Do i need this variable?
var computerChoice; // do I need this variable?


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
  computerPlayer = createPlayer("computer", " 💻 ");
  userPlayer = createPlayer("human", " 👩‍🦱 ");
  game = {
    players: [userPlayer, computerPlayer],
    score: `user: ${userPlayer.wins}, computer: ${computerPlayer.wins}`,
    // gameType // way to track game type -- function that determines which event.target is pushed, then update game.gameType
  }
  players = game.players
  return game
}





// function beginGame(){
//   computerChoice = 
// }


// function checkWins(){}; // check game board for current wins -- use this function to updateWins() ?? Or are these two the same thing? 
// function updateWins(){}; // update the newGame.score[i], based on winner

// function handlePlayersChoice(){};
// function determineComputerChoice(){};
// function displayGameResult(){};


// GAME ONLY PSEUDOCODE: 

// determine 






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


// 2. CLASSIC VIEW: 

    // playClassicGame(){}
      // need to be able to choose from the 3 options, then hide the rest, while at the same time displaying userChoice & computerChoice

// 3. DIFFICULT VIEW -- basically the same as above but with 4 options 
    // is there a way I can use the same functions to determine the computer chocie as well as determine the winner?