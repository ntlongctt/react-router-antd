import { useState, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { authAdapter } from '../../infrastructure/api/adapters/authAdapter';
import { localStorageAdapter, StorageKeys } from '../../infrastructure/storage/localStorage';
import { setAuthToken, clearAuthToken } from '../../infrastructure/api/config';
import type { AuthCredentials, AuthState } from '../../domain/models/auth';

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

/**
 * useAuth hook provides authentication functionality
 */
export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    // Initialize auth state from localStorage
    const token = localStorageAdapter.getItem<string>(StorageKeys.AUTH_TOKEN);
    const user = localStorageAdapter.getItem<AuthState['user']>(StorageKeys.USER);

    if (token && user) {
      // If we have a token, set it in the API client
      setAuthToken(token);

      return {
        isAuthenticated: true,
        user,
        token,
      };
    }

    return initialAuthState;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const queryClient = useQueryClient();

  /**
   * Login with username and password
   */
  const login = useCallback(
    async (credentials: AuthCredentials) => {
      setIsLoading(true);
      setError(null);

      try {
        const authToken = await authAdapter.login(credentials);

        // Save token to localStorage
        localStorageAdapter.setItem(StorageKeys.AUTH_TOKEN, authToken.access_token);
        if (authToken.refresh_token) {
          localStorageAdapter.setItem(StorageKeys.REFRESH_TOKEN, authToken.refresh_token);
        }

        // Set token in API client
        setAuthToken(authToken.access_token);

        // Set initial user info
        const user = { name: credentials.username };
        localStorageAdapter.setItem(StorageKeys.USER, user);

        // Update auth state
        setAuthState({
          isAuthenticated: true,
          user,
          token: authToken.access_token,
        });

        // Invalidate queries that might depend on authentication
        queryClient.invalidateQueries();

        return authToken;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Login failed');
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [queryClient]
  );

  /**
   * Logout the current user
   */
  const logout = useCallback(async () => {
    setIsLoading(true);

    try {
      await authAdapter.logout();

      // Clear auth data from localStorage
      localStorageAdapter.removeItem(StorageKeys.AUTH_TOKEN);
      localStorageAdapter.removeItem(StorageKeys.REFRESH_TOKEN);
      localStorageAdapter.removeItem(StorageKeys.USER);

      // Clear token from API client
      clearAuthToken();

      // Reset auth state
      setAuthState(initialAuthState);

      // Clear any cached data
      queryClient.clear();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Logout failed');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [queryClient]);

  return {
    ...authState,
    isLoading,
    error,
    login,
    logout,
  };
};
