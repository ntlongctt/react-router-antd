import { tokenEndpointUsingPost1 } from '../generated/sdk.gen';
import { getStandardHeaders } from '../config';
import type { AuthCredentials, AuthToken } from '~/domain/models/auth';

/**
 * Auth adapter provides methods for authentication-related API operations
 */
export const authAdapter = {
  /**
   * Authenticate user with username and password
   */
  login: async (credentials: AuthCredentials): Promise<AuthToken> => {
    const response = await tokenEndpointUsingPost1({
      body: {
        grant_type: 'password',
        username: credentials.username,
        password: credentials.password,
      },
      headers: getStandardHeaders(),
    });

    return {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
      expires_in: response.data.expires_in,
      token_type: response.data.token_type,
    };
  },

  /**
   * Refresh authentication token
   */
  refreshToken: async (refreshToken: string): Promise<AuthToken> => {
    const response = await tokenEndpointUsingPost1({
      body: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      headers: getStandardHeaders(),
    });

    return {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
      expires_in: response.data.expires_in,
      token_type: response.data.token_type,
    };
  },

  /**
   * Log out the current user
   */
  logout: async (): Promise<void> => {
    // If your API has a logout endpoint, call it here
    // Otherwise, just clear the token on the client side
    localStorage.removeItem('token');
  },
};
