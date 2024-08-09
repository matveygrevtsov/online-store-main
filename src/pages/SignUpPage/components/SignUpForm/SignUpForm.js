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
export var SignUpForm = function (_a) {
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
                    message: "Пожалуйста, укажите почту!",
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
        React.createElement(Form.Item, { name: "confirm", label: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", dependencies: ["password"], hasFeedback: true, rules: [
                {
                    required: true,
                    message: "Пожалуйста, подтвердите пароль!",
                },
                function (_a) {
                    var getFieldValue = _a.getFieldValue;
                    return ({
                        validator: function (_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("Пароли не совпадают!"));
                        },
                    });
                },
            ] },
            React.createElement(Input.Password, null)),
        React.createElement(Form.Item, __assign({}, tailFormItemLayout),
            React.createElement(Button, { type: "primary", htmlType: "submit" }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
};
