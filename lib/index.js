'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluralize = pluralize;
exports.singularize = singularize;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inflection = (function () {
  function Inflection() {
    _classCallCheck(this, Inflection);

    throw 'You\'re trying to instantiate a singleton class';
  }

  _createClass(Inflection, null, [{
    key: 'enforce',
    value: function enforce(str, rules) {
      for (var i = 0; i < rules.length; ++i) {
        if (str.match(rules[i][0])) {
          str = str.replace(rules[i][0], rules[i][1]);
          break;
        }
      }

      return '' + str;
    }
  }]);

  return Inflection;
})();

Inflection.plural = [
// Child => Children
[new RegExp('(child)$', 'gi'), '$1ren'],
// Man => Men
[new RegExp('(m)an$', 'gi'), '$1en'],
// Person => People
[new RegExp('(pe)rson$', 'gi'), '$1ople'],
// Story => Stories
[new RegExp('([^aeiouy]|qu)y$', 'gi'), '$1ies'],
// Car => Cars
[new RegExp('$', 'gi'), 's']];
Inflection.singular = [
// Children => Child
[new RegExp('(child)ren$', 'gi'), '$1'],
// Men => Man
[new RegExp('(m)en$', 'gi'), '$1an'],
// People => Person
[new RegExp('(pe)ople$', 'gi'), '$1rson'],
// Stories => Story
[new RegExp('([^aeiouy]|qu)ies$', 'gi'), '$1y'],
// Cars => Car
[new RegExp('s$', 'gi'), '']];
function pluralize(str) {
  return Inflection.enforce(str, Inflection.plural);
}

function singularize(str) {
  return Inflection.enforce(str, Inflection.singular);
}