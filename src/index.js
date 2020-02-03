import { createToken, getToken } from './tokens';
import { createSource } from './sources';
import { createPayment, getPayment, getPayments } from './payments';
import { createWebhook, getWebhooks, toggleWebhook, updateWebhook } from './webhooks';

export default class Paymongo {
  constructor (secret) {
    if (Paymongo.instance instanceof Paymongo) return Paymongo.instance;
    if (!secret) throw new Error('API key is required!');
    this.secret = secret;
    Object.freeze(this.secret);
    Object.freeze(this);
    Paymongo.instance = this;
  }

  // TOKENS
  async createToken (data) {
    return createToken(this.secret, data);
  }

  async getToken (id) {
    return getToken(this.secret, id);
  }

  // SOURCES
  async createSource (data) {
    return createSource(this.secret, data);
  }

  // PAYMENTS
  async createPayment (data) {
    return createPayment(this.secret, data);
  }

  async getPayment (id) {
    return getPayment(this.secret, id);
  }

  async getPayments (data) {
    return getPayments(this.secret, data);
  }

  // WEBHOOKS
  async createWebhook (data) {
    return createWebhook(this.secret, data);
  }
  
  async getWebhooks () {
    return getWebhooks(this.secret);
  }
  
  async toggleWebhook (action, id) {
    return toggleWebhook(this.secret, action, id);
  }
  
  async updateWebhook (data) {
    return updateWebhook(this.secret, data);
  }
}