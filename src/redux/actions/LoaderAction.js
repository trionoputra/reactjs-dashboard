import {CONSTANT} from '../../helpers';
export const loader = (show) => {
    return {
        type: CONSTANT.KEY_LOADER_TOGGLE,
        isShow: show,
    };
};