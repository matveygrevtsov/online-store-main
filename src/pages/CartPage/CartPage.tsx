import Title from 'antd/es/typography/Title';
import React from 'react';
import { Cart } from '../../remoteComponents/Cart/Cart';

export const CartPage = () => {
  return (
    <>
      <Title>Корзина</Title>
      <Cart />
    </>
  );
};
