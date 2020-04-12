import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret api private key
 * @param {Object} data payload
 * @param {Object} data.attributes payload attributes
 * @param {string} data.attributes.type The type of source. Possible values are gcash and grab_pay.
 * @param {number} data.attributes.amount amount int32
 * @param {string} data.attributes.currency Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
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
