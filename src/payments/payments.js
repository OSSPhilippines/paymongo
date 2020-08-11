import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret API private key
 * @param {Object} data Data payload
 * @param {Object} data.attributes Payload attributes
 * @param {number} data.attributes.amount Amount int32
 * @param {number} data.attributes.currency Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 * @param {Object} data.attributes.source The source object from checkout
 * @param {string} data.attributes.source.id Id of a Source resource
 * @param {string} data.attributes.source.type Type of a Source resource. Possible value is 'source'.
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
 * @param {string} secret API private key
 * @param {string} id Payment id
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
 * @param {string} secret API private key
 */
export const listPayments = async (secret) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: '/payments',
  });
};