import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret API private key.
 * @param {Object} data The payload.
 * @param {Object} data.attributes Payload attributes.
 * @param {string} data.attributes.type The type of payment method. The possible value is card for now.
 * @param {string} data.attributes.details.card_number Credit/Debit Card number of the PaymentMethod.
 * @param {number} data.attributes.details.exp_month Expiry month of the Credit/Debit Card.
 * @param {number} data.attributes.details.exp_year Expiry year of the Credit/Debit Card.
 * @param {string} data.attributes.details.cvc CVC of the Credit/Debit Card.
 */
export const createPaymentMethod = (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payment_methods`,
    data,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id PaymentMethod id
 */
export const retrievePaymentMethod = (secret, id) => {
  if (!id) throw new Error('PaymentMethod id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/payment_methods/${id}`,
  });
};
