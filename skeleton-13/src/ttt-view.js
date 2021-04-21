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
      // debugger
      const $li = $(e.currentTarget);
      this.makeMove($li);
    }
  
    $("ul").on("click", "li", bindEvent);
  }

  makeMove($square) {
    // debugger
    let pos = $square.data("pos");
    // debugger 
    let currentPlayer = this.game.currentPlayer;
    // debugger 
    this.game.playMove(pos);
    $square.addClass(currentPlayer).append(currentPlayer);

    if (this.game.winner()) {
      $("body").append("YOUR A WINNER!!")
      
    };

    if (this.game.isOver()) {
      $("body").append("ITS A DRAW!!")
    };    

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
