import { makeRequest } from './rest';

/**
 * These are the required properties
 * @param  {string} secret api private key
 * @param  {Object} data payload
 * @property {Object} data.attributes payload attributes
 * @property {number} data.attributes.amount amount int32
 * @property {Object} data.attributes.source the source object from checkout
 * @property {string} data.attributes.source.id
 * @property {string} data.attributes.source.type
 */
export const createPayment = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payments`,
    data
  });
}

/**
 * @param  {string} secret api private key
 * @param  {string} id payment id
 */
export const getPayment = async (secret, id) => {
  if (!id) throw new Error('Payment id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/payments/${id}`
  });

}
/**
 * @param  {string} secret api private key
 */
export const getPayments = async (secret) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: '/payments'
  });
}