const Board = require("./board.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $("<ul>");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
