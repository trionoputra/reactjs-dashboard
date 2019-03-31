
import {CONSTANT} from '../../helpers';
import {AlertActions} from '../actions/AlertAction';
import {loader} from '../actions/LoaderAction';
import history from '../../history';

export const AuthActions = {
    login,logout,auth
};

function login  (username, password){
    return dispatch => {
        dispatch(loader(true));
        setTimeout(() => {
            dispatch(loader(false));
            if(username === "admin" && password === "admin")   // local login, you can change this method with fetch function
            {
                dispatch(auth(username,password));
                dispatch(AlertActions.success_login("Login Success")); // show success message
                history.push("Home");
                setTimeout(()=>{
                    dispatch(AlertActions.clear()); //  clear message
                }
                ,2000);
            }
            else
            {
                dispatch(AlertActions.error_login("Invalid Username or Password")); // show error message
            }
        },2000);      
    }   
};
 
function logout() {

    localStorage.setItem(CONSTANT.KEY_ISLOGIN, false);
    localStorage.setItem(CONSTANT.KEY_AUTH_USERNAME, "");
    localStorage.setItem(CONSTANT.KEY_AUTH_PASSWORD, "");
    history.push("Login");
    return {
        type: CONSTANT.KEY_AUTH_LOGOUT
    };
};

function auth(username, password){
    localStorage.setItem(CONSTANT.KEY_ISLOGIN,true);
    localStorage.setItem(CONSTANT.KEY_AUTH_USERNAME,username);
    localStorage.setItem(CONSTANT.KEY_AUTH_PASSWORD,password);
    
    return {
        type: CONSTANT.KEY_AUTH_LOGIN,
        username: username,
        password: password,
    };
};