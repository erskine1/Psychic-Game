// Psychic Game
// Picks a letter, and user tries to guess the letter
// Global variables
var wins = 0;
var losses = 0;
var lives = 9;
var guessArray = [];


// Function for updating wins, losses, and lives
function updateStats() {
  document.querySelector("#wins").innerHTML = "Wins: " + wins;
  document.querySelector("#losses").innerHTML = "Losses: " + losses;
  document.querySelector("#lives").innerHTML = "Lives: " + lives;
  document.querySelector("#guesses").innerHTML = "Your guesses: " + guessArray.join(', ');
};

// When a player loses a round, reset lives to 9
function endRound() {
  lives = 9;
  guessArray = [];
};

var answer = String.fromCharCode(97+Math.floor(Math.random() * 26));

updateStats();

document.onkeyup = function (event) {
  // Variable for user key events
  var guess = event.key;

  // Function for generating a new value for answer
  function newLetter() {
  answer = String.fromCharCode(97+Math.floor(Math.random() * 26));
};

  // for (var i = 0; i < guessArray.length; i++) {
    
  // }

  // var noRepeat = function (guessArray, guess) {

  // }

  // checks user guesses against the guess array to prevent repeat guesses
  var noRepeat = guessArray.indexOf(guess); 

  
  if (guess >= "a" && guess <= "z" && lives > 1 && noRepeat < 0) {
    if (guess === answer) {
      wins++;
      endRound();
      updateStats();
      newLetter();
      console.log("guess: " + guess, "answer: " + answer)
    }
    else {
      lives--;
      guessArray.push(guess);
      updateStats();
      console.log("guess: " + guess, "answer: " + answer)
    }
  
  }

  else if (guess >= "a" && guess <= "z" && lives === 1 && noRepeat < 0) {
    if (guess === answer) {
      wins++;
      endRound();
      updateStats();
      newLetter();
      console.log("guess: " + guess, "answer: " + answer)
    }
    else {
      losses++;
      endRound();
      updateStats();
      newLetter();
      console.log("guess: " + guess, "answer: " + answer)
    }
  }

};