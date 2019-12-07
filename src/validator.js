const requiredTokenFields = [
  'number',
  'exp_month',
  'exp_year',
  'cvc'
];

const requiredPaymentFields = [
  'amount',
  'currency',
  'source'
];

function isObject (obj) {
  return (!!obj) && (obj.constructor === Object);
}

function validatePayload (data) {
  if (!isObject(data)) {
    return {
      valid: false,
      message: 'Data must be an Object.'
    }
  }

  if (!data.hasOwnProperty('data')) {
    return {
      valid: false,
      message: 'Invalid payload. Missing \'data\' property.'
    }
  }

  if (!data.data.hasOwnProperty('attributes')) {
    return {
      valid: false,
      message: 'Invalid payload. Missing \'data.attributes\' property.'
    }
  }

  return { valid: true };
}

export const validateTokenPayload = (data) => {
  const validate = validatePayload(data);

  if (!validate.valid) {
    return validate;
  } 

  requiredTokenFields.forEach(field => {
    if (!data.data.attributes.hasOwnProperty(field)) {
      throw new Error(`Invalid payload. Missing 'data.attributes.${field}' property.`);
    }
  });  

  return { valid: true };
}

export const validatePaymentPayload = (data) => {
  const validate = validatePayload(data);

  if (!validate.valid) {
    return validate;
  } 

  requiredPaymentFields.forEach(field => {
    if (!data.data.attributes.hasOwnProperty(field) || field === 'source') {
      if (field === 'source' && data.data.attributes.source) {
        if (!data.data.attributes.source.hasOwnProperty('id')) {
          throw new Error(`Invalid payload. Missing 'data.attributes.${field}.id' property.`);  
        }
        if (!data.data.attributes.source.hasOwnProperty('type')) {
          throw new Error(`Invalid payload. Missing 'data.attributes.${field}.type' property.`);  
        }
      } else {
        throw new Error(`Invalid payload. Missing 'data.attributes.${field}' property.`);
      }
    }
  });  

  return { valid: true };
}