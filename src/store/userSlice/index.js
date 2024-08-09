import { createSlice } from "@reduxjs/toolkit";
import z from "zod";
import { ELocalStorageKey } from "../../types";
export var AuthorizedUserDataSchema = z.object({
    idsOfProductsInCart: z.array(z.string()),
});
export var UserStateSchema = z.union([
    z.object({
        status: z.union([z.literal("loading"), z.literal("notAuthorized")]),
    }),
    z.object({
        status: z.literal("authorized"),
        userData: AuthorizedUserDataSchema,
    }),
]);
var initialState = {
    status: "loading",
};
var slice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logout: function () {
            window.localStorage.clear();
            return {
                status: "notAuthorized",
            };
        },
        setLoading: function () {
            return {
                status: "loading",
            };
        },
        setUserData: function (_, action) {
            var userData = action.payload;
            window.localStorage.setItem(ELocalStorageKey.UserData, JSON.stringify(userData));
            return {
                status: "authorized",
                userData: userData,
            };
        },
    },
    extraReducers: function (builder) { },
});
export var userStoreActions = slice.actions;
export var userReducer = slice.reducer;
