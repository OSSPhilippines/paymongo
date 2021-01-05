import bent from 'bent';
const PAYMONGO_API_URL = 'https://api.paymongo.com/v1';

export const makeRequest = async (opts) => {
  const {
    data,
    method,
    path,
    secret,
  } = opts;

  /**
   * Construct authorization header using secret key
   */
  const headers = {
    'Authorization': `Basic ${Buffer.from(secret).toString('base64')}`,
  };
  
  /**
   * Construct the base request function
   */
  const request = bent(PAYMONGO_API_URL, (method || 'GET'), 'json', headers, 200);

  /**
   * Require API endpoint option
   */
  if (!path) throw new Error('API endpoint required');

  /**
   * Define endpoint-specific parameter array
   */
  const requestOptions = [
    path,
  ];

  /**
   * For requests that requires payloads, push the payload
   * to the request parameter array
   */
  if (data) {
    requestOptions.push(data);
  }

  /**
   * Call endpoint and return promise returned
   */
  return request(...requestOptions)
    .catch(async err => {
      /**
       * Error-handling is based on the previous implementation
       */
      const { errors } = await err.json();
      const [firstError] = errors;

      throw {
        ...firstError,
        message: firstError.detail,
      };
    });
};
