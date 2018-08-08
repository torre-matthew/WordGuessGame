let cakes = ["German Chocolate"];
let cakeToGuess = document.getElementById("caketext");
let numberOfWins = document.getElementById("wins");
let guessesLeft = document.getElementById("remainingguesses");
let usedLetters = document.getElementById("alreadyguessed");
let wins = 0;
let totalGuesses = 10;
let hideCake = "_ ";




let round = {
			cake: "German Chocolate",
	
	firstRound: function () {
		for (let i = 0; i < round.cake.length; i++) {
			let cakeChars = round.cake.charAt(i);
			let userGuess = event.key;
			cakeToGuess.textContent = "Type of Cake:  " + round.cake.replace(/\D+/g, hideCake.repeat(round.cake.length));
			console.log(cakeChars);
			console.log(round.cake.indexOf(userGuess));
			// console.log(chosenCake.replace(chosenCake.charAt(i), "_ "));
			
			// let chosenCakeChars = cakes[i].split(""); //Turn the cake string into an array
			// let chosenCakeDashDisplayLen = cakes[i].length; //Determine the number of - that we need to display
			// let chosenCakeDashDisplay = hideCake.repeat(chosenCakeDashDisplayLen); //Display the cake as dashes
			// let chosenCakeDashArr = hideCake.repeat(chosenCakeDashDisplayLen).split(""); //Dash Display as an array


			// console.log(chosenCakeChars);
			// console.log(chosenCakeDashDisplay);
			// console.log(chosenCakeDashArr);
			
			// console.log(chosenCakeChars.includes(userGuess));
			// let position = chosenCakeChars.indexOf(userGuess); 
			// console.log(position);
			// console.log(chosenCakeDashArr[position].replace("_ ", userGuess));

			// if (chosenCakeChars.includes(userGuess)) {
			// let position = chosenCakeChars.Indexof(userGuess);
				// console.log(position);
			// console.log(chosenCakeDashArr[position].replace("-",userGuess));

			// }
		}
	}
};
	
	document.onkeyup = function (event) {
			round.firstRound();
			
	}


	numberOfWins.textContent = "Wins: " + wins;
	guessesLeft.textContent = "Total Guesses: " + totalGuesses;

	 



		





//Check out Indexof() MDN Docs
// cakes = ["Carrot", "Chiffon", "Cheescake", "Red Velvet", "Tres Leches","German Chocolate"];