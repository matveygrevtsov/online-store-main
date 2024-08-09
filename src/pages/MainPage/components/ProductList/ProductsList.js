import React from "react";
import { Flex } from "antd";
import { ProductCard } from "../ProductCard/ProductCard";
export var ProductsList = function (_a) {
    var products = _a.products;
    return (React.createElement(Flex, { gap: 16, wrap: "wrap", justify: "center", style: {
            maxWidth: "932px",
            width: "100%",
        } }, products.map(function (product) { return (React.createElement(ProductCard, { product: product })); })));
};
