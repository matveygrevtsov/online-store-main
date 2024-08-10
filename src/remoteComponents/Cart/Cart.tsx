import React, { FC, Suspense, lazy } from "react";
import { Typography } from "antd";

const RemoteCart = lazy<FC>(() =>
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
  return (
    <Suspense>
      <RemoteCart />
    </Suspense>
  );
};
