class Obstacle {
  constructor(x, y, id, source, game) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.source = source;
    this.game = game;
    this.image = new Image();
    this.image.src = source;
    this.width = 0;
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
