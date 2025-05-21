import { apiRequest } from './client';
import type { AuthResponse, LoginCredentials, RegisterData, User } from '../types/auth';

export const authService = {
  /**
   * Login with email and password
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiRequest<AuthResponse>({
      url: '/auth/login',
      method: 'POST',
      data: credentials,
    });
  },

  /**
   * Register a new user
   */
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    return apiRequest<AuthResponse>({
      url: '/auth/register',
      method: 'POST',
      data: userData,
    });
  },

  /**
   * Get the current authenticated user's profile
   */
  getCurrentUser: async (): Promise<User> => {
    return apiRequest<User>({
      url: '/auth/me',
      method: 'GET',
    });
  },

  /**
   * Logout the current user
   */
  logout: async (): Promise<void> => {
    return apiRequest<void>({
      url: '/auth/logout',
      method: 'POST',
    });
  },

  /**
   * Check if the current auth token is valid
   */
  validateToken: async (): Promise<{ valid: boolean }> => {
    return apiRequest<{ valid: boolean }>({
      url: '/auth/validate',
      method: 'GET',
    });
  },
};