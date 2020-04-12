# Paymongo for Node.js

A lighweight Node.js client for Paymongo API.

As seen on Paymongo's [community-made libraries](https://developers.paymongo.com/docs/community-made-libraries). :heart:

If you like this project, please give it a star, and consider following the author. :)

![npm bundle size](https://img.shields.io/bundlephobia/min/paymongo?style=flat-square) ![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/jofftiquez/paymongo/Deploy/master?label=test&style=flat-square) ![npm](https://img.shields.io/npm/v/paymongo?style=flat-square) ![npm](https://img.shields.io/npm/dw/paymongo?style=flat-square)

- [Installation](#installation)
- [Usage](#usage)
- [Payment Methods](#payment-methods)
  - [Create](#payment-methods---create)
  - [Retrieve](#payment-methods---retrieve)
- [Payment Intents](#payment-intents)
  - [Create](#payment-intents---create)
  - [Retrieve](#payment-intents---retrieve)
- [Sources](#sources)
  - [Create](#sources-create)
- [Payments](#payments)
  - [Create](#payments-create)
  - [List](#payments-list)
  - [Retrieve](#payments-retrieve)
- [Tokens (Deprecated)](#tokens)
- [Webhooks](#webhooks)
  - [Create](#webhooks-create)
  - [List](#webhooks-list)
  - [Retrieve](#webhooks-retrieve)
  - [Toggle (Enable or Disable)](#webhooks-toggle)
- [Test Cards](#test-cards)
- [Change Logs](#change-logs)
- [FAQs](#faqs)

### INSTALLATION

```bash
$ npm install paymongo
```

```bash
$ yarn add paymongo
```

### USAGE

```javascript
import Paymongo from 'paymongo';

// Retrieve the secret key from your paymongo 
// dashboard under developers tab.
const paymongo = new Paymongo(process.env.SECRET_KEY);
```

### PAYMENT METHODS

[Official Docs](https://developers.paymongo.com/reference#the-payment-method-object)

A `PaymentMethod` resource describes which payment method was used to fulfill a payment. It is used with a `PaymentIntent` to collect payments.

> `paymongo.paymentMethods`

#### Payment Methods - Create

```javascript
/**
 * These are the required properties
 * @param {Object} data The payload.
 * @param {Object} data.attributes Payload attributes.
 * @param {string} data.attributes.type The type of payment method. The possible value is card for now.
 * @param {string} data.attributes.details.card_number Credit/Debit Card number of the PaymentMethod.
 * @param {number} data.attributes.details.exp_month Expiry month of the Credit/Debit Card.
 * @param {number} data.attributes.details.exp_year Expiry year of the Credit/Debit Card.
 * @param {string} data.attributes.details.cvc CVC of the Credit/Debit Card.
 */
const result = await paymongo.paymentMethods.create(data);
```

*Payload*

```js
{
  data: {
    attributes: {
      type: 'card' // The only available type for now is 'card'.
      details: {
        card_number: '4343434343434345',
        exp_month: 02,
        exp_year: 23,
        cvc: '123',
      }
    }
  }
}
```

#### Payment Methods - Retrieve

```javascript
/**
 * @param {string} id The PaymentMethod id
 */
const result = await paymongo.paymentMethods.retrieve(id);
```

### PAYMENT INTENTS

[Official Docs](https://developers.paymongo.com/reference#the-payment-intent-object)

A `PaymentIntent` resource is used to track and handle different states of the payment until it succeeds.

> `paymongo.paymentIntents`

#### Payment Intents - Create

```javascript
/**
 * These are the required properties
 * @param {Object} data The payload.
 * @param {Object} data.attributes Payload attributes.
 * @param {number} data.attributes.amount Amount to be collected by the PaymentIntent.
 * @param {string[]} data.attributes.payment_method_allowed The list of payment method types that the PaymentIntent is allowed to use. Possible value is card for now.
 * @param {string} data.attributes.currency Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 */
const result = await paymongo.paymentIntents.create(data);
```

*Payload*

```javascript
{
  data: {
    attributes: {
      amount: 10000, // 10000 or 100 in money value is the smallest allowed amount.
      currency: 'PHP', // Three-letter ISO currency code. Only supports PHP for now.
      payment_method_allowed: ['card'] // The only available value for now is 'card'.
    }
  }
}
```

#### Payment Intents - Retrieve

```javascript
/**
 * @param {string} id token id
 */
const result = await paymongo.paymentIntents.retrieve(id);
```

**Attach to PaymentIntent**

```javascript
/**
 * These are the required properties
 * @param {string} id PaymentIntent id.
 * @param {Object} data The payload.
 * @param {Object} data.attributes Payload attributes.
 * @param {string} data.attributes.payment_method Id of PaymentMethod to attach to the PaymentIntent.
 */
const result = await paymongo.paymentIntents.attach(id, data);
```

*Payload*

```javascript
{
  data: {
    attributes: {
      payment_method: 'abc123'
    }
  }
}
```

### SOURCES

[Official Docs](https://developers.paymongo.com/reference#the-sources-object)

A Source is a resource to generate your customer's payment instrument. This is normally used to generate check out URLs for e-wallet payments. To learn more about e-wallet integrations, you can visit [GCash](https://developers.paymongo.com/docs/accepting-gcash-payments) or [GrabPay](https://developers.paymongo.com/docs/accepting-grabpay-payments) integration.

> `paymongo.sources`

#### Sources - Create

```javascript
/**
 * These are the required properties
 * @param {Object} data payload
 * @param {Object} data.attributes payload attributes
 * @param {string} data.attributes.type The type of source. Possible values are gcash and grab_pay.
 * @param {number} data.attributes.amount amount int32
 * @param {string} data.attributes.currency Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 * @param {Object} data.attributes.redirect
 * @param {string} data.attributes.redirect.success success url
 * @param {string} data.attributes.redirect.failed error url
 */
const result = await paymongo.sources.create(data);
```

*Payload*

```javascript
{
  data: {
    attributes: {
      type: 'gcash',
      amount: 20000, // PHP200,
      currency: 'PHP',
      redirect: {
        success: 'https://yoururl.com/success',
        failed: 'https://yoururl.com/failed'
      }
    }
  }
}
```

### PAYMENTS

[Official Docs](https://developers.paymongo.com/reference#payment-source)

A `Payment` resource is an attempt by your customer to send you money in exchange for your product. This is a reference to an amount that you are expecting to receive if a payment resource with paid status becomes a part of a payout. If the payment status is `failed`, you can determine the reason for failure.

> `paymongo.payments`

#### Payments - Create

```javascript
/**
 * These are the required properties
 * @param {Object} data payload
 * @param {Object} data.attributes payload attributes
 * @param {number} data.attributes.amount amount int32
 * @param {number} data.attributes.currency Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 * @param {Object} data.attributes.source the source object from checkout
 * @param {string} data.attributes.source.id id of a Source resource
 * @param {string} data.attributes.source.type type of a Source resource. Possible value is 'source'.
 */
const result = await paymongo.payments.create(data);
```

*Payload*

```javascript
{
  data: {
    attributes: {
      amount: 30000,
      currency: 'PHP',
      source: {
        id: 'abc', // Id of the Source resource.
        type: 'source', // 
      }
    }
  }
}
```

#### Payments - List

```javascript
const result = await paymongo.payments.list();
```

*Result*

```javascript
{
  data: [] // array of payments
}
```

#### Payments - Retrieve

```javascript
/**
 * @param {string} id payment id
 */
const result = await paymongo.payments.retrieve();
```

### TOKENS

> DEPRECATED

[Official Docs](https://developers.paymongo.com/reference#token-resource)

### WEBHOOKS

[Official Docs](https://developers.paymongo.com/reference#enable-a-webhook)

A `Webhook` resource primarily refers to a certain URL where we send events that are happening from your account. You can check our [GCash](https://developers.paymongo.com/docs/accepting-gcash-payments) and [GrabPay](https://developers.paymongo.com/docs/accepting-grabpay-payments) integrations to find out some good use cases for webhooks.

> `paymongo.webhooks`

#### Webhooks - Create

```javascript
/**
 * These are the required properties
 * @param {Object} data payload
 * @param {Object} data.attributes payload attributes
 * @param {string} data.attributes.url The destination URL of the events that happened from your account. Please make sure that the URL is publicly accessible in order for you to receive the event.
 * @param {string[]} data.attributes.events The list of events to be sent to this webhook. Possible value in the meantime is source.chargeable.
 */
const result = await paymongo.webhooks.create(data);
```

*Payload*

```javascript
{
  data: {
    attributes: {
      url: 'https://yourwebsite.com/webook-listener', // Developer's note: this is unique in paymongo. You can't create multiple webhooks with same url.
      events: ['source.chargeable'] // The only event supported for now is 'source.chargeable'.
    }
  }
}
```

#### Webhooks - List

```javascript
const result = await paymongo.webhooks.list();
```

*Result*

```javascript
{
  data: [] // Array of webhooks
}
```

#### Webhooks - Retrieve

```javascript
/**
 * @param {string} id Webhook id
 */
const result = await paymongo.webhooks.retrieve(id);
```

#### Webhooks - Toggle

Enable or disable a webhook.

```javascript
/**
 * @param {string} id webhook id
 * @param {string} action 'enable' or 'disable'
 */
const result = await paymongo.webhooks.toggle(id, action);
```

### TEST CARDS

| Card Number | Brand | CVC | Expiration Date |
| ----------- | ----- | --- | --------------- |
| 4343434343434345 | Visa | Any 3 digits | Any future date |
| 4571736000000075 | Visa (debit) | Any 3 digits | Any future date |
| 5555444444444457 | Mastercard | Any 3 digits | Any future date |
| 2221000000000918 | Mastercard (2-series) | Any 3 digits | Any future date |
| 5455590000000009 | Mastercard (debit) | Any 3 digits | Any future date |
| 5339080000000003 | Mastercard (prepaid) | Any 3 digits | Any future date |

More cards [here](https://developers.paymongo.com/docs/testing), including [3D Secure Test Cards](https://developers.paymongo.com/docs/testing#section-3-d-secure-test-card-numbers).

### CHANGE LOGS

- New syntax patterned with Stripe's Node.js library.
- Enhanced method verbs
- Depricated **Tokens**. See deprecation note [here](https://developers.paymongo.com/reference#token-resource).

### FAQs

- How to make payment using gcash or grabpay?
  - GCash guide - https://developers.paymongo.com/docs/accepting-gcash-payments
  - GrabPay guide - https://developers.paymongo.com/docs/accepting-grabpay-payments

- How to test a webhook?
  - I have a web application still in development for testing any webooks. Follow this repo for updates.

Made with :heart: by Jofferson Ramirez Tiquez
