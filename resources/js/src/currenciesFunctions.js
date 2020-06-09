import axios from 'axios';

export const addCurrency = currency => {
    return axios
        .post('api/add_currency', currency, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};

export const getCurrencies = () => {
    return axios
        .get('api/get_currencies')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
};


export const loadCurrencyInfo = id => {
    return axios
        .get('api/get_currency_info/' + id)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        });
};


export const updateCurrency = (currency, id) => {
    return axios
        .put('api/update_currency/' + id, currency, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};