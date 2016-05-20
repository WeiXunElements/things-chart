import Layout from '../layout'

export default class AbsoluteLayout extends Layout {

  constructor(config, chart) {
    super(config)

    this._config = config
  }

  get titleBounds() {
    return {
      left: 0,
      top: 0,
      width: this.width,
      height: 100
    }
  }

  get chartBounds() {
    return {
      left: 0,
      top: 100,
      width: this.width,
      height: this.height - 200
    }
  }

  get legendBounds() {
    return {
      left: this.width -  300,
      top: 0,
      width: 300,
      height: 300
    }
  }

  get controlBounds() {
    return {
      left: 0,
      top: this.height - 100,
      width: this.width,
      height: 100
    }
  }
}

Layout.register('absolute', AbsoluteLayout)
