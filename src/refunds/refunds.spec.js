import { makeRequest } from '../utils/rest';
import { createRefund, retrieveRefund, listRefunds } from './refunds';
import faker from 'faker';
const fakePrivateKey = faker.random.uuid();

jest.mock('../utils/rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Refunds', () => {
  describe('|- createRefund', () => {
    const id = faker.random.uuid();
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      data: { id },
    }));

    it('should return object with id', async () => {
      const result = await createRefund(fakePrivateKey, { a: 1 });
      expect(result).toHaveProperty('data.id');
    });
    
    it('should throw', async () => {
      expect(createRefund(fakePrivateKey, {})).rejects.toEqual(expect.any(Error));
      expect(createRefund(fakePrivateKey, null)).rejects.toEqual(expect.any(Error));
      expect(createRefund(fakePrivateKey, undefined)).rejects.toEqual(expect.any(Error));
      expect(createRefund(fakePrivateKey, new Date())).rejects.toEqual(expect.any(Error));
      expect(createRefund(fakePrivateKey, [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- retrieveRefund', () => {
    const id = 'refund_123';
    it('should return object with id', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id,
      }));

      const result = await retrieveRefund(fakePrivateKey, id);
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual(id);
    });
  });


  describe('|- listRefunds', () => {
    it('should return data[]', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: [],
      }));

      const result = await listRefunds(fakePrivateKey, 'fake-id-123');
      expect(Array.isArray(result.data)).toBe(true);
    });
  });
});
