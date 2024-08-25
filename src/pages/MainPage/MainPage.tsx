import React from 'react';

import { ProductsList } from './components/ProductList/ProductsList';
import Title from 'antd/es/typography/Title';

import * as styles from './styles.module.css';

export const MainPage = () => {
  return (
    <>
      <Title>Каталог</Title>
      <span className={styles.text}>TEXT</span>
      <ProductsList />
    </>
  );
};
