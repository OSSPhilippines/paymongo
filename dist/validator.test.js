"use strict";

var _validator = require("./validator");

// Token
test('#Create Token - valid payload', function () {
  expect((0, _validator.validateTokenPayload)({
    data: {
      attributes: {
        number: '4242424242424242',
        exp_month: 1,
        exp_year: 23,
        cvc: '111'
      }
    }
  })).toEqual({
    valid: true
  });
});
test('#Create Token - invalid payload', function () {
  expect((0, _validator.validateTokenPayload)(undefined)).toEqual({
    valid: false,
    message: 'Data must be an Object.'
  });
});
test('#Create Token - invalid payload - no data', function () {
  expect((0, _validator.validateTokenPayload)({})).toEqual({
    valid: false,
    message: 'Invalid payload. Missing \'data\' property.'
  });
});
test('#Create Token - invalid payload - no data.attributes', function () {
  expect((0, _validator.validateTokenPayload)({
    data: {}
  })).toEqual({
    valid: false,
    message: "Invalid payload. Missing 'data.attributes' property."
  });
}); // Payment

test('#Create Payment - valid payload', function () {
  expect((0, _validator.validatePaymentPayload)({
    data: {
      attributes: {
        amount: 10000,
        currency: 'PHP',
        source: {
          id: 'fake-id',
          type: 'token'
        }
      }
    }
  })).toEqual({
    valid: true
  });
});
test('#Create Payment - invalid payload', function () {
  expect((0, _validator.validatePaymentPayload)(undefined)).toEqual({
    valid: false,
    message: 'Data must be an Object.'
  });
});
test('#Create Payment - invalid payload - no data', function () {
  expect((0, _validator.validatePaymentPayload)({})).toEqual({
    valid: false,
    message: 'Invalid payload. Missing \'data\' property.'
  });
});
test('#Create Payment - invalid payload - no data.attributes', function () {
  expect((0, _validator.validatePaymentPayload)({
    data: {}
  })).toEqual({
    valid: false,
    message: "Invalid payload. Missing 'data.attributes' property."
  });
});