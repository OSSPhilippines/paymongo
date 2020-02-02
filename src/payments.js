import { makeRequest } from './rest';

export const createPayment = async (secret, data) => {
  if (!data) throw new Error('Data is required!');
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payments`,
    data
  });
}

export const getPayment = async (secret, id) => {
  if (!id) throw new Error('Payment id is required.');
  return makeRequest({
    secret,
    method: 'GET',
    path: `/payments/${id}`
  });
}

export const getPayments = async (secret) => {
  return makeRequest({
    secret,
    method: 'GET',
    path: '/payments'
  });
}