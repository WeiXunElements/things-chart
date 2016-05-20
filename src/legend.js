export default class Legend {

  constructor(config) {
    this._config = config
  }

  get visible() {
    return this._visible
  }

  set visible(visible) {
    this._visible = visible
  }

  get direction() {
    return this._direction
  }

  set direction(direction) {
    this._direction = direction
  }

  get margin() {
    return this._margin
  }

  set margin(margin) {
    this._margin = new Margin(margin)
  }

  get position() {
    return this._position
  }

  set position(position) {
    this._position = position
  }

  get style() {
    return this._style
  }

  set style(style) {
    this._style = style
  }

  draw() {

  }

}
