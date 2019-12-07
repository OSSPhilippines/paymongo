import { 
  createPayment,
  createToken, 
  getPayment,
  getPayments, 
  getToken
} from './rest';

export default class Paymongo {
  constructor(secret) {
    if (!secret) throw new Error('API is required!');
    this.secret = secret;
  }

  createPayment (data) {
    return createPayment(this.secret, data);
  }

  getPayment (id) {
    return getPayment(this.secret, id);
  }

  getPayments () {
    return getPayments(this.secret);
  }

  async getToken (id) {
    return getToken(this.secret, id);
  }

  createToken (data) {
    return createToken(this.secret, data);
  }
}