// MEMORY RULES AND OBJECTIVE
// User can click any of the blank memory card boxes, when that happens the card selected will be revealed and won't be interactable anymore until another card will be interacted with. IF the next card revealed is of the same TYPE (ID) then both cards will become not interactable until page is reloaded or reset button is pressed ELSE both cards will become blank again. WHEN all the copies have been discovered game ends, everytime a copy is not found a counter with an error number will be updated.

const memoryArray = [
  { id: 1, name: "alien", img: "../images/alien.png" },
  { id: 2, name: "bug", img: "../images/bug.png" },
  { id: 3, name: "duck", img: "../images/duck.png" },
  { id: 4, name: "rocket", img: "../images/rocket.png" },
  { id: 5, name: "spaceship", img: "../images/spaceship.png" },
  { id: 6, name: "tiktac", img: "../images/tiktac.png" },
];

let gridElement = document.getElementById("memory-cards-container");
let cardsArray = [];
let selectedCards = [];
let errorCounter = 0;

function idNumberGenerator() {
  return Math.floor(Math.random() * memoryArray.length);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function cardsArrayPopulator() {
  cardsArray = [];
  while (cardsArray.length < 12) {
    let idNumber = idNumberGenerator();
    let card = memoryArray[idNumber];
    if (cardsArray.filter((c) => c.id === card.id).length < 2) {
      cardsArray.push(card);
    }
  }
  cardsArray = shuffle(cardsArray);
}

function cardClickHandler(event) {
  const cardElement = event.target;
  if (cardElement.classList.contains("revealed") || selectedCards.length === 2)
    return;
  cardElement.classList.remove("blank");
  cardElement.classList.add("revealed");
  cardElement.style.backgroundImage = `url(${cardElement.getAttribute(
    "data-img"
  )})`;
  selectedCards.push(cardElement);

  if (selectedCards.length === 2) {
    const [firstCard, secondCard] = selectedCards;
    const firstCardId = firstCard.getAttribute("data-id");
    const secondCardId = secondCard.getAttribute("data-id");

    if (firstCardId === secondCardId) {
      selectedCards = [];
    } else {
      setTimeout(() => {
        firstCard.classList.add("blank");
        firstCard.classList.remove("revealed");
        firstCard.style.backgroundImage = 'url("../images/back.png")';
        secondCard.classList.add("blank");
        secondCard.classList.remove("revealed");
        secondCard.style.backgroundImage = 'url("../images/back.png")';
        selectedCards = [];
        errorCounter++;
        document.getElementById(
          "error-counter"
        ).textContent = `Errors: ${errorCounter}`;
      }, 1000);
    }
  }
}

function cardCreation() {
  cardsArrayPopulator();
  gridElement.replaceChildren();
  cardsArray.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "blank");
    cardElement.setAttribute("data-id", card.id);
    cardElement.setAttribute("data-img", card.img);
    cardElement.style.backgroundImage = 'url("../images/back.png")';
    cardElement.addEventListener("click", cardClickHandler);
    gridElement.appendChild(cardElement);
  });
}

document.getElementById("reset-button").addEventListener("click", () => {
  errorCounter = 0;
  document.getElementById(
    "error-counter"
  ).textContent = `Errors: ${errorCounter}`;
  cardCreation();
});

cardCreation();
