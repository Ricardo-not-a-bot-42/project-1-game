const $canvas = document.querySelector('canvas');
const $context = $canvas.getContext('2d');
const $beginButton = document.querySelector('#start-button');
const $restartButton = document.querySelector('#restart-button');
const $pauseButton = document.querySelector('#pause-button');

window.onload = () => {
  document.fonts.load('12pt Source Code Pro');
  let game;
  $pauseButton.hidden = true;
  $restartButton.hidden = true;
  $beginButton.addEventListener('click', () => {
    if (!game) {
      $canvas.style.display = 'block';
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
      window.requestAnimationFrame((timestamp) => gameLoop(timestamp));
      if (game.bgMusic.paused) {
        game.bgMusic.play();
      }
    } else {
      game.bgMusic.pause();
      $context.fillStyle = 'rgba(71, 71, 71, 0.5)';
      $context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      if (game.isGameOver) {
        $context.fillStyle = '#33312d';
        $context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        game.gameOver();
      } else if (game.isGameWon) {
        $context.fillStyle = '#33312d';
        $context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        $context.fillStyle = '#e3e3e3';
        $context.fillRect(
          $canvas.width / 4,
          0,
          $canvas.width / 2,
          $canvas.height
        );
        game.gameWon();
      }
    }
  };
};
