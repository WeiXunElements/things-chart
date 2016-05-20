import Layout from './layout'
import Axis from './axis'
import Series from './series'
import Title from './title'
import Legend from './legend'
import Control from './control'
import SlideWindow from './slide-window'
import Cursor from './cursor'
import Tootip from './tooltip'
import DataSource from './data-source'

import Plotter from './plotter'

const DPPX = window.devicePixelRatio || 1

export default class Chart {

  constructor(config, target) {

    this._config = config

    this._title = Title.create(config.title)
    this._layout = Layout.create(config.layout)
    this._plotters = (config.series && config.series.map(s => {
      return Plotter.create(s)
    })) || []
    this._legend = Legend.create(config.legend)
    this._control = Control.create(config.control)

    if(target) {
      // target이 문자열이면, document에서 해당 id를 가진 DOM Element를 찾는다.
      // target은 종국에 DOM Element 이어야한다.
      var target_element = null;

      if(typeof(target) == 'string') {
        // TODO uncomment followings
        target_element = document.getElementById(target);
        if(!target_element)
          throw `target element '${target}' is not exist`

        if(target_element.firstChild)
          throw `target element '${target}' already has children`
      } else {
        target_element = target;
      }

      target_element.style.cursor = "default"

      this.target = target_element

      this._resizeHandler = this.resize.bind(this)
      window.addEventListener('resize', this._resizeHandler);
    }

    this.invalidate()
  }

  dispose() {

    this._control = null
    this._legend = null
    this._plotters = null
    this._layout = null
    this._title = null

    // TODO Dispose를 효율적으로 처리할 수 있는 방법을 고안한다.
    if(this._target) {
      window.removeEventListener('resize', this._resizeHandler)

      this._target.removeChild(this._canvas)
      this._canvas = null
    }
  }

  resize() {

    if(this._canvas) {
      var target = this._canvas.parentNode

      this._canvas.setAttribute('width', target.offsetWidth * DPPX)
      this._canvas.setAttribute('height', target.offsetHeight * DPPX)

      this._canvas.style.width = target.offsetWidth + 'px'
      this._canvas.style.height = target.offsetHeight + 'px'

      if(this._layout) {
        this._layout.width = target.offsetWidth * DPPX
        this._layout.height = target.offsetHeight * DPPX
      }
    }

    this.invalidate()
  }

  get target() {

    return this._target
  }

  set target(target) {

    if(this._target) {
      this._target.removeChild(this._canvas)
    }

    this._target = target;

    if(!this._canvas)
      this._canvas = document.createElement('canvas')

    /*
     * 캔바스의 크기 결정 순서
     * 1. 부모 엘리먼트의 크기에 따라 캔바스의 폭과 높이를 맞춘다.
     * 2. 캔바스의 스타일은 무조건, 부모 엘리먼트의 100%로 한다.
     */
    this._canvas.setAttribute('width', target.offsetWidth * DPPX);
    this._canvas.setAttribute('height', target.offsetHeight * DPPX);

    this._canvas.style.width = target.offsetWidth + 'px';
    this._canvas.style.height = target.offsetHeight + 'px';

    this._canvas.style.position = 'absolute';

    target.appendChild(this._canvas);

    this._layout.width = target.offsetWidth * DPPX
    this._layout.height = target.offsetHeight * DPPX
  }

  get canvas() {
    return this._canvas
  }

  get layout() {
    return this._layout
  }

  set layout(layout) {
    this._layout = layout
  }

  get axes() {
    return this._axes
  }

  set axes(axes) {
    this._axes = axes
  }

  get series() {
    return this._series
  }

  set series(series) {
    this._series = series
  }

  get legend() {
    return this._legend
  }

  set legend(legend) {
    this._legend = legend
  }

  get slideWindow() {
    return this._slideWindow
  }

  set slideWindow(slideWindow) {
    this._slideWindow = slideWindow
  }

  get cursor() {
    return this._cursor
  }

  set cursor(cursor) {
    this._cursor = cursor
  }

  get tootip() {
    return this._tootip
  }

  set tootip(tootip) {
    this._tootip = tootip
  }

  get dataSource() {
    return this._dataSource
  }

  set dataSource(dataSource) {
    this._dataSource = dataSource
  }

  get plotters() {
    return this._plotters
  }

  set plotters(plotters) {
    this._plotters = plotters
  }

  get title() {
    return this._title
  }

  set title(title) {
    this._title = title
  }

  get control() {
    return this._control
  }

  set control(control) {
    this._control = control
  }

  get context() {
    return this._canvas && this._canvas.getContext('2d');
  }

  invalidate() {
    this.draw()
  }

  _aroundBounds(context, bounds, func) {
    context.translate(bounds.left, bounds.top)

    func.call(this, bounds)

    context.translate(-bounds.left, -bounds.top)
  }

  draw(context) {
    context = context || this.context

    this._aroundBounds(context, this.layout.titleBounds, (bounds) => {
      this.title.draw(context, bounds.width, bounds.height)
    })

    this._aroundBounds(context, this.layout.chartBounds, (bounds) => {
      this.plotters.forEach(plotter => plotter.draw(context, bounds.width, bounds.height))
    })

    this._aroundBounds(context, this.layout.legendBounds, (bounds) => {
      this.legend.draw(context, bounds.width, bounds.height)
    })

    this._aroundBounds(context, this.layout.controlBounds, (bounds) => {
      this.control.draw(context, bounds.width, bounds.height)
    })
  }
}
