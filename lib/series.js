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