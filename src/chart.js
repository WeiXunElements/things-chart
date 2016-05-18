import Layout from './layout'
import Axis from './axis'
import Series from './series'
import Legend from './legend'
import SlideWindow from './slide-window'
import Cursor from './cursor'
import Tootip from './tooltip'
import DataSource from './data-source'

import Plotter from './plotter'

export default class Chart {

  constructor(config) {
    this._config = config
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

  draw() {

  }
}
