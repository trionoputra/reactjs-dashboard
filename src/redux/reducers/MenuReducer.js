import {CONSTANT} from '../../helpers';
const defaultState = {
    isOpen: true,
};
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case CONSTANT.KEY_MENU_TOGGLE: 
            return Object.assign({}, state, { 
                isOpen: action.isOpen,
            });
        default:
            return state;
    }
}