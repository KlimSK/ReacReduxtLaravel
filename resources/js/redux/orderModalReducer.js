const ADD_ORDER_MODAL = "ADD_ORDER_MODAL";
const EDIT_ORDER_MODAL = "EDIT_ORDER_MODAL";
const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";
const UPDATE_ORDER_INFO = "UPDATE_ORDER_INFO";
const LOAD_ORDER_INFO = "LOAD_ORDER_INFO";
const LOAD_STATUSES = "LOAD_STATUSES";
const ADD_PRODUCT_TO_ORDER = "ADD_PRODUCT_TO_ORDER";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const UPDATE_PRODUCT_IN_ORDER = "UPDATE_PRODUCT_IN_ORDER";

let initialState = {
    orderModalOpened: false,
    orderModalType: '',
    isLoaded: false,


    statuses: [],
    deliveries: [
        {id: 1, value: 1, text: "Pickup", image: {src: 'img/delivery/ico-self.ico'}},
        {id: 2, value: 2, text: "Nova Poshta", image: {src: 'img/delivery/ico-new-post.ico'}},
    ],
    products: [
        //{id: 12, name: "Test product 33", price: 699.00, amount: 1, total: 699.00, left: 33, category: 0}
    ],

    totalPrice: 0,
    totalAmount: 0,

    orderID: 0,
    customer: "",
    phone: "",
    email: "",
    status: 1,
    comment: "",
    utm_source: "",
    utm_medium: "",
    utm_term: "",
    utm_content: "",
    utm_campaign: "",
    delivery_id: 1,
    waybill: "",
    address: "",
    ip: "",
    website: "",
    additional_field_1: "",
    additional_field_2: "",
    additional_field_3: "",
    additional_field_4: "",
};

const orderModalReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_ORDER_MODAL:
            return {
                ...state,
                orderModalOpened: true,
                orderModalType: 'add',
                orderID: 0,
                statuses: action.statuses

            };

        case EDIT_ORDER_MODAL:
            return {
                ...state,
                orderModalOpened: true,
                orderModalType: 'edit',
                orderID: action.order.id ? action.order.id : "",
                customer: action.order.customer ? action.order.customer : "",
                phone: action.order.phone ? action.order.phone : "",
                email: action.order.email ? action.order.email : "",
                status: action.order.status_id ? action.order.status_id : 1,
                previousStatus: action.order.status_id ? action.order.status_id : 1,
                comment: action.order.comment ? action.order.comment : "",
                utm_source: action.order.utm_source ? action.order.utm_source : "",
                utm_medium: action.order.utm_medium ? action.order.utm_medium : "",
                utm_term: action.order.utm_term ? action.order.utm_term : "",
                utm_content: action.order.utm_content ? action.order.utm_content : "",
                utm_campaign: action.order.utm_campaign ? action.order.utm_campaign : "",
                delivery_id: action.order.delivery_id ? action.order.delivery_id : 1,
                waybill: action.order.waybill ? action.order.waybill : "",
                address: action.order.address ? action.order.address : "",
                ip: action.order.ip ? action.order.ip : "",
                website: action.order.website ? action.order.website : "",
                additional_field_1: action.order.additional_field_1 ? action.order.additional_field_1 : "",
                additional_field_2: action.order.additional_field_2 ? action.order.additional_field_2 : "",
                additional_field_3: action.order.additional_field_3 ? action.order.additional_field_3 : "",
                additional_field_4: action.order.additional_field_4 ? action.order.additional_field_4 : "",


                previousProducts: action.order.products,
                products: action.order.products,
                statuses: action.statuses
            };

        case CLOSE_ORDER_MODAL:
            return {
                ...state,
                orderModalOpened: false,
                orderModalType: '',
                orderID: 0,
                totalPrice: 0,
                totalAmount: 0,

                customer: "",
                phone: "",
                email: "",
                status: 1,
                previousStatus: 1,
                comment: "",
                utm_source: "",
                utm_medium: "",
                utm_term: "",
                utm_content: "",
                utm_campaign: "",
                delivery_id: 1,
                waybill: "",
                address: "",
                ip: "",
                website: "",
                additional_field_1: "",
                additional_field_2: "",
                additional_field_3: "",
                additional_field_4: "",

                previousProducts: [],
                products: [],
                statuses: []
            };

        case UPDATE_ORDER_INFO:
            return {
                ...state,
                [action.name]: action.value
            };

        case LOAD_ORDER_INFO:
            return {
                ...state,
            };

        case LOAD_STATUSES:
            return {
                ...state,
                statuses: action.statuses,
            };

        case ADD_PRODUCT_TO_ORDER:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.product
                ]
            };

        case REMOVE_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products.filter((prod) => {
                        return prod.id != action.id
                    })
                ]
            };

        case UPDATE_PRODUCT_IN_ORDER:
            return {
                ...state,
                products: [
                    ...state.products.map((prod) => {
                        if (prod.id == action.id)
                            prod = action.product;
                        return prod;
                    })
                ]
            };
        default:
            return state;
    }
};

export const updateOrderInfoCreator = (name, value) => ({
    type: UPDATE_ORDER_INFO,
    name: name,
    value: value
});


export const addOrderModalCreator = (statuses) => ({type: ADD_ORDER_MODAL, statuses: statuses});
export const editOrderModalCreator = (order, statuses) => ({type: EDIT_ORDER_MODAL, order: order, statuses: statuses});
export const closeOrderModalCreator = () => ({type: CLOSE_ORDER_MODAL});
export const loadOrderInfoCreator = (order) => ({type: LOAD_ORDER_INFO, order: order});
export const loadStatusesCreator = (statuses) => ({type: LOAD_STATUSES, statuses: statuses});
export const addProductToOrderCreator = (product) => ({type: ADD_PRODUCT_TO_ORDER, product: product});
export const removeProductCreator = (id) => ({type: REMOVE_PRODUCT, id: id});
export const updateProductInOrderCreator = (id, product) => ({type: UPDATE_PRODUCT_IN_ORDER, id: id, product: product});


export default orderModalReducer;