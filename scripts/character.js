class Character {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.width = 125;
    this.height = 125;
    this.hp;
    this.invnFrames;

    this.game = game;
    this.image = new Image();
    this.image.src = '/images/Player.png';
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

  //TODO add enemy collision check

  useSpray() {}
}
