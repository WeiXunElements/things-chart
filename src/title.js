export default class Title {

  constructor(config) {
    this._config = config
  }

  get align() {
    return this._align
  }

  set align(align) {
    this._align = align
  }

  get verticalAlign() {
    return this._verticalAlign
  }

  set verticalAlign(verticalAlign) {
    this._verticalAlign = verticalAlign
  }

  get floating() {
    return this._floating
  }

  set floating(floating) {
    this._floating = floating
  }

  get margin() {
    return this._margin
  }

  set margin(margin) {
    this._margin = new Margin(margin)
  }

  get style() {
    return this._style
  }

  set style(style) {
    this._style = style
  }

  get text() {
    return this._text
  }

  set text(text) {
    this._text = text
  }

  draw() {
    
  }

}
