import { makeRequest } from '../utils/rest';
import { createWebhook, retrieveWebhook, listWebhooks, toggleWebhook } from './webhooks';
import faker from 'faker';
const fakePrivateKey = faker.random.uuid();

jest.mock('../utils/rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Webhooks', () => {
  describe('|- createWebhook', () => {
    const id = faker.random.uuid();
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      data: { id },
    }));

    it('should return object with id', async () => {
      const result = await createWebhook(fakePrivateKey, { a: 1 });
      expect(result).toHaveProperty('data.id');
    });
    
    it('should throw', async () => {
      expect(createWebhook(fakePrivateKey, {})).rejects.toEqual(expect.any(Error));
      expect(createWebhook(fakePrivateKey, null)).rejects.toEqual(expect.any(Error));
      expect(createWebhook(fakePrivateKey, undefined)).rejects.toEqual(expect.any(Error));
      expect(createWebhook(fakePrivateKey, new Date())).rejects.toEqual(expect.any(Error));
      expect(createWebhook(fakePrivateKey, [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- retrieveWebhook', () => {
    const id = 'hook_123';
    it('should return object with id', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id,
      }));

      const result = await retrieveWebhook(fakePrivateKey, id);
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual(id);
    });
  });


  describe('|- listWebhooks', () => {
    it('should return data[]', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: [],
      }));

      const result = await listWebhooks(fakePrivateKey, 'fake-id-123');
      expect(Array.isArray(result.data)).toBe(true);
    });
  });

  describe('|- toggleWebhook', () => {
    const id = faker.random.uuid();
    it('should return object with id for action enable', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: { id },
      }));
      
      const result = await toggleWebhook(fakePrivateKey, id, 'enable');
      expect(result).toHaveProperty('data.id');
      expect(result.data.id).toEqual(id);
    });
    
    it('should return object with id for action disable', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: { id },
      }));

      const result = await toggleWebhook(fakePrivateKey, id, 'disable');
      expect(result).toHaveProperty('data.id');
      expect(result.data.id).toEqual(id);
    });

    it('should throw', async () => {
      expect(toggleWebhook(fakePrivateKey, id, 'not-enable-or-disable')).rejects.toEqual(expect.any(Error));
    });
  });
});
