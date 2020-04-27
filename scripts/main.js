const $canvas = document.querySelector('canvas');
const $context = $canvas.getContext('2d');

window.onload = () => {
  const game = new Game($canvas, $context);

  const gameLoop = () => {
    game.runLogic();
    setTimeout(gameLoop, 1000 / 60);
  };

  gameLoop();
};
