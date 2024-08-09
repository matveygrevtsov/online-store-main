import { useEffect } from "react";
import { useNotification } from "./useNotification";
var CUSTOM_EVENT_NAME = "customEvent";
export var dispatchCustomEvent = function (detail) {
    var event = new CustomEvent(CUSTOM_EVENT_NAME, {
        detail: detail,
    });
    window.dispatchEvent(event);
};
export var useCustomEventsHandler = function () {
    var notification = useNotification();
    useEffect(function () {
        var handleCustomEvent = function (customEvent) {
            var event = customEvent === null || customEvent === void 0 ? void 0 : customEvent.detail;
            switch (event.type) {
                case "signUpError": {
                    notification.error({
                        message: "Не удалось зарегистрироваться",
                        description: JSON.stringify(event.errorDescription),
                    });
                    return;
                }
                case "signInError": {
                    notification.error({
                        message: "Не удалось войти",
                        description: JSON.stringify(event.errorDescription),
                    });
                    return;
                }
            }
        };
        window.addEventListener(CUSTOM_EVENT_NAME, handleCustomEvent);
        return function () {
            window.removeEventListener(CUSTOM_EVENT_NAME, handleCustomEvent);
        };
    }, [notification]);
};
