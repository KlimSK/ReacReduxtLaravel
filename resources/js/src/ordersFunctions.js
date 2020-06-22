import axios from "axios";


export const addOrder = order => {
  return axios
      .post('api/add_order', order, {
          headers: {'Content-Type': 'application/json'}
      })
      .then(res => {
         return res;
      })
      .catch(err => {
         return err;
      });
};


export const getOrders = () => {
    return axios
        .get("api/get_orders")
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
};

export const getOrdersByStatus = (id) => {
    return axios
        .get("api/get_orders_by_status/" + id)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
};

export const updateOrder = (order, id) => {
    return axios
        .put('api/update_order/' + id, order, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};