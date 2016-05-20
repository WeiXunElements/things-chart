"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Title = function () {
  function Title(config) {
    _classCallCheck(this, Title);

    this._config = config;
  }

  _createClass(Title, [{
    key: "draw",
    value: function draw(context) {
      ctx.font = "30px Arial";
      ctx.fillText("Hello World", 10, 50);
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