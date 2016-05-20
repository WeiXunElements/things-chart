var registry = {}

export default class Plotter {

  static register(type, clazz) {
    if(!clazz)
      return registry[type]
    registry[type] = clazz
  }

  static create(config) {
    var clazz = Plotter.register((config && config.type) || 'line')
    return new clazz(config)
  }

  constructor(config) {
    this._config = config
  }

  draw(context, width, height) {
    context.fillStyle = 'gray'
    context.fillRect(0, 0, width, height)
  }

}
