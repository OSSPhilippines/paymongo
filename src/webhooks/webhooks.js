import { makeRequest } from '../utils/rest';

/**
 * These are the required properties
 * @param {string} secret API private key
 * @param {Object} data Data payload
 * @param {Object} data.attributes Payload attributes
 * @param {string} data.attributes.url The destination URL of the events that happened from your account. Please make sure that the URL is publicly accessible in order for you to receive the event.
 * @param {string[]} data.attributes.events The list of events to be sent to this webhook. Possible value in the meantime is source.chargeable.
 */
export const createWebhook = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/webhooks`,
    data,
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id Webhook id
 */
export const retrieveWebhook = async (secret, id) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: `/webhooks/${id}`,
  });
};

/**
 * @param {string} secret API private key
 */
export const listWebhooks = async (secret) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: '/webhooks',
  });
};

/**
 * @param {string} secret API private key
 * @param {string} id Webhook id
 * @param {string} action Toggle options 'enable' or 'disable'
 */
export const toggleWebhook = async (secret, id, action) => {
  if (!id) throw new Error('Webhook id is required.');
  if (action !== 'enable' && action !== 'disable')
    throw new Error('Invalid action. Must be one of (\'enable\', \'disable\')');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/webhooks/${id}/${action}`,
  });
};
