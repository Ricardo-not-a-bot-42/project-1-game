class Enemy {
  constructor(x, y, game, moveSet) {
    this.x = x;
    this.y = y;
    this.width = 125;
    this.height = 125;
    this.sprayedTime = 0;
    this.iteration = 0;
    this.pauseTime = 0;
    this.moveSet = moveSet;

    this.game = game;
    this.image = new Image();
    this.image.src = '/images/Enemy.png';
  }

  initialize() {
    this.image.addEventListener('load', () => {
      this.game.context.drawImage(this.image, this.x, this.y);
      this.width = this.image.width;
      this.height = this.image.height;
    });
  }

  draw() {
    this.game.context.drawImage(this.image, this.x, this.y);
  }

  autonomousMovement() {
    let maxMoveIteration = this.moveSet.length;

    if (this.sprayedTime > 0) {
      this.sprayedTime--;
      return;
    }

    switch (this.moveSet[this.iteration]) {
      case 'up':
        this.move(0);
        if (this.pauseTime === 0) {
          this.pauseTime = 30;
        }
        break;
      case 'right':
        this.move(1);
        if (this.pauseTime === 0) {
          this.pauseTime = 30;
        }
        break;
      case 'down':
        this.move(2);
        if (this.pauseTime === 0) {
          this.pauseTime = 30;
        }
        break;
      case 'left':
        this.move(3);
        if (this.pauseTime === 0) {
          this.pauseTime = 30;
        }
        break;
      case 'stop':
        if (this.pauseTime === 0) {
          this.pauseTime = 150;
        }
        break;
    }

    if (this.pauseTime > 1) {
      this.pauseTime--;
      return;
    }
    if (this.iteration < maxMoveIteration) {
      this.pauseTime = 0;
      this.iteration++;
    } else {
      // this.iteration = 0;
    }
  }

  move(direction) {
    switch (direction) {
      case 0:
        this.y -= 2.5;
        break;
      case 1:
        this.x += 2.5;
        break;
      case 2:
        this.y += 2.5;
        break;
      case 3:
        this.x -= 2.5;
        break;
    }
  }

  moveWithBG(direction) {
    switch (direction) {
      case 0:
        this.y += 5;
        break;
      case 1:
        this.x -= 5;
        break;
      case 2:
        this.y -= 5;
        break;
      case 3:
        this.x += 5;
        break;
    }
  }
}
