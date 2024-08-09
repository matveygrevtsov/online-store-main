import { isRejected } from "@reduxjs/toolkit";
import { userStoreActions } from "../userSlice";
var logout = userStoreActions.logout;
export var errorHandlingMiddleware = function (middlewareAPI) { return function (next) { return function (action) {
    var _a;
    if (isRejected(action) && ((_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a.status) === 401) {
        middlewareAPI.dispatch(logout());
    }
    return next(action);
}; }; };
