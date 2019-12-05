'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paymongo = function () {
  function Paymongo(secretKey) {
    (0, _classCallCheck3.default)(this, Paymongo);

    if (!secretKey) throw new Error('API is required!');
    this.secretKey = secretKey;
  }

  Paymongo.prototype.createPayment = function createPayment() {
    console.log('Create Payment');
  };

  Paymongo.prototype.getPayment = function getPayment() {
    console.log('Get a Payment');
  };

  Paymongo.prototype.getPayments = function getPayments() {
    console.log('Get Payments');
  };

  Paymongo.prototype.getToken = function getToken() {
    console.log('Get Token');
  };

  Paymongo.prototype.createToken = function createToken() {
    console.log('Create Token');
  };

  return Paymongo;
}();

exports.default = Paymongo;