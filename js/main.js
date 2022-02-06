import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = function (idx) {
    game.makeMove(idx);
    gameView.update(game);
};

gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
};

gameView.update(game);