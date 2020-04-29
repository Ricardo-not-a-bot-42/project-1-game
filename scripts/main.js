const $canvas = document.querySelector('canvas');
const $context = $canvas.getContext('2d');
const $beginButton = document.querySelector('#start-button');
const $restartButton = document.querySelector('#restart-button');
const $pauseButton = document.querySelector('#pause-button');

window.onload = () => {
  let game;
  $pauseButton.hidden = true;
  $restartButton.hidden = true;
  $beginButton.addEventListener('click', () => {
    if (!game) {
      $beginButton.hidden = true;
      $pauseButton.hidden = false;
      $restartButton.hidden = false;
      game = new Game($canvas, $context);
      gameLoop();
    }
  });

  $restartButton.addEventListener('click', () => {
    if (game.gameRunning) {
      game.setup();
    } else {
      game.setup();
      gameLoop();
    }
  });

  $pauseButton.addEventListener('click', () => {
    if (!game.isGameOver && !game.isGameWon) {
      game.gameRunning ? (game.gameRunning = false) : (game.gameRunning = true);
      gameLoop();
    }
  });

  const gameLoop = () => {
    game.runLogic();
    if (game.gameRunning === true) {
      setTimeout(gameLoop, 1000 / 60);
    } else {
      $context.fillStyle = 'rgba(71, 71, 71, 0.5)';
      $context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      if (game.isGameOver) {
        game.gameOver();
      } else if (game.isGameWon) {
        game.gameWon();
      }
    }
  };
};
