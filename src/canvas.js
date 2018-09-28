class Canvas {
  static build(size, builder) {
    const canvas = document.createElement('canvas')
    canvas.width = size.x;
    canvas.height = size.y;
    builder(canvas.getContext('2d'))
    return canvas;
  }
}
