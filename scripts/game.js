class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.createLevel();
    this.setMoveControls();
  }

  createLevel() {
    this.creator = new Creator(this);
    this.creator.createWalls();
    this.creator.createAisles();
    this.creator.createCheckouts();
    this.createEnemies();
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

  createEnemies() {
    this.enemy = new Enemy(1125 + 300, 325 + 75, this, [
      'right',
      'right',
      'right',
      'right',
      'right',
      'stop',
      'down',
      'down',
      'down',
      'stop',
      'left',
      'left',
      'left',
      'left',
      'left',
      'stop',
      'left',
      'left',
      'left',
      'stop',
      'down',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'left',
      'stop',
      'down',
      'down',
      'down',
      'right',
      'right',
    ]);
    this.enemy.initialize();
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
    this.enemy.moveWithBG(direction);
    //TODO Move enemies in relation to the background
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
    this.player.draw();
    this.enemy.autonomousMovement();
    this.enemy.draw();
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
      }
    });
  }
}
