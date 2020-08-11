import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @deprecated Tokens are now deprecated. https://developers.paymongo.com/reference#token-resource
 * @param {string} secret API private key
 * @param {Object} data Data payload
 * @param {Object} data.attributes Payload attributes
 * @param {string} data.attributes.number Credit card number
 * @param {number} data.attributes.exp_month Credit card expiry month `float`
 * @param {number} data.attributes.exp_year Credit card expiry year `float`
 * @param {string} data.attributes.cvc Credit card cvc
 */
export const createToken = async (secret, data) => {
  console.warn('Deprecated: Tokens are now deprecated. https://developers.paymongo.com/reference#token-resource');
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/tokens`,
    data,
  });
};

/**
 * @deprecated Tokens are now deprecated. https://developers.paymongo.com/reference#token-resource
 * @param {string} secret api private key
 * @param {string} id token id
 */
export const retrieveToken = async (secret, id) => {
  console.warn('Deprecated: Tokens are now deprecated. https://developers.paymongo.com/reference#token-resource');
  if (!id) throw new Error('Token id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/tokens/${id}`,
  });
};