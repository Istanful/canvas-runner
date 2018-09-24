class Renderer {
  constructor(gameObject, graphic) {
    this.gameObject = gameObject;
    this.graphic = graphic;
  }

  draw(position) {
    Drawer.ctx.drawImage(
      this.graphic,
      position.x,
      position.y
    );
  }
}
