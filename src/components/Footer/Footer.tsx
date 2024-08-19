import React from "react";
// import { Footer } from "antd/es/layout/layout";
import { Flex } from "antd";

const CustomFooter = () => {
  return <Flex>ONLINE-SHOP ©{new Date().getFullYear()}</Flex>;
  // return (
  //   <Footer style={{ textAlign: "center" }}>
  //     ONLINE-SHOP ©{new Date().getFullYear()}
  //   </Footer>
  // );
};

export default CustomFooter;
