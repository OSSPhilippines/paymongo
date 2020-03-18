import { makeRequest } from './rest';
import { createSource } from './sources';

jest.mock('./rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Sources', () => {
  describe('|- createSource', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      id: 'fake-id',
    }));

    it('should return object with id', async () => {
      const result = await createSource('fake-private-key', { a: 1 });
      expect(result).toHaveProperty('id');
    });
    
    it('should throw', async () => {
      expect(createSource('fake-private-key', {})).rejects.toEqual(expect.any(Error));
      expect(createSource('fake-private-key', null)).rejects.toEqual(expect.any(Error));
      expect(createSource('fake-private-key', undefined)).rejects.toEqual(expect.any(Error));
      expect(createSource('fake-private-key', new Date())).rejects.toEqual(expect.any(Error));
      expect(createSource('fake-private-key', [])).rejects.toEqual(expect.any(Error));
    });
  });
});