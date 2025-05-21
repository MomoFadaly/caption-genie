import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Default API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const API_TIMEOUT = 10000; // 10 seconds

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors consistently
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle session expiry (401 errors)
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      // Could dispatch a logout action or redirect here
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// Type-safe API request function
export const apiRequest = async <T = unknown>(
  config: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Format the error message from the API if available
      const errorMessage = error.response.data?.message || error.message;
      throw new Error(errorMessage);
    }
    throw error;
  }
};

export default apiClient;