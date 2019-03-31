import { Header,jsonToQueryString} from '../helpers'

export const HomeService = {
    fetchExchangeRate
}

function fetchExchangeRate(params) { 
    const header = new Header(params);
        const url = 'https://api.exchangeratesapi.io/latest';
        let config = {
            headers: header,
            method:'GET',
    };

    return fetch(url + "?" + jsonToQueryString(params),config)
        .then(response => response.json());
}