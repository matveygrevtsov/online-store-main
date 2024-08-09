import { useContext } from "react";
import { NotificationContext } from "../App";
export var useNotification = function () { return useContext(NotificationContext); };
