# Rail Road Game
## Completed Features  
- ✅ **Readme**: Properly filled out declaration and point completion tracking.  
- ✅ **Framework-Free**: The game was created using plain HTML, CSS, and JavaScript without any frameworks.  
- ✅ **Bad Practices Avoided**: The solution avoids all practices mentioned in the bad practice section.  
- ✅ **Menu**:  
  - Displays a name input field, a difficulty selection option, and a start button.  
  - Clicking the Start button navigates to the game screen.  
  - The game rules are accessible from the menu.  
- ✅ **Game Screen**:  
  - Displays the player's name.  
  - Starts the timer when the game begins.  
  - Displays a randomly selected map corresponding to the chosen difficulty.  
- ✅ **Placement**: Elements can be placed on the map's cells.  
- ✅ **Placement Rules**: Elements can be placed only on valid cells, adhering to the following rules:  
  - On a bridge, only straight pieces are allowed.  
  - On a mountain, only pieces at 90° angles are allowed.  
  - Nothing can be placed on an oasis.  
  - Any element can be placed on an empty cell.  
- ✅ **Validation**: The game checks the puzzle for correctness:  
  - Each cell is touched only once.  
  - The path is continuous.  
  - All cells are accessible from their neighboring cells.  
  - Correct elements are present in all required positions.  
- ✅ **End of Game**: Displays the time taken to complete the puzzle.  
- ✅ **Leaderboard**: Displays the leaderboard with times for completed games at the given difficulty.  
- ✅ **Neat Design**: The game has an aesthetically pleasing design and well-organized code.  
- ✅ **Leaderboard Storage**: Leaderboards are saved in LocalStorage and persist even after reloading the page.  


## Installation and Usage  

1. **Clone the repository** or download the project files.  
2. Open the `index.html` file in any modern web browser.  
3. Enter your name, select a difficulty, and click **Start** to begin the game.  
4. Follow the placement rules to solve the puzzle.  
5. At the end of the game, view your time and compare it on the leaderboard.  

---

