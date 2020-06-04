import axios from 'axios';

export const addProduct = product => {
    return axios
        .post('api/add_product', product, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
};


export const getProducts = () => {
    return axios
        .post('api/get_products')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
};