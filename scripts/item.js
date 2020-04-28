class Item {
  constructor(id, game) {
    this.id = id;
    this.game = game;
    this.x;
    this.y;
    this.width = 75;
    this.height = 75;

    for (let product of this.game.creator.aisles) {
      if (product.id === this.id) {
        product.image.addEventListener('load', () => {
          let aisleLengthX = product.width / 75;
          let aisleLengthY = product.height / 75;
          let itemPosX = Math.floor(Math.random() * aisleLengthX);
          let itemPosY = Math.floor(Math.random() * aisleLengthY);
          this.x = product.x + 75 * itemPosX;
          this.y = product.y + 75 * itemPosY;
          console.log(product.width, product.height);
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

  draw() {
    this.game.context.save();
    this.game.context.fillStyle = 'blue';
    this.game.context.fillRect(this.x, this.y, 75, 75);
    this.game.context.restore();
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
