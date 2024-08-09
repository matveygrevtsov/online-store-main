import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { errorHandlingMiddleware } from "./errorHandlingMiddleware/errorHandlingMiddleware";
export var store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(errorHandlingMiddleware);
    },
});
export var useAppDispatch = useDispatch;
export var useAppSelector = useSelector;
