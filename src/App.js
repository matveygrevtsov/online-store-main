import React, { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import useNotification from "antd/es/notification/useNotification";
import { Routes } from "./components/Routes";
export var NotificationContext = createContext({});
export var App = function () {
    var _a = useNotification(), notification = _a[0], notificationContext = _a[1];
    return (React.createElement(Provider, { store: store },
        React.createElement(NotificationContext.Provider, { value: notification },
            React.createElement(BrowserRouter, null,
                React.createElement(Routes, null))),
        notificationContext));
};
