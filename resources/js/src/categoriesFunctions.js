import axios from "axios";

export const addCategory = category => {
    return axios
        .post('api/add_category', category, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};


export const getCategories = () => {
    return axios
        .get('api/get_categories')
        .then(res => {
            return res.data;
        })
        .catch( err => {
            return err;
        });
};

export const loadCategoryInfo = id => {
    return axios
        .get('api/get_category_info/' + id)
        .then(res => {
            return res.data;
        })
        .catch( err => {
            return err;
        });
};

export const updateCategory = (category, id) => {
    return axios
        .put('api/update_category/' + id, category, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};