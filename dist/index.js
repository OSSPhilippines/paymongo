"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("@babel/runtime/regenerator/index.js"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass.js"));

var _rest = require("./rest");

var Paymongo =
/*#__PURE__*/
function () {
  function Paymongo(secret) {
    (0, _classCallCheck2["default"])(this, Paymongo);
    if (!secret) throw new Error('API is required!');
    this.secret = secret;
  }

  (0, _createClass2["default"])(Paymongo, [{
    key: "createPayment",
    value: function createPayment(data) {
      return (0, _rest.createPayment)(this.secret, data);
    }
  }, {
    key: "getPayment",
    value: function getPayment(id) {
      return (0, _rest.getPayment)(this.secret, id);
    }
  }, {
    key: "getPayments",
    value: function getPayments() {
      return (0, _rest.getPayments)(this.secret);
    }
  }, {
    key: "getToken",
    value: function getToken(id) {
      return _index["default"].async(function getToken$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", (0, _rest.getToken)(this.secret, id));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "createToken",
    value: function createToken(data) {
      return (0, _rest.createToken)(this.secret, data);
    }
  }]);
  return Paymongo;
}();

exports["default"] = Paymongo;