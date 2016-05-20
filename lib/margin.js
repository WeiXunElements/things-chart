'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Margin = function (_Object) {
  _inherits(Margin, _Object);

  function Margin(config) {
    _classCallCheck(this, Margin);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Margin).call(this, config));

    Object.assign(_this, Margin.parse(config));
    return _this;
  }

  _createClass(Margin, null, [{
    key: 'parse',
    value: function parse(v) {

      // TODO: px 외 다른 단위에 대한 구현 필요여부 확인

      var parsed = v;

      if (!parsed) parsed = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };

      if (typeof parsed === 'number') parsed = String(parsed);

      if (typeof parsed === 'string') {
        var vArr = parsed.split(' ');

        if (vArr.length === 1) {
          parsed = {
            top: Number(vArr[0]),
            right: Number(vArr[0]),
            bottom: Number(vArr[0]),
            left: Number(vArr[0])
          };
        } else if (vArr.length === 2) {
          parsed = {
            top: Number(vArr[0]),
            right: Number(vArr[1]),
            bottom: Number(vArr[0]),
            left: Number(vArr[1])
          };
        } else if (vArr.length === 4) {
          parsed = {
            top: Number(vArr[0]),
            right: Number(vArr[1]),
            bottom: Number(vArr[2]),
            left: Number(vArr[3])
          };
        }
      }

      return parsed;
    }
  }]);

  return Margin;
}(Object);

exports.default = Margin;