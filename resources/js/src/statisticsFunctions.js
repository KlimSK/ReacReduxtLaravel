import axios from "axios";

export const getProductsStatistics = filter => {
    return axios
        .get('/api/get_statistics_products', {params: filter})
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};


export const getCustomers = () => {
    return axios
        .get('/api/get_customers')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
};

export const getCustomersStatistics = filter => {
    return axios
        .get('/api/get_statistics_customers', {params: filter})
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};

export const getPeriodStatistics = filter => {
    return axios
        .get('/api/get_statistics_period', {params: filter})
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};


export const getCompareStatistics = filter => {
    return axios
        .get('/api/get_statistics_compare', {params: filter})
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};