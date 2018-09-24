class Character extends GameObject {
  constructor(name) {
    super(name);
    const graphic = new Graphic('assets/character.png');
    this.animation = new SpriteAnimation(new SpriteSheet(graphic, 5), 14);
    this.renderer = new Renderer(this, this.animation.nextValue());
    this.position = new Vector(0, 0);
  }

  update() {
    // this.position = this.position.add(new Vector(2, 0));
    this.renderer.graphic = this.animation.nextValue();
    super.update();
  }

  draw() {
    this.renderer.draw(this.position);
  }
}
