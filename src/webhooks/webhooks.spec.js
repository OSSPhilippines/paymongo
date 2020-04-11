import { makeRequest } from '../utils/rest';
import { createWebhook, getWebhooks, toggleWebhook, updateWebhook } from './webhooks';

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
      const result = await createWebhook('fake-private-key', { a: 1 });
      expect(result).toHaveProperty('data.id');
    });
    
    it('should throw', async () => {
      expect(createWebhook('fake-private-key', {})).rejects.toEqual(expect.any(Error));
      expect(createWebhook('fake-private-key', null)).rejects.toEqual(expect.any(Error));
      expect(createWebhook('fake-private-key', undefined)).rejects.toEqual(expect.any(Error));
      expect(createWebhook('fake-private-key', new Date())).rejects.toEqual(expect.any(Error));
      expect(createWebhook('fake-private-key', [])).rejects.toEqual(expect.any(Error));
    });
  });

  describe('|- getWebhooks', () => {
    makeRequest.mockImplementationOnce(() => Promise.resolve({
      data: [],
    }));

    it('should return data[]', async () => {
      const result = await getWebhooks('fake-private-key', 'fake-id-123');
      expect(Array.isArray(result.data)).toBe(true);
    });
  });

  describe('|- toggleWebhook', () => {
    it('should return object with id for action enable', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: {
          id: 'fake-id-123',
        },
      }));
      
      const result = await toggleWebhook('fake-private-key', 'enable', 'fake-id-123');
      expect(result).toHaveProperty('data.id');
      expect(result.data.id).toEqual('fake-id-123');
    });
    
    it('should return object with id for action disable', async () => {
      makeRequest.mockImplementationOnce(() => Promise.resolve({
        data: {
          id: 'fake-id-123',
        },
      }));

      const result = await toggleWebhook('fake-private-key', 'disable', 'fake-id-123');
      expect(result).toHaveProperty('data.id');
      expect(result.data.id).toEqual('fake-id-123');
    });

    it('should throw', async () => {
      expect(toggleWebhook('fake-private-key', 'not-enable-or-disable', 'fake-id-123')).rejects.toEqual(expect.any(Error));
    });
  });
  
  describe('|- updateWebhook', () => {
    it('should return object with id', async () => {

      makeRequest.mockImplementationOnce(() => Promise.resolve({
        id: 'fake-id-123',
      }));

      const result = await updateWebhook('fake-private-key', { a: 1 });
      expect(result).toHaveProperty('id');
      expect(result.id).toEqual('fake-id-123');
    });
  });
});
