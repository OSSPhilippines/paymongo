import {
  validateTokenPayload,
  validatePaymentPayload
} from './validator';

// Token
test('#Create Token - valid payload', () => {
  expect(validateTokenPayload({
    data: {
      attributes: {
        number: '4242424242424242',
        exp_month: 1,
        exp_year: 23,
        cvc: '111'
      }
    }
  })).toEqual({ valid: true });
});

test('#Create Token - invalid payload', () => {
  expect(validateTokenPayload(undefined)).toEqual({
    valid: false,
    message: 'Data must be an Object.'
  });
});

test('#Create Token - invalid payload - no data', () => {
  expect(validateTokenPayload({})).toEqual({
    valid: false,
    message: 'Invalid payload. Missing \'data\' property.'
  });
});

test('#Create Token - invalid payload - no data.attributes', () => {
  expect(validateTokenPayload({
    data: {}
  })).toEqual({
    valid: false,
    message: `Invalid payload. Missing 'data.attributes' property.`
  });
});

// Payment
test('#Create Payment - valid payload', () => {
  expect(validatePaymentPayload({
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
  })).toEqual({ valid: true });
});

test('#Create Payment - invalid payload', () => {
  expect(validatePaymentPayload(undefined)).toEqual({
    valid: false,
    message: 'Data must be an Object.'
  });
});

test('#Create Payment - invalid payload - no data', () => {
  expect(validatePaymentPayload({})).toEqual({
    valid: false,
    message: 'Invalid payload. Missing \'data\' property.'
  });
});

test('#Create Payment - invalid payload - no data.attributes', () => {
  expect(validatePaymentPayload({
    data: {}
  })).toEqual({
    valid: false,
    message: `Invalid payload. Missing 'data.attributes' property.`
  });
});