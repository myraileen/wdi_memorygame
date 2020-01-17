console.log("Up and running!");

//create array varables to store cards available and cards in play
let cards = ["queen","queen","king","king"];
let cardsInPlay = [];

//function to check for matching cards in play
function checkForMatch () {
	  if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

//flip card function
function flipCard (cardId) {
	cardsInPlay.push(cards[cardId])
	console.log("User flipped " + cards[cardId] + ".")
    checkForMatch();

	//variable for first card the user picks
	//let cardOne = cards[0];
	//add first card picked to cards in play array
	//cardsInPlay.push(cardOne);

}

flipCard(0);
flipCard(3);
	


