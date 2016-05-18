(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _src = require('./src');

var chart = _interopRequireWildcard(_src);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = ThingsChart;


if (typeof window !== 'undefined') window.ThingsChart = ThingsChart;

if (typeof global !== 'undefined') {
  global.ThingsChart = ThingsChart;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src":12}],2:[function(require,module,exports){
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Axis = function Axis() {
  _classCallCheck(this, Axis);
};

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

var Chart = function () {
  function Chart(config) {
    _classCallCheck(this, Chart);

    this._config = config;
  }

  _createClass(Chart, [{
    key: 'draw',
    value: function draw() {}
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
  }]);

  return Chart;
}();

exports.default = Chart;

},{"./axis":6,"./cursor":10,"./data-source":11,"./layout":13,"./legend":16,"./plotter":17,"./series":23,"./slide-window":24,"./tooltip":25}],8:[function(require,module,exports){
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

  function LineChart() {
    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LineChart).apply(this, arguments));
  }

  return LineChart;
}(_chart2.default);

exports.default = LineChart;

},{"../chart":7}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cursor = function Cursor() {
  _classCallCheck(this, Cursor);
};

exports.default = Cursor;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataSource = function DataSource() {
  _classCallCheck(this, DataSource);
};

exports.default = DataSource;

},{}],12:[function(require,module,exports){
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

},{"./animations/":4,"./area":5,"./axis":6,"./chart":7,"./charts/":8,"./cursor":10,"./data-source":11,"./layout":13,"./layouts/":15,"./legend":16,"./plotter":17,"./plotters/":19,"./point":22,"./series":23,"./slide-window":24,"./tooltip":25,"./volume":26}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function Layout() {
  _classCallCheck(this, Layout);
};

exports.default = Layout;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbsoluteLayout = function (_Layout) {
  _inherits(AbsoluteLayout, _Layout);

  function AbsoluteLayout() {
    _classCallCheck(this, AbsoluteLayout);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbsoluteLayout).apply(this, arguments));
  }

  return AbsoluteLayout;
}(_layout2.default);

exports.default = AbsoluteLayout;

},{"../layout":13}],15:[function(require,module,exports){
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

},{"./absolute":14}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Legend = function Legend() {
  _classCallCheck(this, Legend);
};

exports.default = Legend;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plotter = function Plotter() {
  _classCallCheck(this, Plotter);
};

exports.default = Plotter;

},{}],18:[function(require,module,exports){
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

},{"../plotter":17}],19:[function(require,module,exports){
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

},{"./bar":18,"./line":20,"./pie":21}],20:[function(require,module,exports){
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

},{"../plotter":17}],21:[function(require,module,exports){
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

},{"../plotter":17}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function Point() {
  _classCallCheck(this, Point);
};

exports.default = Point;

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Series = function Series() {
  _classCallCheck(this, Series);
};

exports.default = Series;

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlideWindow = function SlideWindow() {
  _classCallCheck(this, SlideWindow);
};

exports.default = SlideWindow;

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tootip = function Tootip() {
  _classCallCheck(this, Tootip);
};

exports.default = Tootip;

},{}],26:[function(require,module,exports){
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
