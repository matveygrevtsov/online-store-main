import React from 'react';
import { Card } from 'antd';
import { Product } from '../../../../types';
import ProductCounter from '../../../../components/ProductCounter/ProductCounter';

const { Meta } = Card;

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const { id, description, price, image } = product;

  return (
    <Card
      style={{ maxWidth: '300px', width: '100%' }}
      cover={<img alt="example" src={image} />}
      actions={[<ProductCounter key={id} productId={id} />]}
    >
      <Meta title={price} description={description} />
    </Card>
  );
};
