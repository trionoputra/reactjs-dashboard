import {CONSTANT} from '../../helpers';
export const menu = (open) => {
    return {
        type: CONSTANT.KEY_MENU_TOGGLE,
        isOpen: open,
    };
};