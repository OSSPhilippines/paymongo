import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret API private key
 * @param {Object} data Data payload
 * @param {Object} data.attributes Payload attributes see full refence https://developers.paymongo.com/reference/links-resource#a-link-resource
 */
export const createLink = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/links`,
    data,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id ID of a Refund
 */
export const retrieveLink = async (secret, id) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: `/links/${id}`,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} reference_number The unique identifier of the PayMongo link checkout URL.
 */
 export const getLinkByReference = async (secret, reference_number) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: `/links?reference_number=${reference_number}`,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id ID of a Refund
 */
 export const archiveLink = async (secret, id) => {
  return makeRequest({
    secret,
    method: 'POST',
    path: `/links/${id}/archive`,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id ID of a Refund
 */
 export const unarchiveLink = async (secret, id) => {
  return makeRequest({
    secret,
    method: 'POST',
    path: `/links/${id}/unarchive`,
  });
};
