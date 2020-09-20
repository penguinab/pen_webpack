"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.includes");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var isHas = '666'.includes(2);
var p = new Promise(function (resolve, reject) {
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
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve(333);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function as() {
    return _ref.apply(this, arguments);
  };
}();