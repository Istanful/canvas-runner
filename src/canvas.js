class Canvas {
  static build(width, height, builder) {
    const canvas = document.createElement('canvas')
    canvas.width = width;
    canvas.height = height;
    builder(canvas.getContext('2d'))
    return canvas;
  }
}
