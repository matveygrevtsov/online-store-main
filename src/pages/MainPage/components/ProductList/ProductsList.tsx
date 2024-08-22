import React from 'react';
import { Alert, Flex } from 'antd';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../../../types';
import { useQuery } from '@tanstack/react-query';
import { EQueryKeys } from '../../../../tanstack';
import { database } from '../../../../firebase';
import { Spin } from 'antd';

export const ProductsList = (): JSX.Element => {
  const { data, isError } = useQuery({
    queryKey: [EQueryKeys.FetchAllProducts],
    queryFn: () => database.get<Product[]>('products'),
  });

  if (data) {
    return (
      <Flex
        gap={16}
        wrap="wrap"
        justify="center"
        align="start"
        style={{
          maxWidth: '932px',
          width: '100%',
        }}
      >
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    );
  }

  if (isError) {
    return <Alert message="Не удалось скачать список товаров" type="error" />;
  }

  return <Spin />;
};
