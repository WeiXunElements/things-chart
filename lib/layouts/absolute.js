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