import { makeRequest } from '../utils/rest';
import { createPayment, retrievePayment, listPayments } from './payments';
import faker from 'faker';
const fakePrivateKey = faker.random.uuid();

jest.mock('../utils/rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Payments', () => {
  describe('|- createPayment', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      id: 'pay_123abc',
    }));

    it('should return object with id', async () => {
      const result = await createPayment(fakePrivateKey, { a: 1 });
      expect(result).toHaveProperty('id');
    });

    it('should throw', async () => {
      expect(createPayment(fakePrivateKey, {})).rejects.toEqual(expect.any(Error));
      expect(createPayment(fakePrivateKey, null)).rejects.toEqual(expect.any(Error));
      expect(createPayment(fakePrivateKey, undefined)).rejects.toEqual(expect.any(Error));
      expect(createPayment(fakePrivateKey, new Date())).rejects.toEqual(expect.any(Error));
      expect(createPayment(fakePrivateKey, [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- retrievePayment', () => {
    it('should return object with id', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id: 'pay_123abc',
      }));

      const result = await retrievePayment(fakePrivateKey, 'pay_123abc');
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual('pay_123abc');
    });
  });
  
  describe('|- listPayments', () => {
    it('should return data[]', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: [],
      }));

      const result = await listPayments(fakePrivateKey, 'pay_123abc');
      expect(Array.isArray(result.data)).toBe(true);
    });
  });
});