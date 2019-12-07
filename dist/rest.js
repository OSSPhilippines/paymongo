"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPayments = exports.getPayment = exports.createPayment = exports.getToken = exports.createToken = void 0;

var _index = _interopRequireDefault(require("@babel/runtime/regenerator/index.js"));

var _axios = _interopRequireDefault(require("axios"));

var _validator = require("./validator");

var PAYMONGO_API_URL = 'https://api.paymongo.com/v1';

var createToken = function createToken(secret, data) {
  var validate, res;
  return _index["default"].async(function createToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          validate = (0, _validator.validateTokenPayload)(data);

          if (validate.valid) {
            _context.next = 3;
            break;
          }

          throw new Error(validate.message);

        case 3:
          _context.next = 5;
          return _index["default"].awrap((0, _axios["default"])({
            method: 'post',
            url: "".concat(PAYMONGO_API_URL, "/tokens"),
            auth: {
              username: secret,
              password: ''
            },
            data: data
          }));

        case 5:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createToken = createToken;

var getToken = function getToken(secret, id) {
  var res;
  return _index["default"].async(function getToken$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (id) {
            _context2.next = 2;
            break;
          }

          throw new Error("Token id is required.");

        case 2:
          _context2.next = 4;
          return _index["default"].awrap((0, _axios["default"])({
            method: 'get',
            url: "".concat(PAYMONGO_API_URL, "/tokens/").concat(id),
            auth: {
              username: secret,
              password: ''
            }
          }));

        case 4:
          res = _context2.sent;
          return _context2.abrupt("return", res.data);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getToken = getToken;

var createPayment = function createPayment(secret, data) {
  var validate, res;
  return _index["default"].async(function createPayment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          validate = (0, _validator.validatePaymentPayload)(data);

          if (validate.valid) {
            _context3.next = 3;
            break;
          }

          throw new Error(validate.message);

        case 3:
          _context3.next = 5;
          return _index["default"].awrap((0, _axios["default"])({
            method: 'post',
            url: "".concat(PAYMONGO_API_URL, "/payments"),
            auth: {
              username: secret,
              password: ''
            },
            data: data
          }));

        case 5:
          res = _context3.sent;
          return _context3.abrupt("return", res.data);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.createPayment = createPayment;

var getPayment = function getPayment(secret, id) {
  var res;
  return _index["default"].async(function getPayment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (id) {
            _context4.next = 2;
            break;
          }

          throw new Error("Payment id is required.");

        case 2:
          _context4.next = 4;
          return _index["default"].awrap((0, _axios["default"])({
            method: 'get',
            url: "".concat(PAYMONGO_API_URL, "/payments/").concat(id),
            auth: {
              username: secret,
              password: ''
            }
          }));

        case 4:
          res = _context4.sent;
          return _context4.abrupt("return", res.data);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getPayment = getPayment;

var getPayments = function getPayments(secret) {
  var res;
  return _index["default"].async(function getPayments$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _index["default"].awrap((0, _axios["default"])({
            method: 'get',
            url: "".concat(PAYMONGO_API_URL, "/payments"),
            auth: {
              username: secret,
              password: ''
            }
          }));

        case 2:
          res = _context5.sent;
          return _context5.abrupt("return", res.data);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.getPayments = getPayments;