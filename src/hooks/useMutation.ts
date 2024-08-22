'use client';

import {
  DefaultError,
  QueryFilters,
  useMutation as useReactQueryMutation,
  UseMutationOptions,
} from '@tanstack/react-query';
import { QUERY_CLIENT } from '../tanstack';

interface IProps<TData = unknown, TError = DefaultError, TVariables = void, TContext = unknown>
  extends UseMutationOptions<TData, TError, TVariables, TContext> {
  invalidation?: QueryFilters['queryKey'];
}

export function useMutation<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>({ invalidation, onSuccess, ...props }: IProps<TData, TError, TVariables, TContext>) {
  const mutation = useReactQueryMutation({
    ...props,
    onSuccess: (...args) => {
      if (invalidation) {
        QUERY_CLIENT.invalidateQueries({
          queryKey: invalidation,
        });
      }

      onSuccess?.(...args);
    },
  });

  return mutation;
}
