import {CONSTANT} from '../../helpers';
const defaultState = {
    type: "",
    message: '',
    errorArray:{}
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case CONSTANT.NOTIF_DANGER: 
            return Object.assign({}, state, { 
                message: action.message,
                type: CONSTANT.NOTIF_DANGER
            });
        case CONSTANT.NOTIF_SUCCESS: 
            return Object.assign({}, state, { 
                message: action.message,
                type: CONSTANT.NOTIF_SUCCESS
            });
        case CONSTANT.NOTIF_PRIMARY: 
            return Object.assign({}, state, { 
                message: action.message,
                type: CONSTANT.NOTIF_PRIMARY
            });
        case CONSTANT.NOTIF_WARNING: 
            return Object.assign({}, state, { 
                message: action.message,
                type: CONSTANT.NOTIF_WARNING
            });
        case CONSTANT.NOTIF_INFO: 
            return Object.assign({}, state, { 
                message: action.message,
                type: CONSTANT.NOTIF_WARNING
        });
        case CONSTANT.NOTIF_CLEAR: 
            return Object.assign({}, state, { 
                message: "",
                type: ""
        });
        case CONSTANT.NOTIF_DANGER_ARRAY: 
        return Object.assign({}, state, { 
            errorArray: action.message
         });

         case CONSTANT.NOTIF_DANGER_LOGIN: 
         return Object.assign({}, state, { 
             message: action.message,
             type: CONSTANT.NOTIF_DANGER
         });
     case CONSTANT.NOTIF_SUCCESS_LOGIN: 
         return Object.assign({}, state, { 
             message: action.message,
             type: CONSTANT.NOTIF_SUCCESS
         });
        default:
            return state;
    }
}