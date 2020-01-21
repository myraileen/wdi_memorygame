console.log("Up and running!");

//create array varables to store cards available and cards in play
let cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png',

},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png',

},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png',

},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png',

}
];

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
function flipCard () {
	let cardId = this.getAttribute('data-id');
	let card = cards[cardId];
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank + ".");
	console.log("User flipped " + cards[cardId].cardImage + ".");
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit + ".")
    if (cardsInPlay.length === 2) {
    	checkForMatch();
       }
    }

	//variable for first card the user picks
	//let cardOne = cards[0];
	//add first card picked to cards in play array
	//cardsInPlay.push(cardOne);



//create gameboard
function createBoard () {
	for (let i = 0; i < cards.length; i++ ) {
     let cardElement = document.createElement("img");
     cardElement.setAttribute('src','images/back.png');
     cardElement.setAttribute('data-id',i);
     cardElement.addEventListener('click',flipCard);
     let gameboard = document.getElementById("game-board");
     gameboard.appendChild(cardElement);
	}
}

createBoard();
	



