var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { Button, Form, Input } from "antd";
var formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
var tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
export var SignInForm = function (_a) {
    var onSubmit = _a.onSubmit;
    var form = Form.useForm()[0];
    return (React.createElement(Form, __assign({}, formItemLayout, { form: form, onFinish: onSubmit, style: { maxWidth: "600px", width: "100%" } }),
        React.createElement(Form.Item, { name: "email", label: "\u041F\u043E\u0447\u0442\u0430", rules: [
                {
                    type: "email",
                    message: "Невалидная почта!",
                },
                {
                    required: true,
                    message: "Пожалуйста, введите почту!",
                },
            ] },
            React.createElement(Input, null)),
        React.createElement(Form.Item, { name: "password", label: "\u041F\u0430\u0440\u043E\u043B\u044C", rules: [
                {
                    required: true,
                    message: "Пожалуйста, введите пароль!",
                },
            ], hasFeedback: true },
            React.createElement(Input.Password, null)),
        React.createElement(Form.Item, __assign({}, tailFormItemLayout),
            React.createElement(Button, { type: "primary", htmlType: "submit" }, "\u0412\u043E\u0439\u0442\u0438"))));
};
