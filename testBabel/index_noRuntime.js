"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise"); //会全局污染的  Promise

require("core-js/modules/es.string.includes");

//babel转译的 一些工具函数 也没抽离出去
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isHas = '666'.includes(2);
var p = new Promise(function (resolve, reject) {
  console.log111(123);
  resolve(100);
});

var foo = /*#__PURE__*/function () {
  function foo() {
    _classCallCheck(this, foo);
  }

  _createClass(foo, [{
    key: "sayHI",
    value: function sayHI() {
      console.log('hi hi hi ~~~~');
    }
  }]);

  return foo;
}();

var ffff = new foo();
console.log(isHas, '-----', ffff.sayHI());