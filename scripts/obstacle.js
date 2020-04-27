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
    this.height = 0;
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

  checkCollision(player, nextX, nextY) {
    return (
      player.y + player.height / 2 < nextY + this.height &&
      player.y + player.height > nextY &&
      player.x + player.width > nextX &&
      player.x < nextX + this.width
    );
  }

  move(direction) {
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
