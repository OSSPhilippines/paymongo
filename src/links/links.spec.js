import { makeRequest } from '../utils/rest';
import { createLink, retrieveLink, getLinkByReference, archiveLink, unarchiveLink } from './links';
import faker from 'faker';
const fakePrivateKey = faker.random.uuid();

jest.mock('../utils/rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Links', () => {
  describe('|- createLink', () => {
    const id = faker.random.uuid();
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      data: { id },
    }));

    it('should return object with id', async () => {
      const result = await createLink(fakePrivateKey, { a: 1 });
      expect(result).toHaveProperty('data.id');
    });
    
    it('should throw', async () => {
      expect(createLink(fakePrivateKey, {})).rejects.toEqual(expect.any(Error));
      expect(createLink(fakePrivateKey, null)).rejects.toEqual(expect.any(Error));
      expect(createLink(fakePrivateKey, undefined)).rejects.toEqual(expect.any(Error));
      expect(createLink(fakePrivateKey, new Date())).rejects.toEqual(expect.any(Error));
      expect(createLink(fakePrivateKey, [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- retrieveLink', () => {
    const id = 'link_123';
    it('should return object with id', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id,
      }));

      const result = await retrieveLink(fakePrivateKey, id);
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual(id);
    });
  });

  describe('|- getLinkByReference', () => {
    const reference_number = 'link_123';
    it('should return object with id', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        reference_number,
      }));

      const result = await getLinkByReference(fakePrivateKey, reference_number);
      expect(result).toHaveProperty('reference_number');
      expect(result.reference_number).toEqual(reference_number);
    });
  });

  // TODO: mock archive/unarchive result identifier
  describe('|- archiveLink', () => {
    const id = 'link_123';
    it('should return object with id', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id,
      }));

      const result = await archiveLink(fakePrivateKey, id);
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual(id);
    });
  });

  // TODO: mock archive/unarchive result identifier
  describe('|- unarchiveLink', () => {
    const id = 'link_123';
    it('should return object with id', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id,
      }));

      const result = await unarchiveLink(fakePrivateKey, id);
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual(id);
    });
  });
});
