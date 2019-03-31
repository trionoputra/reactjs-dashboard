import {CONSTANT} from '../../helpers';
const defaultState = {
    isLoggedIn: false,
    username: '',
    password: '',
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case CONSTANT.KEY_AUTH_LOGIN:
            return Object.assign({}, state, { 
                isLoggedIn: true,
                username: action.username,
                password: action.password,
            });
        case  CONSTANT.KEY_AUTH_LOGOUT:
        
            return Object.assign({}, state, { 
                isLoggedIn: false,
                username: '',
                password: ''
            });
        default:
            return state;
    }
}