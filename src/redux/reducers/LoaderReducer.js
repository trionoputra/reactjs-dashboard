import {CONSTANT} from '../../helpers';
const defaultState = {
    isShow: false,
};
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case CONSTANT.KEY_LOADER_TOGGLE: 
            return Object.assign({}, state, { 
                isShow: action.isShow,
            });
        default:
            return state;
    }
}