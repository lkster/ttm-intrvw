/// <reference types="vite/client" />

export const config = {
  TATUM_API_KEY: import.meta.env.VITE_TATUM_API_KEY,
} as const;
