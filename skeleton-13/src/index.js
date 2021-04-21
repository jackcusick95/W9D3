const View = require("./ttt-view.js");
window.view = View;
const Game = require("./game.js")
window.game = Game;

console.log("webpac is ready !!")
  $(() => {
    const $view = $(".ttt");
    const newGame = new Game();
    new View(newGame, $view);



  });

