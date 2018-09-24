class SpriteSheet {
  constructor(graphic, columnCount) {
    this.graphic = graphic;
    this.columnCount = columnCount;
  }

  getFrame(index) {
    const canvas = document.createElement('canvas')
    canvas.width = this.frameWidth;
    canvas.height = this.frameHeight;
    canvas.getContext('2d').drawImage(
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
    return canvas;
  }

  get frameWidth() {
    return this.graphic.image.width / this.columnCount;
  }

  get frameHeight() {
    return this.graphic.image.height;
  }
}
