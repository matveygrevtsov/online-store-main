import React from "react";
import { SignInForm } from "./components/SignInForm/";
import { useAppDispatch } from "../../store";
import { signInAsyncThunk } from "../../store/userSlice/asyncThunks/signInAsyncThunk";
import Title from "antd/es/typography/Title";
export var SignInPage = function () {
    var dispatch = useAppDispatch();
    var handleSubmit = function (userAuthCredentials) {
        dispatch(signInAsyncThunk(userAuthCredentials));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, null, "\u0412\u043E\u0439\u0442\u0438"),
        React.createElement(SignInForm, { onSubmit: handleSubmit })));
};
