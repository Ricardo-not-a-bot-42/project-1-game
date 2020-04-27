class Character {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 150;
    this.game = game;

    this.image = new Image();
    this.image.src = '/images/walls/Start Corner-Wall.png';
  }

  initialize() {
    this.image.addEventListener('load', () => {
      this.game.context.drawImage(this.image, this.x, this.y);
      this.width = this.image.width;
    });
  }

  draw() {
    this.game.context.drawImage(this.image, this.x, this.y);
  }
}
