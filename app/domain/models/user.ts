/**
 * User domain model
 * Contains the core business logic and properties for a user
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Represents user settings or preferences
 */
export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  language: string;
}

/**
 * Represents a user's profile information that can be updated
 */
export interface UserProfile {
  name?: string;
  email?: string;
  avatar?: string;
}
