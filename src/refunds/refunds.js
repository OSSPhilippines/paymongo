import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret API private key
 * @param {Object} data Data payload
 * @param {Object} data.attributes Payload attributes
 * @param {number} data.attributes.amount Amount of the refund. A positive integer with minimum amount of 100. See https://developers.paymongo.com/reference/create-a-refund
 * @param {string} data.attributes.notes Notes of the refund. You can use this value to save remarks about the refund. The maximum characters is 255.
 * @param {string} data.attributes.payment_id The ID of a Payment resource to be refunded.
 * @param {string} data.attributes.reason Reason for the refund. Possible values are duplicate, fraudulent, requested_by_customer and others.
 * @param {Object} data.attributes.metadata A set of key-value pairs that you can attach to the resource. This can be useful for storing additional information about the object in a structured format. Only string values are accepted.
 */
export const createRefund = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/refunds`,
    data,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id ID of a Refund
 */
export const retrieveRefund = async (secret, id) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: `/refunds/${id}`,
  });
};

/**
 * @param {string} secret API private key
 */
// TODO: implement query params
export const listRefunds = async (secret) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: '/refunds',
  });
};
