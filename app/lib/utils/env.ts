// Environment variable helper functions
export const env = {
  // API
  apiBaseUrl:
    (import.meta.env.VITE_API_BASE_URL as string) || 'https://dev-oauth.proxy.simplifi.io',

  // App
  appName: (import.meta.env.VITE_APP_NAME as string) || 'React Router App',
  appVersion: (import.meta.env.VITE_APP_VERSION as string) || '1.0.0',

  // Environment
  isDev: import.meta.env.DEV as boolean,
  isProd: import.meta.env.PROD as boolean,
  mode: import.meta.env.MODE as string,
};
