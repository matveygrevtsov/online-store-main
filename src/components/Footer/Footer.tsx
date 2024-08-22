import React from 'react';
import { Footer as AntdFooter } from 'antd/es/layout/layout';

export const Footer = () => {
  return (
    <AntdFooter style={{ textAlign: 'center' }}>
      ONLINE-SHOP ©{new Date().getFullYear()}
    </AntdFooter>
  );
};
