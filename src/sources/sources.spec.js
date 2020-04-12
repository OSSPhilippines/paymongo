import { makeRequest } from '../utils/rest';
import { createSource } from './sources';
import faker from 'faker';
const fakePrivateKey = faker.random.uuid();

jest.mock('../utils/rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Sources', () => {
  describe('|- createSource', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      id: fakePrivateKey,
    }));

    it('should return object with id', async () => {
      const result = await createSource(fakePrivateKey, { a: 1 });
      expect(result).toHaveProperty('id');
    });
    
    it('should throw', async () => {
      expect(createSource(fakePrivateKey, {})).rejects.toEqual(expect.any(Error));
      expect(createSource(fakePrivateKey, null)).rejects.toEqual(expect.any(Error));
      expect(createSource(fakePrivateKey, undefined)).rejects.toEqual(expect.any(Error));
      expect(createSource(fakePrivateKey, new Date())).rejects.toEqual(expect.any(Error));
      expect(createSource(fakePrivateKey, [])).rejects.toEqual(expect.any(Error));
    });
  });
});