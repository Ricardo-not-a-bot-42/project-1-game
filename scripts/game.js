class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.isGameOver = false;
    this.isGameWon = false;
    this.checkoutsAvailable = false;
    this.setup();
    this.setMoveControls();
  }

  setup() {
    this.gameRunning = true;
    this.isGameWon = false;
    this.isGameOver = false;
    this.level = 1;
    this.score = 0;
    this.baseScoreMultiplier = 1;

    this.listImage = new Image();
    this.listImage.src = '/images/postit.png';
    this.createLevel();
  }

  createLevel() {
    this.creator = new Creator(this);
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
    this.gameRunning = false;
    this.context.save();
    this.context.fillStyle = 'white';
    this.context.textAlign = 'center';
    this.context.font = 'bold 64px Indie Flower';
    this.context.fillText(
      'Game Won',
      this.canvas.width / 2,
      this.canvas.height / 2 - 200
    );
    this.context.font = 'bold 32px Indie Flower';
    this.context.fillText(
      'You dodged everyone like a pro!',
      this.canvas.width / 2,
      this.canvas.height / 2 - 100
    );
    this.context.fillText(
      `Your score was: ${this.score}`,
      this.canvas.width / 2,
      this.canvas.height / 2
    );
    this.context.fillText(
      'Play again to improve your score!',
      this.canvas.width / 2,
      this.canvas.height / 2 + 100
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
      item.draw('purple');
    }

    if (this.creator.sprayPickup) {
      this.creator.sprayPickup.draw('blue');
    }
    if (this.creator.healthPickup) {
      this.creator.healthPickup.draw('green');
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
