"use strict";

var _interopRequireDefault = require("C:/Users/penguin/Desktop/webpack_exercise/node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("C:/Users/penguin/Desktop/webpack_exercise/node_modules/@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("C:/Users/penguin/Desktop/webpack_exercise/node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("C:/Users/penguin/Desktop/webpack_exercise/node_modules/@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("C:/Users/penguin/Desktop/webpack_exercise/node_modules/@babel/runtime-corejs3/helpers/createClass"));

var _promise = _interopRequireDefault(require("C:/Users/penguin/Desktop/webpack_exercise/node_modules/@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("C:/Users/penguin/Desktop/webpack_exercise/node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _context;

var isHas = (0, _includes.default)(_context = '666').call(_context, 2);
var p = new _promise.default(function (resolve, reject) {
  console.log111(123);
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

var as = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _promise.default.resolve(333);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));

  return function as() {
    return _ref.apply(this, arguments);
  };
}();