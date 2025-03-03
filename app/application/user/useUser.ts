import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { userAdapter } from '../../infrastructure/api/adapters/userAdapter';
import { localStorageAdapter, StorageKeys } from '../../infrastructure/storage/localStorage';
import type { User, UserProfile } from '../../domain/models/user';

/**
 * Query keys for user-related queries
 */
export const UserQueryKeys = {
  currentUser: ['currentUser'],
  userProfile: ['userProfile'],
};

/**
 * useCurrentUser hook fetches and provides the current user data
 */
export const useCurrentUser = () => {
  const token = localStorageAdapter.getItem<string>(StorageKeys.AUTH_TOKEN);

  return useQuery({
    queryKey: UserQueryKeys.currentUser,
    queryFn: () => {
      if (!token) {
        throw new Error('Authentication required');
      }
      return userAdapter.getCurrentUser(token);
    },
    enabled: !!token,
  });
};

/**
 * useUpdateProfile hook provides functionality to update the user profile
 */
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const token = localStorageAdapter.getItem<string>(StorageKeys.AUTH_TOKEN);

  return useMutation({
    mutationFn: (profile: UserProfile) => {
      if (!token) {
        throw new Error('Authentication required');
      }
      return userAdapter.updateProfile(token, profile);
    },
    onSuccess: (updatedUser: User) => {
      // Update current user in cache
      queryClient.setQueryData(UserQueryKeys.currentUser, updatedUser);

      // Update user in localStorage
      const currentUser = localStorageAdapter.getItem<any>(StorageKeys.USER);
      if (currentUser) {
        localStorageAdapter.setItem(StorageKeys.USER, {
          ...currentUser,
          name: updatedUser.name,
        });
      }
    },
  });
};
