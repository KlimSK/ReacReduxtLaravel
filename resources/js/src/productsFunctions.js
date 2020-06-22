import axios from 'axios';

export const addProduct = product => {
    return axios
        .post('api/add_product', product, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};


export const getProducts = () => {
    return axios
        .get('api/get_products')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        });
};

export const getProductsFromCat = id => {
    return axios
        .get('api/get_products_from_cat/' + id)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        });
};

export const loadProductInfo = id => {
    return axios
        .get('api/get_product_info/' + id)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
};

export const updateProduct = (product, id) => {
    return axios
        .put('api/update_product/' + id, product, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};