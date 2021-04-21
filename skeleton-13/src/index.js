const View = require("./ttt-view.js");
window.view = View;
const Game = require("./game.js")
window.game = Game;

console.log("webpac is ready !!")
  $(() => {
    const newGame = new Game();
    const newView = new View();

    // changes

  });

