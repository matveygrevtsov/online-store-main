import React from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
var Meta = Card.Meta;
export var ProductCard = function (_a) {
    var product = _a.product;
    var description = product.description, price = product.price, image = product.image;
    return (React.createElement(Card, { style: { maxWidth: "300px", width: "100%" }, cover: React.createElement("img", { alt: "example", src: image }), actions: [React.createElement(ShoppingCartOutlined, null)] },
        React.createElement(Meta, { title: price, description: description })));
};
