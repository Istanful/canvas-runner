class KeyboardInput {
  static on(keycode, callback) {
    this.actions = KeyboardInput.actions || {};
    this.actions[keycode] = this.actions[keycode] || [];
    this.actions[keycode].push(callback);
  }

  static subscribe() {
    document.addEventListener('keydown', (ev) => {
      if (this.actions[ev.key]) {
        this.actions[ev.key].forEach((action) => action());
      }
    })
  }
}
