import AntdLayout, { Content } from "antd/es/layout/layout";
import React, { FC, PropsWithChildren } from "react";
import { Header } from "../../remoteComponents/Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />

      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px",
        }}
      >
        {children}
      </Content>

      <Footer />
    </AntdLayout>
  );
};
