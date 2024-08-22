import React from 'react';

import { ProductsList } from './components/ProductList/ProductsList';
import Title from 'antd/es/typography/Title';

export const MainPage = () => {
  return (
    <>
      <Title>Каталог</Title>
      <ProductsList />
    </>
  );
};
