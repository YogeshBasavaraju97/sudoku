import React from 'react';
import styles from '../styles/Controls.module.css';

const Grid = ({ grid, updateGrid }) => (
  <div className={styles.grid}>
    {grid.map((row, rowIndex) =>
      row.map((value, colIndex) => (
        <input
          key={`${rowIndex}-${colIndex}`}
          type="text"
          maxLength="1"
          value={value || ''}
          onChange={(e) => updateGrid(rowIndex, colIndex, e.target.value)}
          className={styles.cell}
        />
      ))
    )}
  </div>
);

export default Grid;
