import {CONSTANT} from '../../helpers';
 
const defaultState = {
    lang:"EN"
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        
        case CONSTANT.KEY_SETTING_LANGUAGE: 
            return Object.assign({}, state, { 
                lang:action.lang
            });
        default:
            return state;
    }
}