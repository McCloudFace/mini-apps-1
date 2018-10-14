'use strict';

// state of moves
var lastMove = '';
// state of board
var boardState = [];

// in memory board
var createBoardArray = function () {
  var board = [];
  for (var i = 0; i < 3; i++) {
    var row = new Array(3);
    board.push(row);
  }
  return board;
};

// to check if moves (squares) are the same player
var isEqual = function () {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#Description
  var args = Array.prototype.slice.call(arguments);
  for (var i = 1; i < args.length; i++) {
    if (args[i] === null || args[i] === undefined || args[i] !== args[i - 1]) {
      return false;
    } else {
      return true;
    }
  }
};

// check for winning combinations
var checkWinners = function () {
  // row wins
  if ( isEqual(boardState[0][0], boardState[0][1], boardState[0][2]) ||
       isEqual(boardState[1][0], boardState[1][1], boardState[1][2]) ||
       isEqual(boardState[2][0], boardState[2][1], boardState[2][2]) ||

  // column wins
       isEqual(boardState[0][0], boardState[1][0], boardState[2][0]) ||
       isEqual(boardState[0][1], boardState[1][1], boardState[2][1]) ||
       isEqual(boardState[0][2], boardState[1][2], boardState[2][2]) ||

  // diagonal wins
       isEqual(boardState[0][0], boardState[1][1], boardState[2][2]) ||
       isEqual(boardState[0][2], boardState[1][1], boardState[2][0]) ) {
    console.log('WINNER');
  }
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
    var theRow = parseInt(e.target.dataset.position[0]);
    var theCol = parseInt(e.target.dataset.position[2]);
    lastMove = e.target.value;
    var move = document.createTextNode(lastMove);
    e.target.appendChild(move);
    boardState[theRow][theCol] = lastMove;
    console.log('boardState: ', boardState);
    checkWinners();
  }
};

// dom element for a row
var createRowElements = function (rowIndex) {
  var row = document.createElement('div');
  row.className = 'row';
  for (var i = 0; i < 3; i++) {
    var btn = document.createElement('button');
    btn.dataset.position = rowIndex.toString() + ',' + i.toString();
    // add click handler for moves
    btn.addEventListener('click', (e) => {
      // onclick make a move
      moves(e);
    });
    row.append(btn);
  }
  return row;
};

// dom element for a board of rows
var renderBoard = function () {
  var theBoard = document.createElement('div');
  theBoard.className = 'board';
  for (var i = 0; i < 3; i++) {
    var aRow = createRowElements(i);
    theBoard.appendChild(aRow);
  }
  return theBoard;
};

// initialize a board & append to div#app
var init = function () {
  var aBoard = renderBoard();
  boardState = createBoardArray();
  document.querySelector('#app').appendChild(aBoard);
};

// render the board when the page loads
window.onload = function () {
  init();
};

// function to reset board
var nuke = function () {
  var boardSquares = document.querySelectorAll('button');
  boardSquares.forEach(square => {
    square.removeAttribute('value');
    square.innerText = '';
  });
  lastMove = '';
  boardState = [];
};

// reset the board
let resetButton = document.querySelector('#footer > div');
resetButton.addEventListener('click', nuke);
