import httpBuildQuery from 'http-build-query';

export const Header = function(data = ''){
    // your custom header here
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
}

export const jsonToQueryString = function(json){
    return  httpBuildQuery(json);
}

export const CONSTANT = {
    KEY_ISLOGIN : "islogin",
    KEY_AUTH_USERNAME : "auth_username",
    KEY_AUTH_PASSWORD : "auth_password",
    KEY_AUTH_LOGOUT : "auth_logout",
    KEY_AUTH_LOGIN : "auth_login",

    KEY_LOADER_TOGGLE : "loader_toggle",

    NOTIF_SUCCESS: 'success',
    NOTIF_WARNING: 'warning',
    NOTIF_DANGER: 'danger',
    NOTIF_DANGER_ARRAY: 'danger_array',
    NOTIF_INFO: 'info',
    NOTIF_PRIMARY: 'primary',
    NOTIF_CLEAR: 'clear',
    NOTIF_SUCCESS_LOGIN: 'success_login',
    NOTIF_DANGER_LOGIN: 'danger_login',

    KEY_MENU_TOGGLE: 'menu_toggle',
    KEY_SETTING_LANGUAGE: 'setting_language',

    KEY_HOME_EXCHANGE_RATE : "home_exchange_rate"
}