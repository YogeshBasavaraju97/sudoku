# Rules to validate Sudoku

- Each row must contain unique numbers (1-9).
- Each column must contain unique numbers (1-9).
- Each 3x3 sub-grid must contain unique numbers (1-9).

# Validation logic

1.Iterate through all positions in the grid:

The for loop runs x from 0 to 8 to check all possible positions (row, column, and 3x3 sub-grid).

2.Check the Row:

If any cell in the same row already contains the number num, return false.

3.Check the Column:

If any cell in the same column already contains the number num, return false.

4.Check the 3x3 Sub-Grid:

Understanding the Sub-Grid Index Calculation:

- Sudoku divides the grid into 9 sub-grids of size 3x3.
- To identify which 3x3 sub-grid a cell belongs to:
- Math.floor(row / 3) gives the sub-grid's row index (0, 1, or 2).
- Math.floor(col / 3) gives the sub-grid's column index (0, 1, or 2).
- 3 \* Math.floor(row / 3) calculates the starting row of the sub-grid.
- 3 \* Math.floor(col / 3) calculates the starting column of the sub-grid.
- If any cell in the same sub-grid already contains the number num, return false.

  5.Return true if Valid:
  If none of the checks fail (i.e., the number num is not already present in the row, column, or sub-grid), return true.

# Implementation of recursion and backtracking algorithm to solve sudoku

1.Loop through the grid

> The function iterates through each cell of the Sudoku grid using two nested loops.

2.Check if the cell is empty:

> An empty cell is represented by 0.
> If the cell is empty, the algorithm attempts to fill it with a number from 1 to 9.

3.Try numbers from 1 to 9

> The algorithm checks if placing a number (num) in the empty cell is valid using the isValid function.

> If valid, it temporarily assigns the number to the cell

4.Recursive call

> After placing the number, the algorithm recursively calls solveSudoku to solve the rest of the grid.
> If this recursive call returns true, it means the grid is solved, and the algorithm can terminate.

5.Backtracking

> If the recursive call fails, the algorithm backtracks by resetting the current cell to 0 (empty).
> Backtracking ensures that the algorithm explores all possible configurations until it finds a valid solution or determines the puzzle is unsolvable.

6.Return false if no solution

> If no number from 1 to 9 works for the current cell, the function returns false, indicating that the puzzle cannot be solved from the current state.

7.Grid is solved

> If all cells are filled without any conflicts, the function returns true.

# steps to run the Sudoku Solver project from a GitHub repository on local machine

1.Clone the GitHub Repository

> Open a terminal or command prompt.
> Run the following command to clone the repository https://github.com/YogeshBasavaraju97/sudoku.git with the actual GitHub repository URL

2.Navigate to the Project Directory

> Move into the project folder

3.Install Dependencies

> Ensure you have Node.js and npm (Node Package Manager) installed. If not, download and install Node.js.

4.Run the Development Server

> Start the development server using the following command
> npm run dev
> The terminal will show the URL where your app is running, typically
> 5.Open the Application

> Open your web browser and navigate to http://localhost:3000 (or the URL provided in the terminal).
> should see the Sudoku Solver application.
