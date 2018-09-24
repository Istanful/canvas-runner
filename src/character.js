class Character extends GameObject {
  constructor(name) {
    super(name);
    const graphic = new Graphic('assets/character.png');
    this.animation = new SpriteAnimation(new SpriteSheet(graphic, 5), 14);
    this.renderer = new Renderer(this);
    this.position = new Vector(0, 0);
  }

  update(time) {
    // this.position = this.position.add(new Vector(2, 0));
    super.update(time);
  }

  draw(time) {
    this.renderer.draw(this.position, time);
  }

  graphic(time) {
    return this.animation.nextValue(time);
  }
}
