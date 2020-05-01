class Enemy {
  constructor(x, y, game, moveSet) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.speed = 30;
    this.iterationSpeed;
    this.sprayedTime = 0;
    this.iteration = 0;
    this.pauseTime = 0;
    this.moveSet = moveSet;

    this.game = game;
    this.image = new Image();
    this.image.src = '/images/Enemy-R.png';
  }

  initialize() {
    this.image.addEventListener('load', () => {
      this.game.context.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height
      );
      //this.width = this.image.width;
      //this.height = this.image.height;
    });
  }

  draw() {
    this.game.context.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  autonomousMovement() {
    let maxMoveIteration = this.moveSet.length;

    if (this.sprayedTime > 0) {
      this.sprayedTime--;
      return;
    }

    if (this.pauseTime === 0) {
      this.iterationSpeed = this.speed;
    }

    if (this.moveSet[this.iteration] !== undefined) {
      switch (true) {
        case this.moveSet[this.iteration].includes('up'):
          this.move(0);
          if (this.pauseTime === 0) {
            this.pauseTime =
              this.iterationSpeed * parseInt(this.moveSet[this.iteration]);
          }
          break;
        case this.moveSet[this.iteration].includes('right'):
          this.move(1);
          if (this.pauseTime === 0) {
            this.pauseTime =
              this.iterationSpeed * parseInt(this.moveSet[this.iteration]);
          }
          break;
        case this.moveSet[this.iteration].includes('down'):
          this.move(2);
          if (this.pauseTime === 0) {
            this.pauseTime =
              this.iterationSpeed * parseInt(this.moveSet[this.iteration]);
          }
          break;
        case this.moveSet[this.iteration].includes('left'):
          this.move(3);
          if (this.pauseTime === 0) {
            this.pauseTime =
              this.iterationSpeed * parseInt(this.moveSet[this.iteration]);
          }
          break;
        case this.moveSet[this.iteration].includes('stop'):
          if (this.pauseTime === 0) {
            this.pauseTime = 150;
          }
          break;
      }
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
        this.y -= 75 / this.speed;
        if (this.image.src !== '/images/Enemy-B.png') {
          this.image.src = '/images/Enemy-B.png';
        }
        break;
      case 1:
        this.x += 75 / this.speed;
        if (this.image.src !== '/images/Enemy-R.png') {
          this.image.src = '/images/Enemy-R.png';
        }
        break;
      case 2:
        this.y += 75 / this.speed;
        if (this.image.src !== '/images/Enemy-F.png') {
          this.image.src = '/images/Enemy-F.png';
        }
        break;
      case 3:
        this.x -= 75 / this.speed;
        if (this.image.src !== '/images/Enemy-L.png') {
          this.image.src = '/images/Enemy-L.png';
        }
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
