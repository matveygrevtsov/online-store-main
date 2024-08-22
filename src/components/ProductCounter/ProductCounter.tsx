import React from 'react';
import { FC, useEffect, useState } from 'react';
import { useNotification } from '../../hooks/useNotification';
import { useUserData } from '../../hooks/useUserData';
import { EQueryKeys } from '../../tanstack';
import { useQuery } from '@tanstack/react-query';
import { database } from '../../firebase';
import { useMutation } from '../../hooks/useMutation';
import { Flex, Input, Spin, Button } from 'antd';
import { ShoppingCartOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

interface IProps {
  productId: string;
}

const ProductCounter: FC<IProps> = ({ productId }) => {
  const [count, setCount] = useState<number>(0);

  const notification = useNotification();

  const userData = useUserData();

  const {
    data: cart,
    isFetching: isProductCountFetching,
    isLoading: isProductCountLoading,
  } = useQuery({
    queryKey: [EQueryKeys.FetchUserCart, userData.uid],
    queryFn: () => database.get<Record<string, number>>(`carts/${userData.uid}`),
  });

  const { mutateAsync, isPending: isMutationInProgress } = useMutation({
    mutationFn: (count: number) =>
      database.set(`carts/${userData.uid}/${productId}`, count).then(() => {
        setCount(count);
      }),
  });

  const handleMinusClick = () => {
    mutateAsync(count ? count - 1 : 0).then(
      () => {
        notification.success({
          key: 'product',
          message: 'Товар успешно удалён из корзины!',
        });
      },
      () => {
        notification.error({
          key: 'product',
          message: 'Не удалось удалить товар из корзины',
        });
      },
    );
  };

  const handlePlusClick = () => {
    mutateAsync(count + 1).then(
      () => {
        notification.success({
          key: 'product',
          message: 'Товар успешно добавлен в корзину!',
        });
      },
      () => {
        notification.error({
          key: 'product',
          message: 'Не удалось добавить товар в корзину',
        });
      },
    );
  };

  useEffect(() => setCount(cart?.[productId] || 0), [productId, cart, setCount]);

  if (isProductCountFetching || isProductCountLoading || isMutationInProgress) {
    return <Spin size="small" />;
  }

  if (!count) {
    return <ShoppingCartOutlined onClick={handlePlusClick} />;
  }

  return (
    <Flex align="center" justify="center" gap={16} style={{ padding: '16px' }}>
      <Button onClick={handleMinusClick} shape="circle" icon={<MinusOutlined />} />
      <Input value={count} readOnly />
      <Button onClick={handlePlusClick} shape="circle" icon={<PlusOutlined />} />
    </Flex>
  );
};

export default ProductCounter;
