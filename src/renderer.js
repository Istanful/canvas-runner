class Renderer {
  constructor(gameObject) {
    this.gameObject = gameObject;
  }

  get graphic() {
    return this.gameObject.graphic;
  }

  draw(position) {
    Game.drawer.ctx.drawImage(
      this.graphic,
      position.x,
      position.y
    );
  }
}
