export default class Control {

  static create(config) {
    return new Control(config)
  }

  constructor(config) {
    this._config = config
  }

  draw(context, width, height) {
    context.fillStyle = 'red'
    context.fillRect(0, 0, width, height)
  }

}
