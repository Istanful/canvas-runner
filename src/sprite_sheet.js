class SpriteSheet {
  constructor(path, columnCount) {
    this.columnCount = columnCount;
    this.graphic = new Graphic(path);
  }

  getFrame(index) {
    return this.frames[index];
  }

  get frames() {
    if (!this._frames) {
      this._frames = Array.from(
        new Array(this.columnCount),
        (_el, i) => this.constructFrame(i)
      );
    }
    return this._frames;
  }

  constructFrame(index) {
    return Canvas.build(
      this.frameWidth,
      this.frameHeight,
      (ctx) => {
        ctx.drawImage(
          this.graphic.image,
          this.frameWidth * index,
          0,
          this.frameWidth,
          this.frameHeight,
          0,
          0,
          this.frameWidth,
          this.frameHeight,
        );
      }
    )
  }

  get frameWidth() {
    return this.graphic.image.width / this.columnCount;
  }

  get frameHeight() {
    return this.graphic.image.height;
  }
}
