const View = require("./ttt-view.js");
const Game = require("./game.js")


  $(() => {
    const $view = $(".ttt");
    const game = new Game();
    new View(game, $view);
  });

