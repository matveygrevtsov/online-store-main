import { QueryClient } from '@tanstack/react-query';

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Время хранения респонса в кеше в миллисекундах.
    },
  },
});

export enum EQueryKeys {
  FetchAllProducts = 'FetchAllProducts',
  FetchUserCart = 'FetchUserCart',
}
