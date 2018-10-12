'use strict';

// state of moves
var lastMove = '';

// in memory board
var createBoardArray = function () {
  let board = [];
  for (let i = 0; i < 3; i++) {
    let row = new Array(3);
    board.push(row);
  };
  return board;
};

// dom element for a row
var createRowElements = function () {
  var row = document.createElement('div');
  row.className = 'row';
  for (let i = 0; i < 3; i++) {
    var btn = document.createElement('button');
    // add click handler for moves
    btn.addEventListener('click', (e) => {
      // onclick make a move
      moves(e);
    })
    row.append(btn);
  }
  return row;
};

// dom element for a board of rows
var renderBoard = function () {
  let theBoard = document.createElement('div');
  theBoard.className = 'board';
  for (let i = 0; i < 3; i++) {
    let aRow = createRowElements();
    theBoard.appendChild(aRow);
  }
  return theBoard;
};

// toggle next move
var toggleMove = function (last) {
  if (last !== 'X') {
    return 'X';
  } else {
    return 'O';
  }
};

// make moves in click handler
var moves = (e) => {
  if (!e.target.value) {
    e.target.value = toggleMove(lastMove);
    lastMove = e.target.value;
    let move = document.createTextNode(e.target.value);
    e.target.appendChild(move);
  }
}

// initialize a board & append to div#app
var init = function () {
  let aBoard = renderBoard();
  document.querySelector('#app').appendChild(aBoard);
};

// render the board when the page loads
window.onload = function () {
  init();
};

// function to reset board
var nuke = function () {
  let boardSquares = document.querySelectorAll('button');
  boardSquares.forEach(square => {
    square.removeAttribute('value');
    square.innerText = '';
  });
  lastMove = '';
};

// reset the board
let resetButton = document.querySelector('#footer > div');
resetButton.addEventListener('click', nuke);
