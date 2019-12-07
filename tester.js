// const Paymongo = require('./dist').default;

// const paymongo = new Paymongo('sk_test_2h6QPgpJtPtW9Drc47bbaBe4');

// CREATE TOKEN
// paymongo.createToken({
//   data: {
//     attributes: {
//       number: '4242424242424242',
//       exp_month: 1,
//       exp_year: 23,
//       cvc: '111'
//     }
//   }
// }).then(res => {
//   console.log(res);
// }).catch(error => {
//   console.log(error);
// });

// GET TOKEN
// paymongo.getToken('tok_KudDURimm4f723FcSfMEwU7t').then(res => {
//   console.log(res);
// }).catch(error => {
//   console.log(error);
// });

// CREATE PAYMENT
// paymongo.createPayment({
//   data: {
//     attributes: {
//       amount: 10000,
//       currency: 'PHP',
//       description: '1 month premium subscription',
//       statement_descriptor: 'MYCURE Premium',
//       source: {
//         id: 'tok_KudDURimm4f723FcSfMEwU7t',
//         type: 'token'
//       }
//     }
//   }
// }).then(res => {
//   console.log(res);
// }).catch(error => {
//   console.log(error.message);
// });

// GET PAYMENT
// paymongo.getPayment('pay_vLFZMHubC49poHKp5g7M4jfW').then(res => {
//   console.log(res);
// }).catch(error => {
//   console.log(error);
// });

// GET PAYMENTS
// paymongo.getPayments().then(res => {
//   console.log(res);
// }).catch(error => {
//   console.log(error);
// });

