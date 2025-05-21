import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query';
import type { FC, ReactNode } from 'react';

// Configure the query client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Don't refetch on window focus by default
      retry: 1, // Only retry failed queries once
      staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
      cacheTime: 10 * 60 * 1000, // Unused data is garbage collected after 10 minutes
    },
    mutations: {
      retry: 1, // Only retry failed mutations once
    },
  },
});

interface QueryClientProviderProps {
  children: ReactNode;
}

// Wrapper around React Query's provider with our configured client
export const QueryClientProvider: FC<QueryClientProviderProps> = ({ children }) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};

export { queryClient };