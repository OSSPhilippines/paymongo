import { makeRequest } from './rest';
import { createPayment, getPayment, getPayments } from './payments';

jest.mock('./rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Payments', () => {
  describe('|- createPayment', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      id: 'pay_123abc'
    }));

    it('should return object with id', async () => {

      const result = await createPayment('fake-private-key', { a: 1 });
      expect(result).toHaveProperty('id');
    });

    it('should throw', async () => {
      expect(createPayment('fake-private-key', {})).rejects.toEqual(expect.any(Error));
      expect(createPayment('fake-private-key', null)).rejects.toEqual(expect.any(Error));
      expect(createPayment('fake-private-key', undefined)).rejects.toEqual(expect.any(Error));
      expect(createPayment('fake-private-key', new Date())).rejects.toEqual(expect.any(Error));
      expect(createPayment('fake-private-key', [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- getPayment', () => {
    it('should return object with id', async () => {

      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id: 'pay_123abc'
      }));

      const result = await getPayment('fake-private-key', 'pay_123abc');
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual('pay_123abc');
    });
  });
  
  describe('|- getPayments', () => {
    it('should return data[]', async () => {

      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: []
      }));

      const result = await getPayments('fake-private-key', 'pay_123abc');
      expect(Array.isArray(result.data)).toBe(true);
    });
  });
});