import AntdLayout, { Content, Footer } from "antd/es/layout/layout";
import React from "react";
import { Header } from "../Header";
export var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(AntdLayout, { style: {
            minHeight: "100vh",
        } },
        React.createElement(Header, null),
        React.createElement(Content, { style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "32px",
            } }, children),
        React.createElement(Footer, { style: { textAlign: "center" } },
            "ONLINE-SHOP \u00A9",
            new Date().getFullYear())));
};
