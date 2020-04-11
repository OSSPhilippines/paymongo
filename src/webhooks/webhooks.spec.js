import { makeRequest } from '../utils/rest';
import { createWebhook, getWebhooks, toggleWebhook, updateWebhook } from './webhooks';
import faker from 'faker';
const fakePrivateKey = faker.random.uuid();

jest.mock('../utils/rest');

beforeEach(() => {
  makeRequest.mockClear();
});

describe('Webhooks', () => {
  describe('|- createWebhook', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      data: {
        id: 'fake-id',
      },
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

  describe('|- getWebhooks', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      data: [],
    }));

    it('should return data[]', async () => {
      const result = await getWebhooks(fakePrivateKey, 'fake-id-123');
      expect(Array.isArray(result.data)).toBe(true);
    });
  });

  describe('|- toggleWebhook', () => {
    it('should return object with id for action enable', async () => {
      const id = faker.random.uuid();
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: { id },
      }));
      
      const result = await toggleWebhook(fakePrivateKey, 'enable', id);
      expect(result).toHaveProperty('data.id');
      expect(result.data.id).toEqual(id);
    });
    
    it('should return object with id for action disable', async () => {
      const id = faker.random.uuid();
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: { id },
      }));

      const result = await toggleWebhook(fakePrivateKey, 'disable', id);
      expect(result).toHaveProperty('data.id');
      expect(result.data.id).toEqual(id);
    });

    it('should throw', async () => {
      const id = faker.random.uuid();
      expect(toggleWebhook(fakePrivateKey, 'not-enable-or-disable', id)).rejects.toEqual(expect.any(Error));
    });
  });
  
  describe('|- updateWebhook', () => {
    it('should return object with id', async () => {
      const id = faker.random.uuid();
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id
      }));

      const result = await updateWebhook(fakePrivateKey, { a: 1 });
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual(id);
    });
  });
});
