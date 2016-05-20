"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Legend = function () {
  function Legend(config) {
    _classCallCheck(this, Legend);

    this._config = config;
  }

  _createClass(Legend, [{
    key: "draw",
    value: function draw() {}
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    },
    set: function set(visible) {
      this._visible = visible;
    }
  }, {
    key: "direction",
    get: function get() {
      return this._direction;
    },
    set: function set(direction) {
      this._direction = direction;
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
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(position) {
      this._position = position;
    }
  }, {
    key: "style",
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