import request from 'request';
import {
  validateTokenPayload,
  validatePaymentPayload
} from './validator';
const PAYMONGO_API_URL = 'https://api.paymongo.com/v1';

async function makeRequest (opts) {
  return new Promise((resolve, reject) => {
    const { secret, method, path, data } = opts;
    const options = {
      method,
      url: `${PAYMONGO_API_URL}/${path}`,
      json: true,
      auth: {
        username: secret,
        password: ''
      }
    };

    if (data) {
      options.body = data;
    }

    request(options, (err, res, body) => {
      if (err) reject(err);
      resolve(body);
    });
  });
}

export const createToken = async (secret, data) => {
  const validate = validateTokenPayload(data);
  if (!validate.valid) {
    throw new Error(validate.message);
  }
  return makeRequest({
    secret,
    method: 'POST',
    path: `/tokens`,
    data
  });
}

export const getToken = async (secret, id) => {
  if (!id) throw new Error(`Token id is required.`);
  return makeRequest({
    secret,
    method: 'GET',
    path: `/tokens/${id}`
  });
}

export const createPayment = async (secret, data) => {
  const validate = validatePaymentPayload(data);
  if (!validate.valid) {
    throw new Error(validate.message);
  }
  return makeRequest({
    secret,
    method: 'POST',
    path: `/payments`,
    data
  });
}

export const getPayment = async (secret, id) => {
  if (!id) throw new Error(`Payment id is required.`);
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