// const Paymongo = require('./dist');

// const paymongo = new Paymongo('sk_test_2h6QPgpJtPtW9Drc47bbaBe4');

// PAYMENT METHODS
// paymongo.paymentMethods.create({
//   data: {
//     attributes: {
//       type: 'card',
//       details: {
//         card_number: '4343434343434345',
//         exp_month: 1,
//         exp_year: 23,
//         cvc: '111',
//       },
//       metadata: {
//         joff: 'pogi'
//       }
//     }
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// paymongo.paymentMethods.retrieve('pm_JPo6NDxnNnd8xX8DHnzgocqK')
// .then(res => {
//   console.log(res.data.attributes);
// }).catch(err => {
//   console.log(err);
// });

// PAYMENT INTENTS

// paymongo.paymentIntents.create({
//   data: {
//     attributes: {
//       amount: 10000,
//       payment_method_allowed: ['card'],
//       currency: 'PHP'
//     }
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// paymongo.paymentIntents.retrieve('pi_JeH1tVbD4bjk97nbJfyoHQMs')
// .then(res => {
//   console.log(res.data.attributes);
// }).catch(err => {
//   console.log(err);
// });

// paymongo.paymentIntents.attach('pi_JeH1tVbD4bjk97nbJfyoHQMs', {
//   data: {
//     attributes: {
//       payment_method: 'pm_JPo6NDxnNnd8xX8DHnzgocqK',
//     }
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// SOURCES

// paymongo.sources.create({
//   data: {
//     attributes: {
//       type: 'gcash',
//       amount: 10000,
//       currency: 'PHP',
//       redirect: {
//         success: 'https://mycure.md',
//         failed: 'https://facebook.com'
//       }
//     }
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// PAYMENTS

// paymongo.payments.create({
//   data: {
//     attributes: {
//       amount: 10000,
//       currency: 'PHP',
//       source: {
//         id: 'src_wL2f1ej2Ci7CuYxUJy8Gwj5j',
//         type: 'source',
//       }
//     }
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// paymongo.payments.retrieve('pay_4f983Gw6eg48GY14TjmwGMVC')
// .then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// paymongo.payments.list()
// .then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// WEBHOOKS

// paymongo.webhooks.create({
//   data: {
//     attributes: {
//       url: 'https://mycure.md/foo',
//       events: ['source.chargeable']
//     }
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// paymongo.webhooks.retrieve('hook_zQQ2ALLh6bd5EfTWg5wfytFn').then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// paymongo.webhooks.list().then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// paymongo.webhooks.toggle('hook_zQQ2ALLh6bd5EfTWg5wfytFn', 'enable').then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });
