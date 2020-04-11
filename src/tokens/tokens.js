import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param  {string} secret api private key
 * @param  {Object} data payload
 * @param {Object} data.attributes payload attributes
 * @param {string} data.attributes.number credit card number
 * @param {number} data.attributes.exp_month credit card expiry month `float`
 * @param {number} data.attributes.exp_year credit card expiry year `float`
 * @param {string} data.attributes.cvc credit card cvc
 */
export const createToken = async (secret, data) => {
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
 * @param {string} secret api private key
 * @param {string} id token id
 */
export const retrieveToken = async (secret, id) => {
  if (!id) throw new Error('Token id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/tokens/${id}`,
  });
};