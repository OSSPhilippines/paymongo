import { makeRequest } from '../utils/rest';
import { createToken, getToken } from './tokens';

jest.mock('../utils/rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Tokens', () => {
  describe('|- createToken', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      data: {
        id: 'tok_123abc',
      },
    }));

    it('should return object "data"', async () => {
      const result = await createToken('fake-private-key', { a: 1 });
      expect(result).toHaveProperty('data.id');
    });

    it('should throw', async () => {
      expect(createToken('fake-private-key', {})).rejects.toEqual(expect.any(Error));
      expect(createToken('fake-private-key', null)).rejects.toEqual(expect.any(Error));
      expect(createToken('fake-private-key', undefined)).rejects.toEqual(expect.any(Error));
      expect(createToken('fake-private-key', new Date())).rejects.toEqual(expect.any(Error));
      expect(createToken('fake-private-key', [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- getToken', () => {
    it('should return object with id', async () => {

      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id: 'tok_123abc',
      }));

      const result = await getToken('fake-private-key', 'tok_123abc');
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual('tok_123abc');
    });
  });
});