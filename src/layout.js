var registry = {}

export default class Layout {

  static register(type, clazz) {
    if(!clazz)
      return registry[type]
    registry[type] = clazz
  }

  static create(config) {
    var clazz = Layout.register((config && config.type) || 'absolute')
    return new clazz(config)
  }

  constructor(config) {
    this._config = config
  }

  get width() {
    return this._width
  }

  set width(width) {
    this._width = width
  }

  get height() {
    return this._height
  }

  set height(height) {
    this._height = height
  }

  get titleBounds() {
  }

  get chartBounds() {
  }

  get legendBounds() {
  }

  get controlBounds() {
  }

}
