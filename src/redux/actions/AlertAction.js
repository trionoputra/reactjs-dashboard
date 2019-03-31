import {CONSTANT} from '../../helpers';

export const AlertActions = {
    success,
    error,
    warning,
    info,
    primary,
    clear,
    errorArray,
    success_login,
    error_login
};

function success(message) {
    return { type: CONSTANT.NOTIF_SUCCESS, message:message };
}

function error(message) {
    return { type: CONSTANT.NOTIF_DANGER, message:message };
}
function errorArray(message) {
    return { type: CONSTANT.NOTIF_DANGER_ARRAY, message:message };
}

function warning(message) {
    return { type: CONSTANT.NOTIF_WARNING, message:message };
}



function info(message) {
    return { type: CONSTANT.NOTIF_INFO, message:message };
}

function primary(message) {
    return { type: CONSTANT.NOTIF_PRIMARY, message:message };
}
function clear() {
    return { type: CONSTANT.NOTIF_CLEAR };
}

function success_login(message) {
    return { type: CONSTANT.NOTIF_SUCCESS_LOGIN, message:message };
}

function error_login(message) {
    return { type: CONSTANT.NOTIF_DANGER_LOGIN, message:message };
}