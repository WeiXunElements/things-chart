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