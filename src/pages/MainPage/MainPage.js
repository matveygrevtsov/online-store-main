import React from "react";
import { ProductsList } from "./components";
import { MOCK_PRODUCTIONS } from "../../constants";
import Title from "antd/es/typography/Title";
export var MainPage = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Title, null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
    React.createElement(ProductsList, { products: MOCK_PRODUCTIONS }))); };
