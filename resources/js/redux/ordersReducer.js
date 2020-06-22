const ADD_ORDER = "ADD_ORDER";
const GET_ORDERS = "GET_ORDERS";
const GET_STATUSES_TO_ORDERS = "GET_STATUSES_TO_ORDERS";
const UPDATE_ORDER = "UPDATE_ORDER";


let initialState = {
    orders: [],
    statuses: [],
    deliveries: [
        {id: 1, value: 1, text: "Pickup", image: 'img/delivery/ico-self.ico'},
        {id: 2, value: 2, text: "Nova Poshta", image: 'img/delivery/ico-new-post.ico'},
    ],
};


const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                orders: [
                    action.order,
                    ...state.orders
                ]
            };

        case GET_ORDERS:
            return {
                ...state,
                orders: action.orders
            };

        case GET_STATUSES_TO_ORDERS:
            return {
                ...state,
                statuses: action.statuses
            };

        case UPDATE_ORDER:
            return {
                ...state,
                orders: [
                    ...state.orders.map(order => {
                        if (action.order.id == order.id)
                            order = action.order;
                        return order;
                    })
                ]
            };

        default:
            return state;

    }
};


export const addOrderCreator = (order) => ({type: ADD_ORDER, order: order});
export const updateOrderCreator = (order) => ({type: UPDATE_ORDER, order: order});
export const getOrdersCreator = (orders) => ({type: GET_ORDERS, orders: orders});
export const getStatusesToOrdersCreator = (statuses) => ({type: GET_STATUSES_TO_ORDERS, statuses: statuses});

export default ordersReducer;