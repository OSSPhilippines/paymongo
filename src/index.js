import { createToken, retrieveToken } from './tokens/index';
import { createSource } from './sources/index';
import { createPayment, getPayment, getPayments } from './payments/index';
import { createWebhook, getWebhooks, toggleWebhook, updateWebhook } from './webhooks/index';

export default class Paymongo {
  constructor (secret) {
    if (Paymongo.instance instanceof Paymongo) return Paymongo.instance;
    if (!secret) throw new Error('API key is required!');
    this.secret = secret;

    this.tokens = {
      create: createToken(this.secret, data),
      retrieve: retrieveToken(this.secret, id),
    };

    Object.freeze(this.secret);
    Object.freeze(this);
    Paymongo.instance = this;
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