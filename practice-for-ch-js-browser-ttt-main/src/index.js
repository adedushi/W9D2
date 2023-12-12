import View from './ttt-view.js';
import Game from '../ttt_node/game.js';

document.addEventListener('DOMContentLoaded', () => {
  const ttt = document.querySelector('figure');
  const game = new Game();
  const a = new View(game, ttt);
  a.setupBoard();
});
