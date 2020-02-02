import { makeRequest } from './rest';

export const createToken = async (secret, data) => {
  if (!data) throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/tokens`,
    data
  });
}

export const getToken = async (secret, id) => {
  if (!id) throw new Error('Token id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/tokens/${id}`
  });
}