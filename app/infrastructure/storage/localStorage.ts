/**
 * Keys used for localStorage
 */
export enum StorageKeys {
  AUTH_TOKEN = 'auth_token',
  REFRESH_TOKEN = 'refresh_token',
  USER = 'user',
  THEME = 'theme',
  LANGUAGE = 'language',
}

/**
 * LocalStorage adapter provides methods for interacting with browser's localStorage
 */
export const localStorageAdapter = {
  /**
   * Get item from localStorage
   */
  getItem: <T>(key: StorageKeys): T | null => {
    const item = localStorage.getItem(key);
    if (!item) return null;

    try {
      return JSON.parse(item) as T;
    } catch (error) {
      return item as unknown as T;
    }
  },

  /**
   * Set item in localStorage
   */
  setItem: <T>(key: StorageKeys, value: T): void => {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem: (key: StorageKeys): void => {
    localStorage.removeItem(key);
  },

  /**
   * Clear all items from localStorage
   */
  clear: (): void => {
    localStorage.clear();
  },
};
