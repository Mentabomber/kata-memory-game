// ARRAY OF OBJECTS CONTAINING MEMORY CARDS WITH ID - NAME - IMG
const memoryArray = [
  {
    id: 1,
    name: "alien",
    img: "../images/alien.png",
  },
  {
    id: 2,
    name: "bug",
    img: "../images/bug.png",
  },
  {
    id: 3,
    name: "duck",
    img: "../images/duck.png",
  },
  {
    id: 4,
    name: "rocket",
    img: "../images/rocket.png",
  },
  {
    id: 5,
    name: "spaceship",
    img: "../images/spaceship.png",
  },
  {
    id: 6,
    name: "tiktac",
    img: "../images/tiktac.png",
  },
];
// MEMORY RULES AND OBJECTIVE
// User can click any of the blank memory card boxes, when that happens the card selected will be revealed and won't be interactable anymore until another card will be interacted with. IF the next card revealed is of the same TYPE (ID) then both cards will become not interactable until page is reloaded or reset button is pressed ELSE both cards will become blank again. WHEN all the copies have been discovered game ends, everytime a copy is not found a counter with an error number will be updated.

// funzione
// crea 12 box
// box devi aver div dentro con un elemento preso a random dall'array de oggetti che go crea sorae non pol aver uno de quei elementi se ge ne se stai za creadi due de quel tipo el div inoltre devi aver la classe blank che no me fa veder che tipo se fin che no lo clicko

let gridElement = document.getElementById("memory-cards-container");

// ARRAY that takes care of the cards that are being generated and prevents the repetition of a type more than twice
const cardsArray = [];

let index, errorCounter;

// const playButton = document.getElementById("button-play");

function idNumberGenerator() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(memoryArray.length + 1);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
// Function that counts how many times any value is found in an array
function countInArray(array, what) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === what) {
      count++;
    }
  }
  return count;
}
// Function that populates the array of cards
function cardsArrayPopulator() {
  let idNumber;
  while (cardsArray.length < 12) {
    idNumber = idNumberGenerator();
    // IF cardsArray has 2 or more elements of the same type generate another card number to push inside the array
    if (!(countInArray(cardsArray, idNumber) >= 2)) {
      cardsArray.push(idNumber);
    }
  }
}

function cardCreation() {
  cardsArrayPopulator();

  gridElement.replaceChildren();

  for (let i = 0; i < cardsArray.length; i++) {
    gridElement.append(cardsArray[i]);
  }
}

cardCreation();

// function boxCreation(elementType, className) {
//   const newElement = document.createElement(elementType);

//   newElement.classList.add(className);

//   return newElement;
// }

// const playButton = document.getElementById("button-play");

// playButton.addEventListener("click", function () {
//   gridElement.replaceChildren();

//   const boxes = 12;

//   for (let i = 0; i < boxes.length; i++) {
//     gridElement.append(boxes[i]);
//   }
// });

// function createGrid(boxNum, gridStyle) {
//   const boxes = [];

//   let score = 0;

//   let listBombs = createArray(16);

//   console.log(listBombs);

//   for (let i = 0; i < boxNum; i++) {
//     let newBox = boxCreation("div", gridStyle);

//     const newSpan = document.createElement("span");

//     newBox.append(newSpan);
//     // console.log(createArray(index));

//     newSpan.append(i + 1);

//     console.log(parseInt(newSpan.innerHTML));

//     let actualScore = document.getElementById("score");

//     newBox.addEventListener(
//       "click",

//       function () {
//         console.log(boxNum);
//         console.log(parseInt(newSpan.innerHTML));

//         let controlloBox = document.querySelectorAll(
//           "div.easy-grid-box span, div.hard-grid-box span, div.very-hard-grid-box span"
//         );
//         console.log(controlloBox);

//         // for(let i = 0; i < boxNum; i++){
//         if (listBombs.includes(parseInt(newSpan.innerHTML))) {
//           newBox.classList.add("bomb-box");
//           for (let i = 0; i < boxNum; i++) {
//             // if (parseInt(controlloBox[i].innerHTML) == parseInt(listBombs[index])){
//             //     newBox.classList.add("bomb-box");
//             //     index++;
//             //     i = 0;
//             // }
//             if (listBombs.includes(i + 1)) {
//               controlloBox[i].parentElement.classList.add("bomb-box");
//               console.log(listBombs);
//             }
//             // console.log(i);
//             // console.log(index);
//           }

//           alert("hai perso! il tuo score è: " + score);
//           score = 0;
//           // gridElement.innerHTML = "";
//         } else if (score == boxes.length - listBombs.length - 1) {
//           score = score + 1;
//           alert("hai vinto complimenti!");
//           score = 0;
//           gridElement.innerHTML = "";
//         } else {
//           newBox.classList.add("flower-box");
//           score = score + 1;
//           // console.log(score);
//         }

//         actualScore.innerHTML = `il tuo score attuale è :${score}`;

//         // console.log(i + 1);
//       }
//       // }
//     );
//     boxes.push(newBox);
//   }
//   return boxes;
// }
