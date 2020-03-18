import { makeRequest } from './rest';

/**
 * These are the required properties
 * @param  {string} secret api private key
 * @param  {Object} data payload
 * @property {Object} data.attributes payload attributes
 * @property {string} data.attributes.url hook url
 * @property {string[]} data.attributes.events array of events
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
 * @param  {string} secret api private key
 */
export const getWebhooks = async (secret) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: '/webhooks',
  });
};

/**
 * @param  {string} secret api private key
 * @param  {string} action 'enable' or 'disable'
 * @param  {string} id webhook id
 */
export const toggleWebhook = async (secret, action, id) => {
  if (!id) throw new Error('Webhook id is required.');
  if (action !== 'enable' && action !== 'disable')
    throw new Error('Invalid action. Must be on of (\'enable\', \'disable\')');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/webhooks/${id}/${action}`,
  });
};

/**
 * These are the required properties
 * @param  {string} secret api private key
 * @param  {Object} data payload
 * @property {Object} data.attributes payload attributes
 * @property {string} data.attributes.url hook url
 */
export const updateWebhook = async (secret, data) => {
  if (Object.entries(data).length === 0 || !data.constructor === Object) 
    throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'PUT',
    path: `/webhooks`,
    data,
  });
};