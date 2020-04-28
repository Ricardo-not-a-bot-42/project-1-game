class Character {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.width = 125;
    this.height = 125;
    this.hp = 5;
    this.invnFrames = 0;
    this.sprayAmount = 100;

    this.game = game;
    this.image = new Image();
    this.image.src = '/images/Player.png';
    this.invnImage = new Image();
    this.invnImage.src = '/images/Enemy.png';

    this.bgImage = new Image();
    this.bgImage.src = '/images/virusBG.png';
    this.hpImage = new Image();
    this.hpImage.src = '/images/virus.png';
    this.sprayImage = new Image();
    this.sprayImage.src = '/images/sprayBottle.png';
    this.sprayQuantity = new Image();
    this.sprayQuantity.src = '/images/sprayQuantity.png';
  }

  initialize() {
    this.image.addEventListener('load', () => {
      this.game.context.drawImage(this.image, this.x, this.y);
      this.width = this.image.width;
      this.height = this.image.height;
    });
  }

  runLogic() {
    this.draw();
    if (this.invnFrames > 0) {
      this.invnFrames--;
    }
  }

  draw() {
    this.drawBG();
    this.drawCharacter();
    this.drawHealth();
    this.drawSpray();
  }

  drawCharacter() {
    if (this.invnFrames <= 0) {
      this.game.context.drawImage(this.image, this.x, this.y);
    } else {
      this.game.context.drawImage(this.invnImage, this.x, this.y);
    }
  }

  drawBG() {
    this.game.context.drawImage(this.bgImage, 10, 100, 50, 290);
  }

  drawHealth() {
    for (let i = 0; i < 5 - this.hp; i++) {
      this.game.context.drawImage(this.hpImage, 10, 100 + i * 60, 50, 50);
    }
  }

  decreaseHealth() {
    if (this.invnFrames <= 0) {
      this.hp--;
      this.invnFrames += 300;
      if (this.hp <= 0) {
        this.game.gameOver();
      }
    }
  }

  checkCollision(enemy, offsetX, offsetY, heightDiff) {
    return (
      enemy.y + (enemy.height * heightDiff) / 2 <
        this.y + this.height + offsetY &&
      enemy.y + enemy.height + offsetY >
        this.y + (this.height * heightDiff) / 2 &&
      enemy.x + enemy.width + offsetX > this.x &&
      enemy.x < this.x + this.width + offsetX
    );
  }

  drawSpray() {
    this.game.context.drawImage(this.sprayImage, 15, 10, 50, 75);
    this.game.context.drawImage(this.sprayQuantity, 16, 35, 42, 49);
    this.game.context.save();
    this.game.context.font = '20px sans-serif';
    this.game.context.fillStyle = 'white';
    this.game.context.fillText(this.sprayAmount, 80, 100);
    this.game.context.restore();
  }

  useSpray() {
    if (this.sprayAmount >= 5) {
      this.sprayAmount -= 5;
      for (let enemy of this.game.creator.enemies) {
        if (this.checkCollision(enemy, 100, 100, 1)) {
          enemy.sprayedTime = 120;
        }
      }
    }
  }

  pickItem() {
    for (let item of this.game.creator.items) {
      if (this.checkCollision(item, 5, 5, 0)) {
        let index = this.game.creator.items.indexOf(item);
        this.game.creator.items.splice(index, 1);
        if (this.game.creator.items.length === 0) {
          this.game.creator.createItemList(true);
        }
        console.log(this.game.creator.items);
      }
    }
  }
}
