let cards;
let sum;
let message;
let isAlive = false;
let hasBlackJack = false;

let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message");

function getRandomNumber() {
    return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Wanna pick a new card from the deck";
    } else if (sum === 21) {
        message = "Wohoo! You've got the blackjack";
        hasBlackJack = true;
    } else {
        message = "You are out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && sum < 21) {
        let thirdCard = getRandomNumber();
        cards.push(thirdCard);
        sum += thirdCard;
        renderGame();
    }
}