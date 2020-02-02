import { makeRequest } from './rest';

export const createSource = async (secret, data) => {
  if (!data) throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/sources`,
    data
  });
}
