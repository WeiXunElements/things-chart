export default class Series {

  constructor(config) {
    this._config = config
  }

  get labelField() {
    return this._labelField
  }

  set labelField(labelField) {
    this._labelField = labelField
  }

  get valueField() {
    return this._valueField
  }

  set valueField(valueField) {
    this._valueField = valueField
  }

  get caption() {
    return this._caption
  }

  set caption(caption) {
    this._caption = caption
  }

}
