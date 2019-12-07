import { 
  createPayment,
  createToken, 
  getPayment,
  getPayments, 
  getToken
} from './rest';

export default class Paymongo {
  constructor (secret) {
    if (!secret) throw new Error('API is required!');
    this.secret = secret;
  }

  async createPayment (data) {
    return createPayment(this.secret, data);
  }

  async getPayment (id) {
    return getPayment(this.secret, id);
  }

  async getPayments () {
    return getPayments(this.secret);
  }

  async getToken (id) {
    return getToken(this.secret, id);
  }

  async createToken (data) {
    return createToken(this.secret, data);
  }
}