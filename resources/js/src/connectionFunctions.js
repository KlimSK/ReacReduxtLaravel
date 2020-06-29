import axios from "axios";


export const addConnection = data => {
    return axios
        .post('/api/add_api_connection', data, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
};

export const getConnections = () => {
    return axios
        .get("/api/get_api_connections")
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
};



export const updateConnection = (data, id) => {
    return axios
        .put('/api/update_api_connection/' + id, data, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};