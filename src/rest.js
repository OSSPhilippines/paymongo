import request from 'request';
const PAYMONGO_API_URL = 'https://api.paymongo.com/v1';

export const makeRequest = async (opts) => {
  return new Promise((resolve, reject) => {
    const { secret, method, path, data } = opts;
    const options = {
      method,
      url: `${PAYMONGO_API_URL}/${path}`,
      json: true,
      auth: {
        username: secret,
        password: ''
      }
    };

    if (data) {
      options.body = data;
    }

    request(options, (err, res, body) => {
      if (err) reject(err);
      if (body.errors) {
        reject({
          ...body.errors[0],
          message: body.errors[0].detail
        });
      }
      resolve(body);
    });
  });
}
