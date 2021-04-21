const Board = require("./board.js");
const Game = require("./game.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {  
    const bindEvent = e => {
      const $li = $(e.currentTarget);
      this.makeMove($li.pos)
    }
  
    $("ul").on("click", "li", bindEvent);
  }

  makeMove($square) {
    const $li =  
  }

  setupBoard() {
    let $ul = $("<ul>");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.data("pos", [i,j]);
        $ul.append($li);
    
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
