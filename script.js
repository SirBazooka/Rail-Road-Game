const easyMaps = [
  [
    ['E', 'M', 'E', 'E', 'O'],
    ['E', 'E', 'E', 'B', 'O'],
    ['B', 'E', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'O', 'E'],
    ['E', 'E', 'M', 'E', 'E'],
  ],
  [
    ['O', 'E', 'B', 'E', 'E'],
    ['E', 'M', 'E', 'E', 'M'],
    ['B', 'O', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'O', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
  ],
  [
    ['E', 'E', 'B', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'B'],
    ['E', 'M', 'B', 'E', 'E'],
    ['E', 'O', 'E', 'E', 'E'],
    ['E', 'B', 'E', 'E', 'M'],
  ],
  [
    ['E', 'E', 'E', 'B', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
    ['B', 'E', 'M', 'E', 'M'],
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'O', 'M', 'E'],
  ],
  [
    ['E', 'E', 'B', 'E', 'E'],
    ['E', 'M', 'E', 'E', 'E'],
    ['B', 'E', 'E', 'M', 'E'],
    ['E', 'E', 'B', 'O', 'E'],
    ['E', 'M', 'E', 'E', 'E'],
  ],
];

function getRandomEasyMap() {
  const randomIndex = Math.floor(Math.random() * easyMaps.length);
  return easyMaps[randomIndex];
}

const hardMaps = [
  [
    ['E', 'M', 'O', 'O', 'E', 'B', 'E'],
    ['B', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'B', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'M', 'E', 'E', 'E'],
    ['M', 'E', 'M', 'E', 'B', 'E', 'O'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'B', 'E', 'E', 'E'],
  ],
  [
    ['E', 'E', 'O', 'E', 'E', 'E', 'E'],
    ['B', 'E', 'B', 'E', 'E', 'M', 'E'],
    ['E', 'E', 'B', 'E', 'E', 'E', 'B'],
    ['M', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'O', 'E', 'M', 'E', 'E', 'E'],
    ['E', 'M', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'O', 'E', 'E', 'E', 'E'],
  ],
  [
    ['E', 'E', 'B', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'B'],
    ['O', 'E', 'M', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'O', 'M', 'E', 'B', 'E', 'E'],
    ['B', 'E', 'E', 'E', 'E', 'M', 'E'],
    ['E', 'E', 'O', 'M', 'E', 'E', 'E'],
  ],
  [
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'B', 'E', 'M', 'E'],
    ['E', 'E', 'M', 'E', 'E', 'E', 'E'],
    ['E', 'B', 'E', 'O', 'E', 'B', 'E'],
    ['E', 'E', 'M', 'E', 'M', 'E', 'E'],
    ['B', 'E', 'E', 'E', 'E', 'M', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
  ],
  [
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'M', 'E'],
    ['E', 'B', 'B', 'E', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'E', 'O', 'E', 'E'],
    ['E', 'M', 'E', 'B', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'M', 'E'],
  ]
];

function getRandomHardMap() {
  const randomIndex = Math.floor(Math.random() * hardMaps.length);
  return hardMaps[randomIndex];
}

let timerInterval;
let elapsedTime = 0;
let gridMap = [];

const mainMenu = document.querySelector("#main-menu");
const gamePage = document.querySelector("#game-page");
const gameGrid = document.querySelector("#game-grid");
const displayName = document.querySelector("#display-name");
const timeElapsed = document.querySelector("#time-elapsed");
const playerNameInput = document.querySelector("#player-name");
const difficultySelect = document.querySelector("#difficulty");
const startGameBtn = document.querySelector("#start-game-btn");
const backToMenuBtn = document.querySelector("#back-to-menu-btn");
const gameDescriptionBtn = document.querySelector("#game-description-btn");
const descriptionPopup = document.querySelector("#description-popup");
const closeDescriptionBtn = document.querySelector("#close-description-btn");
const leaderboardBtn = document.querySelector("#leaderboard-btn");
const leaderboardPopup = document.querySelector("#leaderboard-popup");
const closeLeaderboardBtn = document.querySelector("#close-leaderboard-btn");

startGameBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  const difficulty = difficultySelect.value;

  if (playerName) {
        // Setup game
      displayName.textContent = playerName;
      initializeGame(difficulty);
      showPage(gamePage);

      // Start Timer
      elapsedTime = 0;
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
          elapsedTime++;
          timeElapsed.textContent = `${elapsedTime}s`;
      }, 1000);
  } else {
    console.log("Please enter your name");
  }

  
});

backToMenuBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  showPage(mainMenu);
});


function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => p.classList.add("hidden"));
  page.classList.remove("hidden");
}


function initializeGame(difficulty) {
  console.log(`Initializing game with difficulty: ${difficulty}`);
  const map = (difficulty === 'easy') ? getRandomEasyMap() : getRandomHardMap();
  const gridSize = map.length;
  gridMap = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));
  gameGrid.style.gridTemplateColumns = `repeat(${gridSize}, 40px)`;
  gameGrid.innerHTML = '';

  map.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add("grid-cell");
      cellDiv.dataset.row = rowIndex;
      cellDiv.dataset.col = colIndex;
      
      if (cell === 'M') {
        let exits = { up: false, down: false, left: false, right: false};
        gridMap[rowIndex][colIndex] = new Cell('M', exits);
        cellDiv.classList.add("cell-mountain");
      } else if (cell === 'B') {
        // Bridge has exits in all directions
        let exits = { up: true, down: true, left: false, right: false };
        gridMap[rowIndex][colIndex] = new Cell('B', exits);
        cellDiv.classList.add("cell-bridge");
      } else if (cell === 'O') {
        // Oasis has exits in some directions
        let exits = { up: true, down: true, left: true, right: true };
        gridMap[rowIndex][colIndex] = new Cell('O', exits);
        cellDiv.classList.add("cell-oasis");
      } else if (cell === 'E') {
        let exits = { up: false, down: false, left: false, right: false};
        gridMap[rowIndex][colIndex] = new Cell('E', exits);
        cellDiv.classList.add("cell-empty");
      }

      gameGrid.appendChild(cellDiv);
    });
  });
}


gameDescriptionBtn.addEventListener("click", () => {
  showPage(descriptionPopup);
});

closeDescriptionBtn.addEventListener("click", () => {
  showPage(mainMenu);
});


leaderboardBtn.addEventListener("click", () => {
  const leaderboardListMenu = document.querySelector("#leaderboard-list-menu");
  leaderboardListMenu.innerHTML = '';


  leaderboard.forEach((entry) => {
    if(entry.name !== undefined){
      const listItem = document.createElement('li');
      const txt = document.createTextNode(`${entry.name} - ${entry.time} seconds`);
      listItem.appendChild(txt);
      leaderboardListMenu.appendChild(listItem);
    }
  });
  showPage(leaderboardPopup);
});

closeLeaderboardBtn.addEventListener("click", () => {
  showPage(mainMenu);
});




let selectedTile = null;
const railTilePalette = document.querySelector("#rail-tile-palette");
railTilePalette.addEventListener("click", (event) => {
  if (event.target.classList.contains("rail-tile")) {
    const elems = document.querySelectorAll(".rail-tile");
    [].forEach.call(elems, function(el) {
      el.classList.remove("rail-tile-active");
    });
    selectedTile = event.target.dataset.tile;
    event.target.classList.add("rail-tile-active");
    console.log(`Selected tile: ${selectedTile}`);
  }
});

gameGrid.addEventListener("click", (event) => {
  if (selectedTile && event.target.classList.contains("grid-cell")) {
    if (event.target.classList.contains("cell-oasis")) {
      return;
    }
    else if (event.target.classList.contains("cell-empty")) {
      if(selectedTile === 'R') {
        event.target.classList.remove("cell-empty");
        event.target.classList.add("cell-straight-rail");
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);
        gridMap[row][col].updateExits({ up: true, down: true, left: false, right: false });
      } else if(selectedTile === 'C') {
        event.target.classList.remove("cell-empty");
        event.target.classList.add("cell-curve-rail");
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);
        gridMap[row][col].updateExits({ up: false, down: true, left: false, right:true });
      } else {
        return;
      }
    }

    else if (event.target.classList.contains("cell-bridge")) {
      if(selectedTile === 'R') {
        event.target.classList.remove("cell-bridge");
        event.target.classList.add("cell-bridge-rail");
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);
        gridMap[row][col].updateExits({ up: true, down: true, left: false, right:false });
      } else {
        return;
      }
    }
    
    
    else if (event.target.classList.contains("cell-mountain")) {
      if(selectedTile === 'C') {
        event.target.classList.remove("cell-mountain");
        event.target.classList.add("cell-mountain-rail");
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);
        gridMap[row][col].updateExits({ up: false, down: true, left: false, right:true });
      } else {
        return;
      }
    }
    
    else if (event.target.classList.contains("cell-straight-rail")){
      if(selectedTile === 'C') {
        event.target.classList.remove("cell-straight-rail");
        event.target.classList.add("cell-curve-rail");
        event.target.style.transform = `rotate(0deg)`;
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);
        gridMap[row][col].updateExits({ up: false, down: true, left: false, right:true });
      }
    }
    else if (event.target.classList.contains("cell-curve-rail")){
      if(selectedTile === 'R') {
        event.target.classList.remove("cell-curve-rail");
        event.target.classList.add("cell-straight-rail");
        event.target.style.transform = `rotate(0deg)`;
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);
        gridMap[row][col].updateExits({ up: true, down: true, left: false, right:false });
      }
    }
  }
  checkGameCompletion(elapsedTime);
});


gameGrid.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("cell-straight-rail") || event.target.classList.contains("cell-curve-rail")) {
    let currentRotation = event.target.dataset.rotation ? parseInt(event.target.dataset.rotation) : 0;
    currentRotation = (currentRotation - 90) % 360;
    event.target.style.transform = `rotate(${currentRotation}deg)`;
    event.target.dataset.rotation = currentRotation;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    gridMap[row][col].rotate();
  } else if (event.target.classList.contains("cell-mountain-rail")) {
    let currentRotation = event.target.dataset.rotation ? parseInt(event.target.dataset.rotation) : 0;
    currentRotation = (currentRotation - 90) % 360;
    event.target.style.transform = `rotate(${currentRotation}deg)`;
    event.target.dataset.rotation = currentRotation;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    gridMap[row][col].rotate();
  } else if (event.target.classList.contains("cell-bridge-rail")) {
    let currentRotation = event.target.dataset.rotation ? parseInt(event.target.dataset.rotation) : 0;
    currentRotation = (currentRotation - 90) % 360;
    event.target.style.transform = `rotate(${currentRotation}deg)`;
    event.target.dataset.rotation = currentRotation;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    gridMap[row][col].rotate();
  }
  checkGameCompletion(elapsedTime);

});


class Cell {
  constructor(type, exits = { up: false, down: false, left: false, right: false }) {
    this.type = type; 
    this.exits = exits; 
  }

  rotate() {
    const newExits = {
      up: this.exits.right,
      down: this.exits.left,
      left: this.exits.up,
      right: this.exits.down,
    };
    this.exits = newExits;
  }

  updateExits(newExits) {
    this.exits = newExits;
  }
}


function printall(gridMap) {
  for (let row = 0; row < gridMap.length; row++) {
    let rowStr = '';
    for (let col = 0; col < gridMap[row].length; col++) {
      const cell = gridMap[row][col];
      if (cell) {
        const exits = `up: ${cell.exits.up}, down: ${cell.exits.down}, left: ${cell.exits.left}, right: ${cell.exits.right}`;
        rowStr += `${cell.type}(${exits}) `;
      } else {
        rowStr += 'null ';
      }
    }
    console.log(rowStr.trim());
  }
}


function validateGame() {
  const visited = Array.from({ length: gridMap.length }, () => Array(gridMap[0].length).fill(false));

  let startRow = -1, startCol = -1;
  outer: for (let row = 0; row < gridMap.length; row++) {
    for (let col = 0; col < gridMap[row].length; col++) {
      if (gridMap[row][col] && gridMap[row][col].type !== 'O') {
        startRow = row;
        startCol = col;
        break outer;
      }
    }
  }

  if (startRow === -1) {
    console.log("No valid rail cell found to start the validation");
    return false; 
  }

  console.log(`Starting DFS from (${startRow}, ${startCol})`);


  function dfs(row, col) {
    const stack = [[row, col]];

    while (stack.length > 0) {
      const [currentRow, currentCol] = stack.pop();

      if (currentRow < 0 || currentRow >= gridMap.length || currentCol < 0 || currentCol >= gridMap[currentRow].length || visited[currentRow][currentCol] || gridMap[currentRow][currentCol].type === 'O') {
        continue;
      }

      visited[currentRow][currentCol] = true;
      const cell = gridMap[currentRow][currentCol];
      console.log(`Visiting cell (${currentRow}, ${currentCol}): Type = ${cell.type}, Exits = ${JSON.stringify(cell.exits)}`);

      if (cell.exits.up && currentRow > 0 && gridMap[currentRow - 1][currentCol].exits.down) stack.push([currentRow - 1, currentCol]);
      if (cell.exits.down && currentRow < gridMap.length - 1 && gridMap[currentRow + 1][currentCol].exits.up) stack.push([currentRow + 1, currentCol]);
      if (cell.exits.left && currentCol > 0 && gridMap[currentRow][currentCol - 1].exits.right) stack.push([currentRow, currentCol - 1]);
      if (cell.exits.right && currentCol < gridMap[currentRow].length - 1 && gridMap[currentRow][currentCol + 1].exits.left) stack.push([currentRow, currentCol + 1]);
    }
  }


  dfs(startRow, startCol);
  for (let row = 0; row < gridMap.length; row++) {
    for (let col = 0; col < gridMap[row].length; col++) {
      const cell = gridMap[row][col];
      if (cell && cell.type !== 'O' && !visited[row][col]) {
        console.log(`Unvisited rail cell found at (${row}, ${col})`);
        return false;
      }
    }
  }

  console.log("All rail cells are properly connected");
  return true; 
}

function checkContinuity() {
  const numRows = gridMap.length;
  const numCols = gridMap[0].length;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const cell = gridMap[row][col];
      if (!cell) {
        return false;
      }
      if (cell.type === 'O') {
        continue;
      }

      if (cell.exits.down) { 
        if (row + 1 < numRows) {
          const downCell = gridMap[row + 1][col];
          if (!downCell || !downCell.exits.up) {
            return false; 
          }
        } else {
          return false; 
        }
      }

      if (cell.exits.left) { 
        if (col - 1 >= 0) {
          const leftCell = gridMap[row][col - 1];
          if (!leftCell || !leftCell.exits.right) {
            return false;
          }
        } else {
          return false; t
        }
      }

      if (cell.exits.up) { 
        if (row - 1 >= 0) {
          const upCell = gridMap[row - 1][col];
          if (!upCell || !upCell.exits.down) {
            return false;
          }
        } else {
          return false; 
        }
      }

      if (cell.exits.right) { 
        if (col + 1 < numCols) {
          const rightCell = gridMap[row][col + 1];
          if (!rightCell || !rightCell.exits.left) {
            return false; 
          }
        } else {
          return false; 
        }
      }
    }
  }

  return true; 
}


function checkGameCompletion(gameTime) {
  if (validateGame() && checkContinuity()) {
      const message = `Congratulations! You completed the game in ${gameTime}s.`;
      clearInterval(timerInterval);
      displayMessage(message, displayName.textContent, gameTime);
      displayMessage(message);

  }
}

const closeMessageBtn = document.querySelector("#close-message-btn");
  closeMessageBtn.addEventListener("click", () => {
  const messageModal = document.querySelector("#message-modal");
  messageModal.classList.add("hidden");
  gamePage.classList.add("hidden");
  mainMenu.classList.remove("hidden");
});


const messageModal = document.querySelector("#message-modal");
const leaderboardList = document.querySelector('#leaderboard-list');

let leaderboard = getLeaderboard();

function getLeaderboard() {
  const storedLeaderboard = localStorage.getItem('leaderboard');
  return storedLeaderboard ? JSON.parse(storedLeaderboard) : [];
}


function addPlayerToLeaderboard(playerName, timeTaken) {
  
  timeTaken = parseInt(timeTaken);
  leaderboard.push({ name: playerName, time: timeTaken });
  leaderboard.sort((a, b) => a.time - b.time);

  if (leaderboard.length > 20) {
    leaderboard = leaderboard.slice(0, 20);
  }

  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function displayLeaderboard() {

  leaderboardList.innerHTML = '';
  leaderboard.forEach((entry, index) => {
    if(entry.name !== undefined){
      const listItem = document.createElement('li');
    const txt = document.createTextNode(`${entry.name} - ${entry.time} seconds`);
    listItem.appendChild(txt);
    leaderboardList.appendChild(listItem);
    }
  });
}


function displayMessage(message, playerName, timeTaken) {

  addPlayerToLeaderboard(playerName, timeTaken);
  
  const messageText = document.querySelector("#message-text");
  messageText.textContent = message;
  messageModal.classList.remove("hidden");
  displayLeaderboard();
}



