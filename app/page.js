'use client';

import { useState } from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import styles from './styles/global.css';
import { isValid, solveSudoku } from './utils/sudokuSolver';

export default function HomePage() {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(0)));
  const [error, setError] = useState('');

  const updateGrid = (row, col, value) => {
    if (isNaN(value)) {
      setError('Enter a number between 1 to 9');
    } else setError('');

    const parsedValue = isNaN(Number(value)) || 0 ? 0 : Number(value);
    const newGrid = grid.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? parsedValue : c))
    );
    setGrid(newGrid);
  };

  const validateGrid = () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const num = grid[row][col];
        if (num !== 0) {
          grid[row][col] = 0;
          if (!isValid(grid, row, col, num)) {
            setError('Invalid Sudoku Grid!');
            return false;
          }
          grid[row][col] = num;
        }
      }
    }
    setError('Everything is fine');
    return true;
  };

  const solvePuzzle = () => {
    const solvedGrid = JSON.parse(JSON.stringify(grid));
    if (!solveSudoku(solvedGrid)) {
      setError('Unsolvable Sudoku Puzzle!');
      return;
    }
    setGrid(solvedGrid);
  };

  const resetGrid = () => {
    setGrid(Array(9).fill(Array(9).fill(0)));
    setError('');
  };

  return (
    <div className={styles.container}>
      <h1>Sudoku </h1>
      {error && <div className={styles.error}>{error}</div>}
      <Grid grid={grid} updateGrid={updateGrid} />
      <Controls
        solvePuzzle={solvePuzzle}
        resetGrid={resetGrid}
        validateGrid={validateGrid}
      />
    </div>
  );
}
