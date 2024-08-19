import React, { FC, Suspense, lazy, useMemo } from "react";
import { Typography } from "antd";
import { Product } from "../../types";
import { useUserData } from "../../hooks/useUserData";
import { EQueryKeys } from "../../tanstack";
import { useQuery } from "@tanstack/react-query";
import { database } from "../../firebase";

const RemoteCart = lazy<
  FC<{
    products: Product[];
  }>
>(() =>
  // @ts-ignore
  import("cart/Cart").catch((error) => ({
    default: () => (
      <Typography.Text type="danger">
        {`Не удалось загрузить header (${JSON.stringify(error)})`}
      </Typography.Text>
    ),
  }))
);

export const Cart = () => {
  const { uid } = useUserData();

  const { data: allProducts } = useQuery({
    queryKey: [EQueryKeys.FetchAllProducts],
    queryFn: () => database.get<Product[]>("products"),
  });

  const { data: userCart } = useQuery({
    queryKey: [EQueryKeys.FetchUserCart, uid],
    queryFn: async () => database.get<Record<string, number>>(`carts/${uid}`),
  });

  const products = useMemo(() => {
    if (!allProducts || !userCart) return [];
    return allProducts.filter((product) => userCart[product.id]);
  }, [allProducts, userCart]);

  return (
    <Suspense>
      <RemoteCart products={products} />
    </Suspense>
  );
};
