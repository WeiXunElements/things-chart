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