import {CONSTANT} from '../../helpers';
import {loader} from './LoaderAction';
import { HomeService } from '../../Services/HomeService';

export const HomeAction = {
    fetchExchangeRate,
};

function fetchExchangeRate(params){
    return dispatch => {
        dispatch(loader(true));
        HomeService.fetchExchangeRate(params)
        .then(res => {
            dispatch(loader(false));

            let rates = []; // manipulate you responata if needed
            for (var key in res.rates) {
                rates.push({"key":key,value:res.rates[key]})
            }

            dispatch(setExchangeRate(rates));
        });
    }   
};

function setExchangeRate(data)
{
    return {
        type: CONSTANT.KEY_HOME_EXCHANGE_RATE,
        rates:data
    };
}