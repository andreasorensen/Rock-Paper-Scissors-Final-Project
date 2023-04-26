# Rock-Paper-Scissors-Final-Project

DESCRIPTION:

  I developed an app where a user can play two variations of rock, paper, scissors against the computer. The first is a Mylasian version, called Bird, Stone, Water. The second version plays using four different elements. The user is able to choose which game they'd like to play, click that option, then is taken to the game board of their choice. There they make their fighter selection, from the provided images. The computer makes a random choice, then both fighters are displayed & the winner/draw is announced & the score board is updated. The user can reset the scoreboard to begin a new game by clicking a button. 

MOTIVATION:

  I created this project to demonstrate what I've learned in Mod1 at Turing & to move on to Mod2!
  My goals were to demonstrate an understanding of DRY JavaScript that follows SRP as well as event delegation, which I showed on the fighters.
  I wanted to show that I understand the difference between the datamodel and the DOM, which I've done by updating my datamodel first. I built a working version of the app, verified by using my terminal, before I began making it dynamic & playable. 

BUILD STATUS: 

  The project is currently complete & bug free. (See future features)

CODE STYLE:

  I used Turing's recommended styling guide for HTML, CSS & JavaScript. It is standard.

GIF:
![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/125161431/234710196-6c397a7f-e1b9-4bb2-b6bd-3505de5e04ef.gif)


TECH/FRAMEWORK USED: 

  Written using vanilla JavaScript, HTML & CSS.

CODE ARCHITECTURE:

  Consists of (x1) main.js, index.HTML & styles.CSS files. There is also an assests folder for the fighter images, as well as a PR template.

  For the data model there is a createPlayer function that returns two player objects, which tracks each player's stats. This includes their name, token & number of wins. There is also a createGame function that is used to return the players objects, tracks game board data, & the selected game type, "classic" or "difficult".

  There are functions to check wins, change the score board, begin new game, detect a draw & determine winner. 

FEATURES:

  Features buttons for choosing the games, changin the game & resetting the game. Features a lovely pink background and very cool images. 😁

  FUTURE FEATURES: I'd like to add music in the future as well as some animations for the battle.

INSTALLATION:

  https://github.com/andreasorensen/Rock-Paper-Scissors-Final-Project.git
  git@github.com:andreasorensen/Rock-Paper-Scissors-Final-Project.git

  Fork & clone!

CONTRIBUTE: 

  I'd love to hear any suggestions for future features!
