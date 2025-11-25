const rawBaseUrl = (import.meta as any)?.env?.VITE_API_BASE_URL || 'http://localhost:3000';

export const BASE_URL = rawBaseUrl.replace(/\/$/, '');
export const API_BASE = `${BASE_URL}/api/v1`;

export const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  pagination?: any;
  message?: string;
}

export const buildApiUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE}${normalizedPath}`;
};



