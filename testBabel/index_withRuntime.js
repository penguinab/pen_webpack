"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _context;

var isHas = (0, _includes.default)(_context = '666').call(_context, 2);
var p = new _promise.default(function (resolve, reject) {
  console.log(123);
  resolve(100);
});

var foo = /*#__PURE__*/function () {
  function foo() {
    (0, _classCallCheck2.default)(this, foo);
  }

  (0, _createClass2.default)(foo, [{
    key: "sayHI",
    value: function sayHI() {
      console.log('hi hi hi ~~~~');
    }
  }]);
  return foo;
}();

var ffff = new foo();
console.log(isHas, '-----', ffff.sayHI());