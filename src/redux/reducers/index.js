import { combineReducers } from 'redux';
import auth from './AuthReducer';
import menu from './MenuReducer';
import loader from './LoaderReducer';
import alert from './AlertReducer';
import home from './HomeReducer';
import language from './LanguageReducer';

const rootReducer = combineReducers({
    auth,menu,loader,alert,home,language
});
 
export default rootReducer;