export default class Axis {

  constructor(config) {
    this._config = config
  }

  get title() {
    return this._title
  }

  set title(title) {
    this._title = title
  }

  // get labels() {
  //   return this._labels
  // }
  //
  // set labels(labels) {
  //   this._labels = labels
  // }

  get padding() {
    return this._padding
  }

  set padding(padding) {
    this._padding = padding
  }

  get styles() {
    return this._styles
  }

  set styles(styles) {
    this._styles = styles
  }

  get tickStyle() {
    return this._tickStyle
  }

  set tickStyle(tickStyle) {
    this._tickStyle = tickStyle
  }

  draw () {
    
  }

}
