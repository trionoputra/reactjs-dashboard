import {CONSTANT} from '../../helpers';
 
const defaultState = {
    rates:[]
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        
        case CONSTANT.KEY_HOME_EXCHANGE_RATE: 
            return Object.assign({}, state, { 
                rates:action.rates
            });
        default:
            return state;
    }
}