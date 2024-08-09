import React from "react";
import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";
import { useAppSelector } from "../../store";
import { CartPage } from "../../pages/CartPage/CartPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { SignInPage } from "../../pages/SignInPage/SignInPage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";
import { RoutePath } from "../../types";
import { Spin } from "antd";
import { useUserDataFromLocalStorage } from "../../hooks/useUserDataFromLocalStorage";
import { Layout } from "../Layout";
import { useCustomEventsHandler } from "../../hooks/useCustomEventsHandler";
export var Routes = function () {
    var userStatus = useAppSelector(function (store) { return store.user.status; });
    useCustomEventsHandler();
    useUserDataFromLocalStorage();
    switch (userStatus) {
        case "authorized": {
            return (React.createElement(Layout, null,
                React.createElement(ReactRouterDomRoutes, null,
                    React.createElement(Route, { path: RoutePath.Cart, element: React.createElement(CartPage, null) }),
                    React.createElement(Route, { path: "*", element: React.createElement(MainPage, null) }))));
        }
        case "notAuthorized": {
            return (React.createElement(Layout, null,
                React.createElement(ReactRouterDomRoutes, null,
                    React.createElement(Route, { path: RoutePath.SingUp, element: React.createElement(SignUpPage, null) }),
                    React.createElement(Route, { path: "*", element: React.createElement(SignInPage, null) }))));
        }
        default: {
            return React.createElement(Spin, { size: "large", fullscreen: true });
        }
    }
};
