'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

var _series = require('./series');

var _series2 = _interopRequireDefault(_series);

var _legend = require('./legend');

var _legend2 = _interopRequireDefault(_legend);

var _slideWindow = require('./slide-window');

var _slideWindow2 = _interopRequireDefault(_slideWindow);

var _cursor = require('./cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _dataSource = require('./data-source');

var _dataSource2 = _interopRequireDefault(_dataSource);

var _plotter = require('./plotter');

var _plotter2 = _interopRequireDefault(_plotter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DPPX = window.devicePixelRatio || 1;

var Chart = function () {
  function Chart(config, target) {
    _classCallCheck(this, Chart);

    this._config = config;

    if (target) {
      // target이 문자열이면, document에서 해당 id를 가진 DOM Element를 찾는다.
      // target은 종국에 DOM Element 이어야한다.
      var target_element = null;

      if (typeof target == 'string') {
        // TODO uncomment followings
        target_element = document.getElementById(target);
        if (!target_element) throw 'target element \'' + target + '\' is not exist';

        if (target_element.firstChild) throw 'target element \'' + target + '\' already has children';
      } else {
        target_element = target;
      }

      target_element.style.cursor = "default";

      this.target = target_element;

      this._resizeHandler = this.resize.bind(this);
      window.addEventListener('resize', this._resizeHandler);
    }

    this.title = new Title(config);

    invalidate();
  }

  _createClass(Chart, [{
    key: 'dispose',
    value: function dispose() {
      // TODO Dispose를 효율적으로 처리할 수 있는 방법을 고안한다.
      if (this._target) {
        window.removeEventListener('resize', this._resizeHandler);

        this._target.removeChild(this._canvas);
        this._canvas = null;
      }
    }
  }, {
    key: 'resize',
    value: function resize() {

      if (this._canvas) {
        var target = this._canvas.parentNode;

        this._canvas.setAttribute('width', target.offsetWidth * DPPX);
        this._canvas.setAttribute('height', target.offsetHeight * DPPX);

        this._canvas.style.width = target.offsetWidth + 'px';
        this._canvas.style.height = target.offsetHeight + 'px';
      }
    }
  }, {
    key: 'invalidate',
    value: function invalidate() {
      this.draw();
    }
  }, {
    key: '_aroundBounds',
    value: function _aroundBounds(context, bounds, func) {
      context.traslate(bounds.left, bounds.top);

      func.call(this);

      context.traslate(-bounds.left, -bounds.top);
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      var _this = this;

      context = context || this.context;

      _aroundBounds(context, this.layout.titleBounds, function () {
        _this.title.draw(context);
      });

      _aroundBounds(context, this.layout.chartBounds, function () {});

      _aroundBounds(context, this.layout.legendBounds, function () {});

      _aroundBounds(context, this.layout.controlBounds, function () {});
    }
  }, {
    key: 'target',
    get: function get() {

      return this._target;
    },
    set: function set(target) {

      if (this._target) {
        this._target.removeChild(this._canvas);
      }

      this._target = target;

      if (!this._canvas) this._canvas = document.createElement('canvas');

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
    }
  }, {
    key: 'canvas',
    get: function get() {
      return this._canvas;
    }
  }, {
    key: 'layout',
    get: function get() {
      return this._layout;
    },
    set: function set(layout) {
      this._layout = layout;
    }
  }, {
    key: 'axes',
    get: function get() {
      return this._axes;
    },
    set: function set(axes) {
      this._axes = axes;
    }
  }, {
    key: 'series',
    get: function get() {
      return this._series;
    },
    set: function set(series) {
      this._series = series;
    }
  }, {
    key: 'legend',
    get: function get() {
      return this._legend;
    },
    set: function set(legend) {
      this._legend = legend;
    }
  }, {
    key: 'slideWindow',
    get: function get() {
      return this._slideWindow;
    },
    set: function set(slideWindow) {
      this._slideWindow = slideWindow;
    }
  }, {
    key: 'cursor',
    get: function get() {
      return this._cursor;
    },
    set: function set(cursor) {
      this._cursor = cursor;
    }
  }, {
    key: 'tootip',
    get: function get() {
      return this._tootip;
    },
    set: function set(tootip) {
      this._tootip = tootip;
    }
  }, {
    key: 'dataSource',
    get: function get() {
      return this._dataSource;
    },
    set: function set(dataSource) {
      this._dataSource = dataSource;
    }
  }, {
    key: 'plotters',
    get: function get() {
      return this._plotters;
    },
    set: function set(plotters) {
      this._plotters = plotters;
    }
  }, {
    key: 'title',
    get: function get() {
      return this._title;
    },
    set: function set(title) {
      this._title = title;
    }
  }, {
    key: 'context',
    get: function get() {
      return this._canvas && this._canvas.getContext('2d');
    }
  }]);

  return Chart;
}();

exports.default = Chart;