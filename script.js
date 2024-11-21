const menu = document.querySelector("#menu");
const description = document.querySelector("#descriptionMenu");


const startButton = document.querySelector("#startGameButton");
const descriptionButton = document.querySelector("#descriptionButton");
const closeDescriptionButton = document.querySelector("#closeDescription");

// Start button click handler
startButton.addEventListener("click", () => {
  const playerName = document.querySelector("#playerName").value;
  const difficulty = document.querySelector("#difficultySelect").value;
  if(playerName){
    console.log(`Starting game for ${playerName} with ${difficulty} difficulty`);
  }
});

// Description button click handler
descriptionButton.addEventListener("click", () => {
    menu.classList.add("hidden");
    description.classList.remove("hidden");
});

closeDescriptionButton.addEventListener("click", () => {
    menu.classList.remove("hidden");
    description.classList.add("hidden");
});



const easyMaps = [
  [
    [0, 1, 0, 2, 0],
    [1, 0, 0, 1, 3],
    [0, 2, 3, 0, 1],
    [2, 0, 1, 0, 0],
    [0, 1, 3, 2, 0]
  ]
];

const hardMaps = [
  [
    [0, 1, 0, 2, 0, 3, 1],
    [1, 0, 0, 1, 3, 2, 0],
    [0, 2, 3, 0, 1, 0, 1],
    [2, 0, 1, 0, 0, 3, 2],
    [0, 1, 3, 2, 0, 1, 0],
    [2, 0, 1, 3, 0, 1, 0],
    [0, 3, 2, 1, 0, 2, 3]
  ]
];

const tileTypes = {
  0: 'empty',
  1: 'mountain',
  2: 'bridge',
  3: 'oasis'
};

let playerName = '';
let timerInterval;
let secondsElapsed = 0;
let selectedMap = [];

// DOM Elements
const playerNameInput = document.getElementById("playerName");
const difficultySelect = document.getElementById("difficulty");
const playerNameDisplay = document.getElementById("playerNameDisplay");
const timeElapsedDisplay = document.getElementById("timeElapsed");
const gameBoard = document.getElementById("gameBoard");
const menuContainer = document.querySelector(".menu-container");
const gameArea = document.querySelector(".gameArea");

// Start Game Button Event
startButton.addEventListener("click", () => {
  playerName = playerNameInput.value;
  const difficulty = difficultySelect.value;

  if (!playerName) {
    alert("Please enter your name.");
    return;
  }

  // Hide menu and show game area
  menuContainer.style.display = "none";
  gameArea.style.display = "flex";
  playerNameDisplay.textContent = `Player: ${playerName}`;
  startTimer();

  // Select a random map based on difficulty
  selectedMap = difficulty === 'easy'
    ? easyMaps[Math.floor(Math.random() * easyMaps.length)]
    : hardMaps[Math.floor(Math.random() * hardMaps.length)];

  renderGameBoard();
});

// Timer Function
function startTimer() {
  secondsElapsed = 0;
  timerInterval = setInterval(() => {
    secondsElapsed++;
    timeElapsedDisplay.textContent = `Time: ${secondsElapsed}s`;
  }, 1000);
}

// Render Game Board
function renderGameBoard() {
  gameBoard.innerHTML = '';
  gameBoard.style.gridTemplateColumns = `repeat(${selectedMap[0].length}, 40px)`;
  selectedMap.forEach(row => {
    row.forEach(tile => {
      const cell = document.createElement('div');
      cell.classList.add(tileTypes[tile]);
      gameBoard.appendChild(cell);
    });
  });
}























// const showDescriptionButton = document.querySelector('#showDescription');
// const descriptionPopup = document.querySelector('#descriptionPopup');
// const closeDescriptionButton = document.querySelector('#closeDescription');

// showDescriptionButton.addEventListener('click', () => {
//     descriptionPopup.classList.remove('hidden');
//     menu.classList.add('hidden');
// });

// closeDescriptionButton.addEventListener('click', () => {
//     descriptionPopup.classList.add('hidden');
//     menu.classList.remove('hidden');
// });



// // script.js

// let gridSize = 5;
// let playerName = "";
// let gameGrid = [];
// let elapsedTime = 0;
// let timer;
// let selectedType = 'rail';

// // HTML Elements
// const menu = document.querySelector('#menu');
// const gameArea = document.querySelector('#gameArea');
// const gameGridElement = document.querySelector('#gameGrid');
// const playerDisplay = document.querySelector('#playerDisplay');
// const elapsedTimeElement = document.querySelector('#elapsedTime');
// const easyButton = document.querySelector('#easyButton');
// const hardButton = document.querySelector('#hardButton');
// const backToMenu = document.querySelector('#backToMenu');
// const startGameButton = document.querySelector('#startGameButton');
// const difficultySelect = document.querySelector('#difficultySelect');
// const playerNameInput = document.querySelector('#playerNameInput');

// // Initialize Event Listeners

// startGameButton.addEventListener('click', () => {
//     const playerName = playerNameInput.value.trim();
//     const difficulty = difficultySelect.value;

//     // Validation Check
//     if (!playerName) {
//         alert("Please enter your name before starting the game!");
//         return;
//     }

//     if (!difficulty) {
//         alert("Please select a difficulty level!");
//         return;
//     }

//     // Start the game with the selected difficulty
//     console.log(parseInt(difficulty));
//     startGame(parseInt(difficulty));
// });

// backToMenu.addEventListener('click', () => goToMenu());

// function initializeGrid() {
//     gameGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill('empty'));
//     gameGridElement.innerHTML = '';
//     gameGridElement.setAttribute('data-size', gridSize);

//     for (let row = 0; row < gridSize; row++) {
//         for (let col = 0; col < gridSize; col++) {
//             const cell = document.createElement('div');
//             cell.classList.add('cell');
//             cell.setAttribute('data-type', 'empty');
//             cell.style.backgroundImage = 'url("pics/tiles/empty.png")';
//             cell.style.backgroundSize = 'cover';
//             cell.addEventListener('click', () => placeTile(row, col));
//             gameGridElement.appendChild(cell);
//         }
//     }
// }

// function placeTile(row, col) {
//     gameGrid[row][col] = selectedType;
//     renderGrid();
// }

// function renderGrid() {
//     const cells = document.querySelectorAll('.cell');
//     let index = 0;
//     for (let row = 0; row < gridSize; row++) {
//         for (let col = 0; col < gridSize; col++) {
//             const cell = cells[index++];
//             cell.setAttribute('data-type', gameGrid[row][col]);
//             cell.style.backgroundImage = `url("pics/tiles/${gameGrid[row][col]}.png")`;
//         }
//     }
// }

// function goToMenu() {
//     gameArea.classList.add('hidden');
//     menu.classList.remove('hidden');
//     clearInterval(timer);
// }

// function startTimer() {
//     elapsedTime = 0;
//     timer = setInterval(() => {
//         elapsedTime++;
//         elapsedTimeElement.textContent = `${elapsedTime}s`;
//     }, 1000);
// }



