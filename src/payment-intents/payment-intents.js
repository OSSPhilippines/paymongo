import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret API private key.
 * @param {Object} data The payload.
 * @param {Object} data.attributes Payload attributes.
 * @param {number} data.attributes.amount Amount to be collected by the PaymentIntent.
 * @param {string[]} data.attributes.payment_method_allowed The list of payment method types that the PaymentIntent is allowed to use. Possible value is card for now.
 * @param {string} data.attributes.currency Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 */
export const createPaymentIntent = (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payment_intents`,
    data,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id PaymentIntent id
 */
export const retrievePaymentIntent = (secret, id) => {
  if (!id) throw new Error('PaymentIntent id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/payment_intents/${id}`,
  });
};

/**
 * These are the required properties
 * @param {string} secret API private key.
 * @param {string} id PaymentIntent id.
 * @param {Object} data The payload.
 * @param {Object} data.attributes Payload attributes.
 * @param {string} data.attributes.payment_method Id of PaymentMethod to attach to the PaymentIntent.
 */
export const attachToPaymentIntent = (secret, id, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payment_intents/${id}/attach`,
    data,
  });
};


/**
 * @param {string} secret API private key
 * @param {string} id PaymentIntent id
 */
 export const capturePaymentIntent = (secret, id) => {
  if (!id) throw new Error('PaymentIntent id is required.');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payment_intents/${id}/capture`,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id PaymentIntent id
 */
 export const cancelPaymentIntent = (secret, id) => {
  if (!id) throw new Error('PaymentIntent id is required.');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payment_intents/${id}/cancel`,
  });
};
