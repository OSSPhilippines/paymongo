import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret api private key
 * @param {Object} data payload
 * @param {Object} data.attributes payload attributes
 * @param {number} data.attributes.amount amount int32
 * @param {number} data.attributes.currency Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 * @param {Object} data.attributes.source the source object from checkout
 * @param {string} data.attributes.source.id
 * @param {string} data.attributes.source.type
 */
export const createPayment = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payments`,
    data,
  });
};

/**
 * @param {string} secret api private key
 * @param {string} id payment id
 */
export const retrievePayment = async (secret, id) => {
  if (!id) throw new Error('Payment id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/payments/${id}`,
  });

};

/**
 * @param {string} secret api private key
 */
export const listPayments = async (secret) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: '/payments',
  });
};