import { makeRequest } from './rest';

/**
 * These are the required properties
 * @param  {string} secret api private key
 * @param  {Object} data payload
 * @property {Object} data.attributes payload attributes
 * @property {string} data.attributes.number credit card number
 * @property {number} data.attributes.exp_month credit card expiry month `float`
 * @property {number} data.attributes.exp_year credit card expiry year `float`
 * @property {string} data.attributes.cvc credit card cvc
 */
export const createToken = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/tokens`,
    data
  });
}

/**
 * @param {string} secret api private key
 * @param {string} id token id
 */
export const getToken = async (secret, id) => {
  if (!id) throw new Error('Token id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/tokens/${id}`
  });
}