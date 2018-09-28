/**
 * Used for recording and subscribing on keyboard input.
 */
class KeyboardInput {
  /**
   * Add a function to be called whenever a specific button is pressed.
   * @param {string}   - The keycode to subscribe to.
   * @param {function} - The callback to be run each time the provided key is
   *                     pressed.
   */
  static on(keycode, callback) {
    this.actions = KeyboardInput.actions || {};
    this.actions[keycode] = this.actions[keycode] || [];
    this.actions[keycode].push(callback);
  }

  /**
   * Subscribe on the keydown events.
   * Calls the provided functions when an appropriate key is pressed.
   * @private
   */
  static subscribe() {
    document.addEventListener('keydown', (ev) => {
      if (this.actions[ev.key]) {
        this.actions[ev.key].forEach((action) => action());
      }
    })
  }
}
