import { makeRequest } from './rest';

/**
 * These are the required properties
 * @param  {string} secret api private key
 * @param  {Object} data payload
 * @property {Object} data.attributes payload attributes
 * @property {string} data.attributes.type TODO: update this
 * @property {number} data.attributes.amount amount int32
 * @property {Object} data.attributes.redirect
 * @property {string} data.attributes.redirect.success success url
 * @property {string} data.attributes.redirect.failed error url
 */
export const createSource = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/sources`,
    data
  });
}
