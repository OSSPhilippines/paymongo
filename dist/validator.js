"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePaymentPayload = exports.validateTokenPayload = void 0;
var requiredTokenFields = ['number', 'exp_month', 'exp_year', 'cvc'];
var requiredPaymentFields = ['amount', 'currency', 'source'];

function isObject(obj) {
  return !!obj && obj.constructor === Object;
}

function validatePayload(data) {
  if (!isObject(data)) {
    return {
      valid: false,
      message: 'Data must be an Object.'
    };
  }

  if (!data.hasOwnProperty('data')) {
    return {
      valid: false,
      message: 'Invalid payload. Missing \'data\' property.'
    };
  }

  if (!data.data.hasOwnProperty('attributes')) {
    return {
      valid: false,
      message: 'Invalid payload. Missing \'data.attributes\' property.'
    };
  }

  return {
    valid: true
  };
}

var validateTokenPayload = function validateTokenPayload(data) {
  var validate = validatePayload(data);

  if (!validate.valid) {
    return validate;
  }

  requiredTokenFields.forEach(function (field) {
    if (!data.data.attributes.hasOwnProperty(field)) {
      throw new Error("Invalid payload. Missing 'data.attributes.".concat(field, "' property."));
    }
  });
  return {
    valid: true
  };
};

exports.validateTokenPayload = validateTokenPayload;

var validatePaymentPayload = function validatePaymentPayload(data) {
  var validate = validatePayload(data);

  if (!validate.valid) {
    return validate;
  }

  requiredPaymentFields.forEach(function (field) {
    if (!data.data.attributes.hasOwnProperty(field) || field === 'source') {
      if (field === 'source' && data.data.attributes.source) {
        if (!data.data.attributes.source.hasOwnProperty('id')) {
          throw new Error("Invalid payload. Missing 'data.attributes.".concat(field, ".id' property."));
        }

        if (!data.data.attributes.source.hasOwnProperty('type')) {
          throw new Error("Invalid payload. Missing 'data.attributes.".concat(field, ".type' property."));
        }
      } else {
        throw new Error("Invalid payload. Missing 'data.attributes.".concat(field, "' property."));
      }
    }
  });
  return {
    valid: true
  };
};

exports.validatePaymentPayload = validatePaymentPayload;