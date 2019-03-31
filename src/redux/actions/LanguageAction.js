import {CONSTANT} from '../../helpers';

export const lang = (lang) => {
    // save seletected language to handle refresh page
    return {
        type: CONSTANT.KEY_SETTING_LANGUAGE,
        lang: lang,
    };
};