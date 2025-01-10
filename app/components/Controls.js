import React from 'react';
import styles from '../styles/Controls.module.css';

const Controls = ({ solvePuzzle, resetGrid, validateGrid }) => (
  <div className={styles.controls}>
    <button onClick={validateGrid} className={styles.button}>
      Validate
    </button>
    <button onClick={solvePuzzle} className={styles.button}>
      Solve
    </button>
    <button onClick={resetGrid} className={styles.button}>
      Reset
    </button>
  </div>
);

export default Controls;
