"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
  function Layout(config) {
    _classCallCheck(this, Layout);

    this._config = config;
  }

  _createClass(Layout, [{
    key: "reflow",
    value: function reflow() {}
  }, {
    key: "titleBounds",
    get: function get() {}
  }, {
    key: "chartBounds",
    get: function get() {}
  }, {
    key: "legendBounds",
    get: function get() {}
  }, {
    key: "controlBounds",
    get: function get() {}
  }]);

  return Layout;
}();

exports.default = Layout;