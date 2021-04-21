const Board = require("./board.js");

class View {
  constructor(game, $el) {

  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const newBoard = new Board();
    return newBoard;
  }
}

module.exports = View;
