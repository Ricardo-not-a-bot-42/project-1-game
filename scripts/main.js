const $canvas = document.querySelector('canvas');
const $context = $canvas.getContext('2d');
const $beginButton = document.querySelector('#start-button');

window.onload = () => {
  const game = new Game($canvas, $context);

  const gameLoop = () => {
    game.runLogic();
    if (game.gameRunning === true) {
      setTimeout(gameLoop, 1000 / 60);
    }
  };

  $beginButton.addEventListener('click', () => {
    gameLoop();
  });
};
