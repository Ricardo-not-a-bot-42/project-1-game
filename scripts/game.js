class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.isGameOver = false;
    this.isGameWon = false;
    this.checkoutsAvailable = false;
    this.bgMusic = new Audio();
    this.bgMusic.src = '/sounds/bgMusic.wav';
    this.setup();
    this.setMoveControls();

    this.checkoutAvailableSound = new Audio();
    this.checkoutAvailableSound.src = '/sounds/announcement.mp3';
    this.checkoutAvailableVoice = new Audio();
    this.checkoutAvailableVoice.src = '/sounds/Voice.mp3';

    this.gameWinSound = new Audio();
    this.gameWinSound.src = '/sounds/win.wav';
    this.registerSound = new Audio();
    this.registerSound.src = '/sounds/register.mp3';
    this.gameLoseSound = new Audio();
    this.gameLoseSound.src = '/sounds/lose.wav';
  }

  setup() {
    this.gameRunning = true;
    this.isGameWon = false;
    this.isGameOver = false;
    this.checkoutsAvailable = false;
    this.level = 1;
    this.score = 0;
    this.itemsBought = [];
    this.baseScoreMultiplier = 1;
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.2;
    this.bgMusic.play();
    this.listImage = new Image();
    this.listImage.src = '/images/postit.png';
    this.createLevel();
  }

  createLevel() {
    this.creator = new Creator(this);
    this.creator.createFloor();
    this.creator.createWalls();
    this.creator.createAisles();
    this.creator.createCheckouts();
    this.creator.createEnemyList();
    this.creator.createItemList(false);
    this.creator.createSprayPickup();
    this.creator.createHealthPickup();
    this.createCharacter();
  }

  createCharacter() {
    this.player = new Character(
      this.canvas.width / 2 - 75,
      this.canvas.height / 2 - 75,
      this
    );
    this.player.initialize();
  }

  gameOver() {
    this.gameLoseSound.play();
    this.bgMusic.pause();
    this.gameRunning = false;
    this.context.save();
    this.context.fillStyle = 'white';
    this.context.textAlign = 'center';
    this.context.font = 'bold 64px Indie Flower';
    this.context.fillText(
      'Game Over',
      this.canvas.width / 2,
      this.canvas.height / 2 - 200
    );
    this.context.font = 'bold 32px Indie Flower';
    this.context.fillText(
      'You took one too many hits! better luck next time!',
      this.canvas.width / 2,
      this.canvas.height / 2 - 100
    );
    this.context.fillText(
      'To win, you must go to the checkout when ready!',
      this.canvas.width / 2,
      this.canvas.height / 2
    );
    this.context.fillText(
      'Press restart to try again!',
      this.canvas.width / 2,
      this.canvas.height / 2 + 100
    );
    this.context.restore();
  }

  gameWon() {
    this.registerSound.play();
    this.registerSound.addEventListener('ended', () => {
      this.gameWinSound.play();
    });
    this.bgMusic.pause();
    this.gameRunning = false;
    this.context.save();
    this.context.fillStyle = 'black';
    this.context.textAlign = 'center';
    this.context.font = 'bold 32px Source Code Pro';
    this.context.fillText(
      'SWEETEST DROP MARKET LTD.',
      this.canvas.width / 2,
      this.canvas.height / 2 - 250
    );
    this.context.font = '20px Source Code Pro';
    let date = new Date();
    this.context.fillText(
      `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      this.canvas.width / 2,
      this.canvas.height / 2 - 200
    );
    this.context.font = 'bold 26px Source Code Pro';
    this.context.fillText(
      `**************************`,
      this.canvas.width / 2,
      this.canvas.height / 2 - 150
    );
    this.context.textAlign = 'left';
    this.context.fillText(
      `ITEMS:`,
      this.canvas.width / 2 - 250,
      this.canvas.height / 2 - 110
    );
    this.context.font = '22px Source Code Pro';
    for (let i = 0; i < 5; i++) {
      this.context.fillText(
        this.itemsBought[i],
        this.canvas.width / 2 - 200,
        this.canvas.height / 2 - 30 * -(i + 1) - 100
      );
    }
    this.context.fillText(
      `+ ${this.itemsBought.length - 5}`,
      this.canvas.width / 2 - 200,
      this.canvas.height / 2 + 80
    );
    this.context.font = 'bold 20px Source Code Pro';
    this.context.fillText(
      `BASE SCORE:                       ${this.score}`,
      this.canvas.width / 2 - 250,
      this.canvas.height / 2 + 130
    );
    this.context.fillText(
      `REMAINING HP:                     ${this.player.hp}(x1000)`,
      this.canvas.width / 2 - 250,
      this.canvas.height / 2 + 150
    );
    this.context.fillText(
      `REMAINING SPRAY:                  ${this.player.sprayAmount}(x20)`,
      this.canvas.width / 2 - 250,
      this.canvas.height / 2 + 170
    );
    this.context.fillText(
      `__________________________________________`,
      this.canvas.width / 2 - 250,
      this.canvas.height / 2 + 180
    );
    this.context.font = 'bold 28px Source Code Pro';
    this.context.fillText(
      `TOTAL SCORE:            ${
        this.score + this.player.hp * 1000 + this.player.sprayAmount * 20
      }`,
      this.canvas.width / 2 - 250,
      this.canvas.height / 2 + 215
    );
    this.context.textAlign = 'center';
    this.context.font = 'bold 26px Source Code Pro';
    this.context.fillText(
      `**************************`,
      this.canvas.width / 2,
      this.canvas.height / 2 + 250
    );
    this.context.font = 'bold 18px Source Code Pro';
    this.context.fillText(
      'Play again to improve your score!',
      this.canvas.width / 2,
      this.canvas.height / 2 + 275
    );
    this.context.restore();
  }

  initializeItemList() {
    this.image.addEventListener('load', () => {
      this.context.drawImage(
        this.listImage,
        this.canvas.width - 200,
        20,
        100,
        100
      );
    });
  }

  drawItemList() {
    this.context.drawImage(
      this.listImage,
      this.canvas.width - 160,
      -37,
      150,
      200
    );
    for (let i = 0; i < this.creator.items.length; i++) {
      this.context.save();
      this.context.font = 'bold 18px Indie Flower';
      this.context.fillStyle = 'black';
      this.context.fillText(
        '- ' + this.creator.items[i].id,
        this.canvas.width - 150,
        25 + 30 * i
      );
      this.context.restore();
    }
  }

  drawInfo() {
    this.context.save();
    this.context.font = 'bold 22px Indie Flower';
    this.context.fillStyle = 'black';
    this.context.textAlign = 'right';
    this.context.fillText(
      'Score(x' +
        Math.round(this.baseScoreMultiplier * 10) / 10 +
        '): ' +
        this.score,
      this.canvas.width - 20,
      this.canvas.height - 20
    );
    this.context.restore();
  }

  moveBG(direction, nextX, nextY) {
    for (let wall of this.creator.walls) {
      if (wall.checkCollision(this.player, wall.x + nextX, wall.y + nextY)) {
        return;
      }
    }
    for (let aisle of this.creator.aisles) {
      if (aisle.checkCollision(this.player, aisle.x + nextX, aisle.y + nextY)) {
        return;
      }
    }
    for (let checkout of this.creator.checkouts) {
      if (
        checkout.checkCollision(
          this.player,
          checkout.x + nextX,
          checkout.y + nextY
        )
      ) {
        if (this.checkoutsAvailable) {
          this.isGameWon = true;
          this.gameRunning = false;
        }
        return;
      }
    }

    this.creator.floor.move(direction);

    for (let wall of this.creator.walls) {
      wall.move(direction);
    }
    for (let aisle of this.creator.aisles) {
      aisle.move(direction);
    }
    for (let checkout of this.creator.checkouts) {
      checkout.move(direction);
    }
    for (let enemy of this.creator.enemies) {
      enemy.moveWithBG(direction);
    }
    for (let item of this.creator.items) {
      item.moveWithBG(direction);
    }
    if (this.creator.sprayPickup) {
      this.creator.sprayPickup.moveWithBG(direction);
    }
    if (this.creator.healthPickup) {
      this.creator.healthPickup.moveWithBG(direction);
    }
  }

  runLogic() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.creator.floor.draw();
    for (let wall of this.creator.walls) {
      wall.draw();
    }
    for (let aisle of this.creator.aisles) {
      aisle.draw();
    }
    for (let checkout of this.creator.checkouts) {
      checkout.draw();
    }

    for (let item of this.creator.items) {
      item.draw('/images/check-mark.png');
    }

    if (this.creator.sprayPickup) {
      this.creator.sprayPickup.draw('/images/spray.png');
    }
    if (this.creator.healthPickup) {
      this.creator.healthPickup.draw('/images/medicine-pills.png');
    }

    for (let enemy of this.creator.enemies) {
      if (enemy.y < this.player.y) {
        enemy.autonomousMovement();
        enemy.draw();
      }
    }

    this.player.runLogic();
    for (let enemy of this.creator.enemies) {
      if (enemy.y >= this.player.y) {
        enemy.autonomousMovement();
        enemy.draw();
      }
    }
    for (let enemy of this.creator.enemies) {
      if (this.player.checkCollision(enemy, 0, 0, 1)) {
        this.player.decreaseHealth();
      }
    }
    this.drawItemList();
    this.drawInfo();
  }

  setMoveControls() {
    window.addEventListener('keydown', (event) => {
      if (this.gameRunning) {
        switch (event.keyCode) {
          case 87:
            this.moveBG(0, 0, 5);
            event.preventDefault();
            break;
          case 68:
            this.moveBG(1, -5, 0);
            event.preventDefault();
            break;
          case 83:
            this.moveBG(2, 0, -5);
            event.preventDefault();
            break;
          case 65:
            this.moveBG(3, 5, 0);
            event.preventDefault();
            break;
          case 32:
            this.player.useSpray();
            event.preventDefault();
            break;
          case 69:
            this.player.pickItem();
            event.preventDefault();
        }
      }
    });
  }
}
