import axios from "axios";


export const getStatuses = () => {
    return axios
        .get('/api/get_statuses')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
};


export const addStatus = status => {
    return axios
        .post('/api/add_status', status, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};


export const loadStatusInfo = id => {
    return axios
        .get('/api/get_status_info/' + id)
        .then(res => {
           return res.data;
        })
        .catch(err => {
           return err;
        });
};


export const updateStatus = (status, id) => {
    return axios
        .put('/api/update_status/' + id, status, {
            headers: {'Content-Type': 'application/json'}
        })
        .then((res) => {
            return res;
        })
        .catch(err => {
           return err;
        });
};