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