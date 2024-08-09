import { useEffect } from "react";
import { ELocalStorageKey } from "../types";
import { useAppDispatch } from "../store";
import { AuthorizedUserDataSchema, userStoreActions } from "../store/userSlice";
var setUserData = userStoreActions.setUserData, logout = userStoreActions.logout;
export var useUserDataFromLocalStorage = function () {
    var dispatch = useAppDispatch();
    useEffect(function () {
        var checkUserDataInLocalStorage = function () {
            var userDataFromLocalStorage = window.localStorage.getItem(ELocalStorageKey.UserData);
            if (!userDataFromLocalStorage) {
                dispatch(logout());
                return;
            }
            var parse = AuthorizedUserDataSchema.safeParse(JSON.parse(userDataFromLocalStorage));
            if (parse.success) {
                dispatch(setUserData(parse.data));
            }
            else {
                dispatch(logout());
            }
        };
        var handleLocalStorageChange = function (event) {
            if (event.key !== ELocalStorageKey.UserData ||
                event.oldValue === event.newValue) {
                return;
            }
            checkUserDataInLocalStorage();
        };
        window.addEventListener("storage", handleLocalStorageChange);
        checkUserDataInLocalStorage();
        return function () {
            window.removeEventListener("storage", handleLocalStorageChange);
        };
    }, [dispatch]);
};
