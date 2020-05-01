class Item {
  constructor(game) {
    this.game = game;
    this.x;
    this.y;
    this.velocityX = 0;
    this.velocityY = 0;
    this.width = 75;
    this.height = 75;

    this.image = new Image();
  }

  draw(url) {
    this.image.src = url;
    this.game.context.drawImage(this.image, this.x, this.y, 75, 75);
    // this.game.context.save();
    // this.game.context.fillStyle = color;
    // this.game.context.fillRect(this.x, this.y, 75, 75);
    // this.game.context.restore();
  }

  addVelocity(x, y) {
    this.velocityX = x;
    this.velocityY = y;
  }

  moveWithBG() {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.velocityX = this.velocityX / (1 + (15 / 1000) * 15);
    this.velocityY = this.velocityY / (1 + (15 / 1000) * 15);
    // switch (direction) {
    //   case 0:
    //     this.y += 5;
    //     break;
    //   case 1:
    //     this.x -= 5;
    //     break;
    //   case 2:
    //     this.y -= 5;
    //     break;
    //   case 3:
    //     this.x += 5;
    //     break;
    // }
  }
}

class Product extends Item {
  constructor(game, id) {
    super(game);
    this.id = id;
    for (let product of this.game.creator.aisles) {
      if (product.id === this.id) {
        product.image.addEventListener('load', () => {
          let aisleLengthX = product.width / 75;
          let aisleLengthY = product.height / 75;
          let itemPosX = Math.floor(Math.random() * aisleLengthX);
          let itemPosY = Math.floor(Math.random() * aisleLengthY);
          this.x = product.x + 75 * itemPosX;
          this.y = product.y + 75 * itemPosY;
        });
      }
    }
  }

  reDraw() {
    for (let product of this.game.creator.aisles) {
      if (product.id === this.id) {
        let aisleLengthX = product.width / 75;
        let aisleLengthY = product.height / 75;
        let itemPosX = Math.floor(Math.random() * aisleLengthX);
        let itemPosY = Math.floor(Math.random() * aisleLengthY);
        this.x = product.x + 75 * itemPosX;
        this.y = product.y + 75 * itemPosY;
        console.log(product.width, product.height);
      }
    }
  }

  draw(url) {
    super.draw(url);
  }

  moveWithBG() {
    super.moveWithBG();
  }
}

class Pickup extends Item {
  constructor(game, positions) {
    super(game);
    this.x = positions[0];
    this.y = positions[1];
  }

  draw(url) {
    super.draw(url);
  }

  moveWithBG() {
    super.moveWithBG();
  }
}
