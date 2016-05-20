export default class DataSource {

  constructor(config) {
    this._config = config
  }

  get fields() {
    return this._fields
  }

  set fields(fields) {
    this._fields = fields
  }

  filterBy() {
    
  }

}
