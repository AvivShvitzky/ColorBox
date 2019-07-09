import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './index.css'


ReactDOM.render(<App/>, document.getElementById('root'))

    isMatch(row, col) {
      // code goes here...
  }

  isMatch(row, col) {
    return this.isMatchInOrientation(row, col, 0, 1) ||
    this.isMatchInOrientation(row, col, 1, 0) ||
    this.isMatchInOrientation(row, col, 1, 1) ||
    this.isMatchInOrientation(row, col, -1, 1)
  }
  
  isMatchInOrientation(row, col, rowToAdd, colToAdd) {
    let numOfMarks = 1
    numOfMarks = this.marksInDirection(row, col, rowToAdd, colToAdd, numOfMarks)
    if (numOfMarks === WINNING_MATCH) return true
    numOfMarks = this.marksInDirection(row, col, -rowToAdd, -colToAdd, numOfMarks)
    if (numOfMarks === WINNING_MATCH) return true
    return false
  }

  isMatchInOrientation(row, col, rowToAdd, colToAdd) {
    // code goes here...
  }

  marksInDirection(_row, _col, rowToAdd, colToAdd, _numOfMarks) {
    let numOfMarks = _numOfMarks
    let row = _row
    let col = _col
    while (!this.overEdge(row, col, rowToAdd, colToAdd)) {
      if (this._board[row + rowToAdd][col + colToAdd] === this._mark) {
        if (++numOfMarks === WINNING_MATCH) return WINNING_MATCH
        row += rowToAdd
        col += colToAdd
      } else {
        return numOfMarks
      }
    }
    return numOfMarks
  }
  overEdge(row, col, rowToAdd, colToAdd) {
    // direction horizontal to right
    if (rowToAdd === 0 && colToAdd === 1
        &&
        col + colToAdd < this._board[row].length) 
       { return false }
    // direction horizontal to left
    if (rowToAdd === 0 && colToAdd === -1 
        && 
        col + colToAdd >= 0) 
       { return false }
    // direction vertical up and diagonal top-left to bottom right, and top-right to bottom left
    if (rowToAdd === 1
        &&
        row + rowToAdd < this._board.length) 
       { return false }
    // direction vertical down and diagonal bottom-left to top right, and bottom-right to top left
    if (rowToAdd === -1
        &&
        row + rowToAdd >= 0) 
       { return false }
    return true
  }

