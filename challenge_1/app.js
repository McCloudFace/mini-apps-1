'use strict';

var board;

var createBoardArray = function () {
  let board = [];
  for (let i = 0; i < 3; i++) {
    let row = new Array(3);
    board.push(row);
  };
  return board;
};

var createRowElements = function () {
  var row = document.createElement('div');
  row.className = 'row';
  for (let i = 0; i < 3; i++) {
    var btn = document.createElement('button');
    row.append(btn);
  }
  return row;
};

var renderBoard = function () {
  let board = document.createElement('div');
  board.className = 'board';
  for (let i = 0; i < 3; i++) {
    let aRow = createRowElements();
    board.appendChild(aRow);
  }
  return board;
};

var init = function () {
  let aBoard = renderBoard();
  document.querySelector('#app').appendChild(aBoard);
};

window.onload = function () {
  init();
};

