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