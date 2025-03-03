import { getProfileMeUsingGet, updateProfileUsingPatch } from '../generated/sdk.gen';
import { getStandardHeaders } from '../config';
import type { User, UserProfile } from '../../../domain/models/user';

/**
 * User adapter provides methods for user-related API operations
 */
export const userAdapter = {
  /**
   * Get the current logged-in user's profile
   */
  getCurrentUser: async (token: string): Promise<User> => {
    const response = await getProfileMeUsingGet({
      headers: getStandardHeaders(token),
    });

    // Map from API response to domain model
    const userData = response.data;
    return {
      id: userData.id || '',
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || 'user',
      avatar: userData.avatar,
      createdAt: userData.created_at,
      updatedAt: userData.updated_at,
    };
  },

  /**
   * Update the current user's profile
   */
  updateProfile: async (token: string, profile: UserProfile): Promise<User> => {
    const response = await updateProfileUsingPatch({
      body: {
        name: profile.name,
        email: profile.email,
        avatar: profile.avatar,
      },
      headers: getStandardHeaders(token),
    });

    // Map from API response to domain model
    const userData = response.data;
    return {
      id: userData.id || '',
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || 'user',
      avatar: userData.avatar,
      createdAt: userData.created_at,
      updatedAt: userData.updated_at,
    };
  },
};
