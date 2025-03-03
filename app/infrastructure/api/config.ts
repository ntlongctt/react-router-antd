import { client } from './generated/client.gen';
import { env } from '../../lib/utils/env';

/**
 * Standard headers used for API requests
 */
export const getStandardHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-App-Id': 'dev',
    'X-App-Version': '1.0.0',
    'X-Device-Family': 'web',
    'X-Device-Id': 'dev',
    'X-Device-Locale': 'en_US',
    'X-Device-Os': 'web',
    'X-Device-Os-Version': '1.0.0',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

/**
 * Initialize API client configuration
 */
export const initializeApiClient = () => {
  client.setConfig({
    baseURL: env.apiBaseUrl,
    headers: getStandardHeaders(),
  });
};

/**
 * Update API client configuration with auth token
 */
export const setAuthToken = (token: string) => {
  client.setConfig({
    headers: {
      ...getStandardHeaders(),
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * Clear auth token from API client
 */
export const clearAuthToken = () => {
  client.setConfig({
    headers: getStandardHeaders(),
  });
};
