const $canvas = document.querySelector('canvas');
const $context = $canvas.getContext('2d');
const $beginButton = document.querySelector('#start-button');

window.onload = () => {
  let game;
  $beginButton.addEventListener('click', () => {
    game = new Game($canvas, $context);
    gameLoop();
  });

  const gameLoop = () => {
    game.runLogic();
    if (game.gameRunning === true) {
      setTimeout(gameLoop, 1000 / 60);
    }
  };
};
