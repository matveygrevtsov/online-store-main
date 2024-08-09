import React from "react";
import { SignUpForm } from "./components/SignUpForm/";
import { useAppDispatch } from "../../store";
import { signUpAsyncThunk } from "../../store/userSlice/asyncThunks/signUpAsyncThunk";
import Title from "antd/es/typography/Title";
export var SignUpPage = function () {
    var dispatch = useAppDispatch();
    var handleSubmit = function (userAuthCredentials) {
        dispatch(signUpAsyncThunk(userAuthCredentials));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, null, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"),
        React.createElement(SignUpForm, { onSubmit: handleSubmit })));
};
