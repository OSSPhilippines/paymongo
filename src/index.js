export default class Paymongo {
  constructor(secretKey) {
    if (!secretKey) throw new Error('API is required!');
    this.secretKey = secretKey;
  }

  createPayment () {
    console.log('Create Payment');
  }

  getPayment () {
    console.log('Get a Payment');
  }

  getPayments () {
    console.log('Get Payments');
  }

  getToken () {
    console.log('Get Token');
  }

  createToken () {
    console.log('Create Token');
  }
}