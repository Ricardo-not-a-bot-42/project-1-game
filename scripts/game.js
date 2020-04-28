class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.gameRunning = true;
    this.createLevel();
    this.setMoveControls();
  }

  createLevel() {
    this.creator = new Creator(this);
    this.creator.createWalls();
    this.creator.createAisles();
    this.creator.createCheckouts();
    this.creator.createEnemies();
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
    this.context.fillStyle = 'rgba(71, 71, 71, 0.9)';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
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
    this.player.runLogic();

    for (let enemy of this.creator.enemies) {
      enemy.autonomousMovement();
      enemy.draw();
    }

    for (let enemy of this.creator.enemies) {
      if (this.player.checkCollision(enemy, 0, 0)) {
        this.player.decreaseHealth();
      }
    }
  }

  setMoveControls() {
    window.addEventListener('keydown', (event) => {
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
      }
    });
  }
}
