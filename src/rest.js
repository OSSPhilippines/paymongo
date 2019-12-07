import axios from 'axios';
import {
  validateTokenPayload,
  validatePaymentPayload
} from './validator';
const PAYMONGO_API_URL = 'https://api.paymongo.com/v1';

export const createToken = async (secret, data) => {
  const validate = validateTokenPayload(data);
  if (!validate.valid) {
    throw new Error(validate.message);
  }
  const res = await axios({
    method: 'post',
    url: `${PAYMONGO_API_URL}/tokens`,
    auth: {
      username: secret,
      password: ''
    },
    data
  });
  
  return res.data;
}

export const getToken = async (secret, id) => {
  if (!id) throw new Error(`Token id is required.`);
  const res = await axios({
    method: 'get',
    url: `${PAYMONGO_API_URL}/tokens/${id}`,
    auth: {
      username: secret,
      password: ''
    }
  });

  return res.data;
}

export const createPayment = async (secret, data) => {
  const validate = validatePaymentPayload(data);
  if (!validate.valid) {
    throw new Error(validate.message);
  }
  const res = await axios({
    method: 'post',
    url: `${PAYMONGO_API_URL}/payments`,
    auth: {
      username: secret,
      password: ''
    },
    data
  });
  
  return res.data;
}

export const getPayment = async (secret, id) => {
  if (!id) throw new Error(`Payment id is required.`);
  const res = await axios({
    method: 'get',
    url: `${PAYMONGO_API_URL}/payments/${id}`,
    auth: {
      username: secret,
      password: ''
    }
  });

  return res.data;
}

export const getPayments = async (secret) => {
  const res = await axios({
    method: 'get',
    url: `${PAYMONGO_API_URL}/payments`,
    auth: {
      username: secret,
      password: ''
    }
  });

  return res.data;
}