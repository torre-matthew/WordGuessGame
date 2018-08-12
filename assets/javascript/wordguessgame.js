// =========================================Global Variables=============================================================================


let cakes = ["CARROT", "CHIFFON", "CHEESECAKE", "RED VELVET", "TRES LECHES","GERMAN CHOCOLATE"];
let cakesDashDisplay = [];
let indexNum = Math.floor(Math.random() * cakes.length);
let guesser = cakes[indexNum].split("");
let rightCake = [];
let wrongCake = [];
let spaces = guesser.length;
let cakeToGuess = document.getElementById("caketext");
let numberOfWins = document.getElementById("wins");
let guessesLeft = document.getElementById("remainingguesses");
let usedLetters = document.getElementById("alreadyguessed");
let wins = 0;
let totalGuesses = 10;
let hideCake = "_";





// ========================= Objects/Methods/Functions==================================================================================

// function that prints the games starting position to the screen.
function startGame () {
	numberOfWins.textContent = "Wins: " + wins;
	guessesLeft.textContent = "Total Guesses: " + totalGuesses;
	for (let i = 0; i < spaces; i++){
		cakesDashDisplay.push("_");
	}
	//Display the dashes of the cake that the user will be guessing
	cakeToGuess.textContent = cakesDashDisplay.join(" ");
}
// Does the userGuess exist in the cake that is bieng guessed?
function match () {

	
}
// Determine if the users typed letter exists in the chosen cake. 
// Display the correctly guessed letter in place of the apporiate dashes.
// Fuction to start the game over in a winning scenario.
// Function to start the game over in a losing scenario. 


// ==========================================================Calls==================================================================

startGame();
console.log(guesser);

	document.onkeyup = function (event) {

	let userGuess = event.key;

	
// If the typed letter exists in the guesser cake array replace the _ in the dashdisplay array with the letter in the appropriate spots.
		if (guesser.indexOf(userGuess.toUpperCase()) != -1){
			cakesDashDisplay[guesser.indexOf(userGuess.toUpperCase())] = userGuess.toUpperCase();
			rightCake.push(userGuess);
			console.log(cakesDashDisplay);
			console.log(guesser.includes(userGuess.toUpperCase()));

			for (let j = 0; j < guesser.length; j++) {
				console.log(guesser.indexOf(userGuess.toUpperCase()));
			}
	
		}else {
			wrongCake.push(userGuess);
		}

		if (cakesDashDisplay === guesser) {
			alert("Yessir, you've got it!!!");
		}

	

	}


	

	 



		





//Check out Indexof() MDN Docs