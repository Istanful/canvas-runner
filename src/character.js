class Character extends GameObject {
  constructor(name) {
    super(name);
    const graphic = new Graphic('assets/character.png');
    this.animation = new SpriteAnimation(new SpriteSheet(graphic, 5), 14);
    this.renderer = new Renderer(this, this.animation.nextValue());
    this.body = new Body(new Vector(0, Drawer.canvas.height));
  }

  update(deltaTime) {
    this.body.update(deltaTime);
    this.renderer.graphic = this.animation.nextValue();
    super.update();
  }

  draw() {
    this.renderer.draw(this.body.position);
  }

  jump() {
    this.body.velocity = new Vector(0, -8);
  }
}
