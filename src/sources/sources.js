import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param  {string} secret api private key
 * @param  {Object} data payload
 * @param {Object} data.attributes payload attributes
 * @param {string} data.attributes.type TODO: update this
 * @param {number} data.attributes.amount amount int32
 * @param {Object} data.attributes.redirect
 * @param {string} data.attributes.redirect.success success url
 * @param {string} data.attributes.redirect.failed error url
 */
export const createSource = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/sources`,
    data,
  });
};
