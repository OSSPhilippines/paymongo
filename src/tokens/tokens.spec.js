import { makeRequest } from '../utils/rest';
import { createToken, retrieveToken } from './tokens';
import faker from 'faker';
const fakePrivateKey = faker.random.uuid();

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
      const result = await createToken(fakePrivateKey, { a: 1 });
      expect(result).toHaveProperty('data.id');
    });

    it('should throw', async () => {
      expect(createToken(fakePrivateKey, {})).rejects.toEqual(expect.any(Error));
      expect(createToken(fakePrivateKey, null)).rejects.toEqual(expect.any(Error));
      expect(createToken(fakePrivateKey, undefined)).rejects.toEqual(expect.any(Error));
      expect(createToken(fakePrivateKey, new Date())).rejects.toEqual(expect.any(Error));
      expect(createToken(fakePrivateKey, [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- retrieveToken', () => {
    it('should return object with id', async () => {

      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id: 'tok_123abc',
      }));

      const result = await retrieveToken(fakePrivateKey, 'tok_123abc');
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual('tok_123abc');
    });
  });
});