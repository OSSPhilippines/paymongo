import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret API private key
 * @param {Object} data Data payload
 * @param {Object} data.attributes Payload attributes
 * @param {string} data.attributes.type The type of source. Possible values are gcash and grab_pay.
 * @param {number} data.attributes.amount Amount int32
 * @param {string} data.attributes.currency Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 * @param {Object} data.attributes.redirect
 * @param {string} data.attributes.redirect.success Success url
 * @param {string} data.attributes.redirect.failed Error url
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


/**
 * @param {string} secret API private key
 * @param {string} id Source id
 */
export const retrieveSource = async (secret, id) => {
  if (!id) throw new Error('Source id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/sources/${id}`,
  });
};