import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from './useAuth';
import type { AuthCredentials, AuthState } from '../../domain/models/auth';

interface AuthContextType extends AuthState {
  isLoading: boolean;
  error: Error | null;
  login: (credentials: AuthCredentials) => Promise<any>;
  logout: () => Promise<void>;
}

// Create auth context with default values
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: false,
  error: null,
  login: async () => ({}),
  logout: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider makes authentication state and methods available throughout the app
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

/**
 * Hook for accessing authentication context
 */
export const useAuthContext = () => useContext(AuthContext);
