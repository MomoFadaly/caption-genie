import { useMutation, useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { apiRequest } from '../api/client';

/**
 * Custom hook for making API requests with React Query
 * @param key - The query key for React Query
 * @param config - The axios request config
 * @param options - Additional React Query options
 */
export function useApiQuery<T = unknown>(
  key: string | string[],
  config: AxiosRequestConfig,
  options?: Omit<UseQueryOptions<T, AxiosError>, 'queryKey' | 'queryFn'>
) {
  const queryKey = Array.isArray(key) ? key : [key];
  
  return useQuery<T, AxiosError>({
    queryKey,
    queryFn: () => apiRequest<T>(config),
    ...options,
  });
}

/**
 * Custom hook for making API mutation requests with React Query
 * @param config - Base axios request config (will be extended with mutation data)
 */
export function useApiMutation<TData = unknown, TVariables = unknown>(
  config: Omit<AxiosRequestConfig, 'data'>
) {
  return useMutation<TData, AxiosError, TVariables>({
    mutationFn: (variables: TVariables) => 
      apiRequest<TData>({
        ...config,
        data: variables,
      }),
  });
}