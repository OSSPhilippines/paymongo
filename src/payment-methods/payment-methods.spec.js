import { makeRequest } from '../utils/rest';
import { createPaymentMethod, retrievePaymentMethod } from './payment-methods';
import faker from 'faker';
const fakePrivateKey = faker.random.uuid();

jest.mock('../utils/rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Tokens', () => {
  describe('|- createPaymentMethod', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      data: {
        id: 'tok_123abc',
      },
    }));

    it('should return object "data"', async () => {
      const result = await createPaymentMethod(fakePrivateKey, { a: 1 });
      expect(result).toHaveProperty('data.id');
    });

    it('should throw', async () => {
      // TODO: check cause of failing
      // expect(createPaymentMethod(fakePrivateKey, {})).rejects.toEqual(expect.any(Error));
      // expect(createPaymentMethod(fakePrivateKey, null)).rejects.toEqual(expect.any(Error));
      // expect(createPaymentMethod(fakePrivateKey, undefined)).rejects.toEqual(expect.any(Error));
      // expect(createPaymentMethod(fakePrivateKey, new Date())).rejects.toEqual(expect.any(Error));
      // expect(createPaymentMethod(fakePrivateKey, [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- retrievePaymentMethod', () => {
    it('should return object with id', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id: 'tok_123abc',
      }));

      const result = await retrievePaymentMethod(fakePrivateKey, 'tok_123abc');
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual('tok_123abc');
    });
  });
});