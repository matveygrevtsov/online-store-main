import React, { Suspense, useMemo, lazy, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  UserAddOutlined,
  LoginOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { RoutePath } from "../../types";
import { logOutAsyncThunk } from "../../store/userSlice/asyncThunks/logOutAsyncThunk";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

const RemoteHeader = lazy<
  FC<{
    items: ItemType<MenuItemType>[];
    onLogout?: () => void;
  }>
  // @ts-ignore
>(() => import("header/Header"));

type Items = ItemType<MenuItemType>[];

export const Header = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((store) => store.user);

  const items = useMemo<Items>(() => {
    switch (userData.status) {
      case "authorized": {
        const items: Items = [
          {
            label: "ONLINE-SHOP",
            key: RoutePath.Main,
            icon: <ShoppingOutlined />,
          },
          {
            label: "Корзина",
            key: RoutePath.Cart,
            icon: (
              <Badge
                count={userData.userData.idsOfProductsInCart.length}
                size="small"
                showZero
              >
                <ShoppingCartOutlined />
              </Badge>
            ),
          },
        ];

        return items;
      }

      case "notAuthorized": {
        const items: Items = [
          {
            label: "Войти",
            key: RoutePath.SingIn,
            icon: <LoginOutlined />,
          },
          {
            label: "Зарегистрироваться",
            key: RoutePath.SingUp,
            icon: <UserAddOutlined />,
          },
        ];

        return items;
      }

      case "loading": {
        return [];
      }
    }
  }, [userData]);

  const handleLogout = () => {
    dispatch(logOutAsyncThunk());
  };

  return (
    <AntdHeader>
      <Suspense>
        <RemoteHeader
          items={items}
          onLogout={userData.status === "authorized" ? handleLogout : undefined}
        />
      </Suspense>
    </AntdHeader>
  );
};
