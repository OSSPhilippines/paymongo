import { makeRequest } from './rest';

/**
 * These are the required properties
 * @param  {strong} secret api private key
 * @param  {Object} data
 * @property {string} data.attributes.amount amount int32
 * @property {Object} source the source object from checkout
 * @property {string} source.id
 * @property {string} source.type
 */
export const createPayment = async (secret, data) => {
  if (!data) throw new Error('Data is required!');
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

export const getPayments = async (secret) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: '/payments'
  });
}