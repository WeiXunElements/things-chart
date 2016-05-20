(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _src = require('./src');

var ThingsChart = _interopRequireWildcard(_src);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = ThingsChart;


if (typeof window !== 'undefined') window.ThingsChart = ThingsChart;

if (typeof global !== 'undefined') {
  global.ThingsChart = ThingsChart;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src":13}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animate;

var _delta = require('./delta');

var _delta2 = _interopRequireDefault(_delta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeEaseOut(delta, options) {
  return function (progress) {
    return 1 - delta(1 - progress, options);
  };
}

function makeEaseInOut(delta, options) {
  return function (progress) {
    if (progress < .5) return delta(2 * progress, options) / 2;else return (2 - delta(2 * (1 - progress), options)) / 2;
  };
}

function animate(opts) {
  var _opts$duration = opts.duration;
  var duration = _opts$duration === undefined ? 1000 : _opts$duration;
  var _opts$delay = opts.delay;
  var /* 1 sec by default */
  delay = _opts$delay === undefined ? 10 : _opts$delay;
  var step = opts.step;
  var /* step function */
  delta = opts.delta;
  var /* delta function */
  options = opts.options;
  var ease = opts.ease;


  if (typeof delta === 'string') delta = _delta2.default[delta];

  if (ease == 'out') delta = makeEaseOut(delta, options);else if (ease == 'inout') delta = makeEaseInOut(delta, options);

  var started = false;

  return {
    start: function start() {
      if (started) return this;

      started = true;

      var started_at = new Date();

      var id = setInterval(function () {
        var time_passed = new Date() - started_at;
        var progress = time_passed / duration;

        if (progress > 1) progress = 1;

        step(delta(progress, options));

        if (progress == 1 || !started) {
          clearInterval(id);
        }
      }, delay);

      return this;
    },

    stop: function stop() {
      started = false;

      return this;
    }
  };
}

},{"./delta":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = linear;
exports.quad = quad;
exports.circ = circ;
exports.back = back;
exports.bounce = bounce;
exports.elastic = elastic;
function linear(progress) {
  return progress;
}

function quad(progress) {
  return Math.pow(progress, 2);
}

function circ(progress) {
  return 1 - Math.sin(Math.acos(progress));
}

function back(progress, options) {
  return Math.pow(progress, 2) * ((options.x + 1) * progress - options.x);
}

function bounce(progress) {
  for (var a = 0, b = 1; 1; a += b, b /= 2) {
    if (progress >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function elastic(progress, options) {
  return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * options.x / 3 * progress);
}

exports.default = {
  'linear': linear,
  'quad': quad,
  'circ': circ,
  'back': back,
  'bounce': bounce,
  'elastic': elastic
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animate = require('./animate');

Object.defineProperty(exports, 'Animate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_animate).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./animate":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Area = function Area() {
  _classCallCheck(this, Area);
};

exports.default = Area;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Axis = function () {
  function Axis(config) {
    _classCallCheck(this, Axis);

    this._config = config;
  }

  _createClass(Axis, [{
    key: "draw",
    value: function draw() {}
  }, {
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(title) {
      this._title = title;
    }

    // get labels() {
    //   return this._labels
    // }
    //
    // set labels(labels) {
    //   this._labels = labels
    // }

  }, {
    key: "padding",
    get: function get() {
      return this._padding;
    },
    set: function set(padding) {
      this._padding = padding;
    }
  }, {
    key: "styles",
    get: function get() {
      return this._styles;
    },
    set: function set(styles) {
      this._styles = styles;
    }
  }, {
    key: "tickStyle",
    get: function get() {
      return this._tickStyle;
    },
    set: function set(tickStyle) {
      this._tickStyle = tickStyle;
    }
  }]);

  return Axis;
}();

exports.default = Axis;

},{}],7:[function(require,module,exports){
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

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _legend = require('./legend');

var _legend2 = _interopRequireDefault(_legend);

var _control = require('./control');

var _control2 = _interopRequireDefault(_control);

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

    this._title = _title2.default.create(config.title);
    this._layout = _layout2.default.create(config.layout);
    this._plotters = config.series && config.series.map(function (s) {
      return _plotter2.default.create(s);
    }) || [];
    this._legend = _legend2.default.create(config.legend);
    this._control = _control2.default.create(config.control);

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

    this.invalidate();
  }

  _createClass(Chart, [{
    key: 'dispose',
    value: function dispose() {

      this._control = null;
      this._legend = null;
      this._plotters = null;
      this._layout = null;
      this._title = null;

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

        if (this._layout) {
          this._layout.width = target.offsetWidth * DPPX;
          this._layout.height = target.offsetHeight * DPPX;
        }
      }

      this.invalidate();
    }
  }, {
    key: 'invalidate',
    value: function invalidate() {
      this.draw();
    }
  }, {
    key: '_aroundBounds',
    value: function _aroundBounds(context, bounds, func) {
      context.translate(bounds.left, bounds.top);

      func.call(this, bounds);

      context.translate(-bounds.left, -bounds.top);
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      var _this = this;

      context = context || this.context;

      this._aroundBounds(context, this.layout.titleBounds, function (bounds) {
        _this.title.draw(context, bounds.width, bounds.height);
      });

      this._aroundBounds(context, this.layout.chartBounds, function (bounds) {
        _this.plotters.forEach(function (plotter) {
          return plotter.draw(context, bounds.width, bounds.height);
        });
      });

      this._aroundBounds(context, this.layout.legendBounds, function (bounds) {
        _this.legend.draw(context, bounds.width, bounds.height);
      });

      this._aroundBounds(context, this.layout.controlBounds, function (bounds) {
        _this.control.draw(context, bounds.width, bounds.height);
      });
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

      this._layout.width = target.offsetWidth * DPPX;
      this._layout.height = target.offsetHeight * DPPX;
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
    key: 'control',
    get: function get() {
      return this._control;
    },
    set: function set(control) {
      this._control = control;
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

},{"./axis":6,"./control":10,"./cursor":11,"./data-source":12,"./layout":14,"./legend":17,"./plotter":18,"./series":24,"./slide-window":25,"./title":26,"./tooltip":27}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _line = require('./line');

Object.defineProperty(exports, 'LineChart', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_line).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./line":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chart = require('../chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChart = function (_Chart) {
  _inherits(LineChart, _Chart);

  function LineChart(config) {
    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LineChart).call(this, config));

    // TODO :
  }

  return LineChart;
}(_chart2.default);

exports.default = LineChart;

},{"../chart":7}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Control = function () {
  _createClass(Control, null, [{
    key: 'create',
    value: function create(config) {
      return new Control(config);
    }
  }]);

  function Control(config) {
    _classCallCheck(this, Control);

    this._config = config;
  }

  _createClass(Control, [{
    key: 'draw',
    value: function draw(context, width, height) {
      context.fillStyle = 'red';
      context.fillRect(0, 0, width, height);
    }
  }]);

  return Control;
}();

exports.default = Control;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cursor = function Cursor() {
  _classCallCheck(this, Cursor);
};

exports.default = Cursor;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataSource = function () {
  function DataSource(config) {
    _classCallCheck(this, DataSource);

    this._config = config;
  }

  _createClass(DataSource, [{
    key: "filterBy",
    value: function filterBy() {}
  }, {
    key: "fields",
    get: function get() {
      return this._fields;
    },
    set: function set(fields) {
      this._fields = fields;
    }
  }]);

  return DataSource;
}();

exports.default = DataSource;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _point = require('./point');

Object.defineProperty(exports, 'Point', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_point).default;
  }
});

var _area = require('./area');

Object.defineProperty(exports, 'Area', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_area).default;
  }
});

var _volume = require('./volume');

Object.defineProperty(exports, 'Volume', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_volume).default;
  }
});

var _layout = require('./layout');

Object.defineProperty(exports, 'Layout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_layout).default;
  }
});

var _axis = require('./axis');

Object.defineProperty(exports, 'Axis', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_axis).default;
  }
});

var _series = require('./series');

Object.defineProperty(exports, 'Series', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_series).default;
  }
});

var _legend = require('./legend');

Object.defineProperty(exports, 'Legend', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_legend).default;
  }
});

var _control = require('./control');

Object.defineProperty(exports, 'Control', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_control).default;
  }
});

var _slideWindow = require('./slide-window');

Object.defineProperty(exports, 'SlideWindow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_slideWindow).default;
  }
});

var _cursor = require('./cursor');

Object.defineProperty(exports, 'Cursor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cursor).default;
  }
});

var _tooltip = require('./tooltip');

Object.defineProperty(exports, 'Tootip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

var _dataSource = require('./data-source');

Object.defineProperty(exports, 'DataSource', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dataSource).default;
  }
});

var _plotter = require('./plotter');

Object.defineProperty(exports, 'Plotter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_plotter).default;
  }
});

var _chart = require('./chart');

Object.defineProperty(exports, 'Chart', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chart).default;
  }
});

var _animations = require('./animations/');

Object.keys(_animations).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animations[key];
    }
  });
});

var _layouts = require('./layouts/');

Object.keys(_layouts).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layouts[key];
    }
  });
});

var _plotters = require('./plotters/');

Object.keys(_plotters).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _plotters[key];
    }
  });
});

var _charts = require('./charts/');

Object.keys(_charts).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _charts[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./animations/":4,"./area":5,"./axis":6,"./chart":7,"./charts/":8,"./control":10,"./cursor":11,"./data-source":12,"./layout":14,"./layouts/":16,"./legend":17,"./plotter":18,"./plotters/":20,"./point":23,"./series":24,"./slide-window":25,"./tooltip":27,"./volume":28}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var registry = {};

var Layout = function () {
  _createClass(Layout, null, [{
    key: 'register',
    value: function register(type, clazz) {
      if (!clazz) return registry[type];
      registry[type] = clazz;
    }
  }, {
    key: 'create',
    value: function create(config) {
      var clazz = Layout.register(config && config.type || 'absolute');
      return new clazz(config);
    }
  }]);

  function Layout(config) {
    _classCallCheck(this, Layout);

    this._config = config;
  }

  _createClass(Layout, [{
    key: 'width',
    get: function get() {
      return this._width;
    },
    set: function set(width) {
      this._width = width;
    }
  }, {
    key: 'height',
    get: function get() {
      return this._height;
    },
    set: function set(height) {
      this._height = height;
    }
  }, {
    key: 'titleBounds',
    get: function get() {}
  }, {
    key: 'chartBounds',
    get: function get() {}
  }, {
    key: 'legendBounds',
    get: function get() {}
  }, {
    key: 'controlBounds',
    get: function get() {}
  }]);

  return Layout;
}();

exports.default = Layout;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbsoluteLayout = function (_Layout) {
  _inherits(AbsoluteLayout, _Layout);

  function AbsoluteLayout(config, chart) {
    _classCallCheck(this, AbsoluteLayout);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbsoluteLayout).call(this, config));

    _this._config = config;
    return _this;
  }

  _createClass(AbsoluteLayout, [{
    key: 'titleBounds',
    get: function get() {
      return {
        left: 0,
        top: 0,
        width: this.width,
        height: 100
      };
    }
  }, {
    key: 'chartBounds',
    get: function get() {
      return {
        left: 0,
        top: 100,
        width: this.width,
        height: this.height - 200
      };
    }
  }, {
    key: 'legendBounds',
    get: function get() {
      return {
        left: this.width - 300,
        top: 0,
        width: 300,
        height: 300
      };
    }
  }, {
    key: 'controlBounds',
    get: function get() {
      return {
        left: 0,
        top: this.height - 100,
        width: this.width,
        height: 100
      };
    }
  }]);

  return AbsoluteLayout;
}(_layout2.default);

exports.default = AbsoluteLayout;


_layout2.default.register('absolute', AbsoluteLayout);

},{"../layout":14}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _absolute = require('./absolute');

Object.defineProperty(exports, 'AbsoluteLayout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_absolute).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./absolute":15}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Legend = function () {
  _createClass(Legend, null, [{
    key: 'create',
    value: function create(config) {
      return new Legend(config);
    }
  }]);

  function Legend(config) {
    _classCallCheck(this, Legend);

    this._config = config;
  }

  _createClass(Legend, [{
    key: 'draw',
    value: function draw(context, width, height) {
      context.fillStyle = 'blue';
      context.fillRect(0, 0, width, height);
    }
  }, {
    key: 'visible',
    get: function get() {
      return this._visible;
    },
    set: function set(visible) {
      this._visible = visible;
    }
  }, {
    key: 'direction',
    get: function get() {
      return this._direction;
    },
    set: function set(direction) {
      this._direction = direction;
    }
  }, {
    key: 'margin',
    get: function get() {
      return this._margin;
    },
    set: function set(margin) {
      this._margin = new Margin(margin);
    }
  }, {
    key: 'position',
    get: function get() {
      return this._position;
    },
    set: function set(position) {
      this._position = position;
    }
  }, {
    key: 'style',
    get: function get() {
      return this._style;
    },
    set: function set(style) {
      this._style = style;
    }
  }]);

  return Legend;
}();

exports.default = Legend;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var registry = {};

var Plotter = function () {
  _createClass(Plotter, null, [{
    key: 'register',
    value: function register(type, clazz) {
      if (!clazz) return registry[type];
      registry[type] = clazz;
    }
  }, {
    key: 'create',
    value: function create(config) {
      var clazz = Plotter.register(config && config.type || 'line');
      return new clazz(config);
    }
  }]);

  function Plotter(config) {
    _classCallCheck(this, Plotter);

    this._config = config;
  }

  _createClass(Plotter, [{
    key: 'draw',
    value: function draw(context, width, height) {
      context.fillStyle = 'gray';
      context.fillRect(0, 0, width, height);
    }
  }]);

  return Plotter;
}();

exports.default = Plotter;

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plotter = require('../plotter');

var _plotter2 = _interopRequireDefault(_plotter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarPlotter = function (_Plotter) {
  _inherits(BarPlotter, _Plotter);

  function BarPlotter() {
    _classCallCheck(this, BarPlotter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarPlotter).apply(this, arguments));
  }

  return BarPlotter;
}(_plotter2.default);

exports.default = BarPlotter;


_plotter2.default.register('bar', BarPlotter);

},{"../plotter":18}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _line = require('./line');

Object.defineProperty(exports, 'LinePlotter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_line).default;
  }
});

var _bar = require('./bar');

Object.defineProperty(exports, 'BarPlotter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bar).default;
  }
});

var _pie = require('./pie');

Object.defineProperty(exports, 'PiePlotter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pie).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./bar":19,"./line":21,"./pie":22}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plotter = require('../plotter');

var _plotter2 = _interopRequireDefault(_plotter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinePlotter = function (_Plotter) {
  _inherits(LinePlotter, _Plotter);

  function LinePlotter() {
    _classCallCheck(this, LinePlotter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LinePlotter).apply(this, arguments));
  }

  return LinePlotter;
}(_plotter2.default);

exports.default = LinePlotter;


_plotter2.default.register('line', LinePlotter);

},{"../plotter":18}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plotter = require('../plotter');

var _plotter2 = _interopRequireDefault(_plotter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PiePlotter = function (_Plotter) {
  _inherits(PiePlotter, _Plotter);

  function PiePlotter() {
    _classCallCheck(this, PiePlotter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PiePlotter).apply(this, arguments));
  }

  return PiePlotter;
}(_plotter2.default);

exports.default = PiePlotter;


_plotter2.default.register('pie', PiePlotter);

},{"../plotter":18}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function Point(config) {
  _classCallCheck(this, Point);

  this._config = config;
};

exports.default = Point;

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Series = function () {
  function Series(config) {
    _classCallCheck(this, Series);

    this._config = config;
  }

  _createClass(Series, [{
    key: "labelField",
    get: function get() {
      return this._labelField;
    },
    set: function set(labelField) {
      this._labelField = labelField;
    }
  }, {
    key: "valueField",
    get: function get() {
      return this._valueField;
    },
    set: function set(valueField) {
      this._valueField = valueField;
    }
  }, {
    key: "caption",
    get: function get() {
      return this._caption;
    },
    set: function set(caption) {
      this._caption = caption;
    }
  }]);

  return Series;
}();

exports.default = Series;

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlideWindow = function SlideWindow() {
  _classCallCheck(this, SlideWindow);
};

exports.default = SlideWindow;

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Title = function () {
  _createClass(Title, null, [{
    key: "create",
    value: function create(config) {
      return new Title(config);
    }
  }]);

  function Title(config) {
    _classCallCheck(this, Title);

    this._config = config;
  }

  _createClass(Title, [{
    key: "draw",
    value: function draw(context, width, height) {
      context.font = "30px Arial";
      context.fillText("Hello World", 10, 50);
    }
  }, {
    key: "align",
    get: function get() {
      return this._align;
    },
    set: function set(align) {
      this._align = align;
    }
  }, {
    key: "verticalAlign",
    get: function get() {
      return this._verticalAlign;
    },
    set: function set(verticalAlign) {
      this._verticalAlign = verticalAlign;
    }
  }, {
    key: "floating",
    get: function get() {
      return this._floating;
    },
    set: function set(floating) {
      this._floating = floating;
    }
  }, {
    key: "margin",
    get: function get() {
      return this._margin;
    },
    set: function set(margin) {
      this._margin = new Margin(margin);
    }
  }, {
    key: "style",
    get: function get() {
      return this._style;
    },
    set: function set(style) {
      this._style = style;
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(text) {
      this._text = text;
    }
  }]);

  return Title;
}();

exports.default = Title;

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tootip = function () {
  function Tootip(config) {
    _classCallCheck(this, Tootip);

    this._config = config;
  }

  _createClass(Tootip, [{
    key: "draw",
    value: function draw() {}
  }]);

  return Tootip;
}();

exports.default = Tootip;

},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Volume = function Volume() {
  _classCallCheck(this, Volume);
};

exports.default = Volume;

},{}]},{},[1]);
