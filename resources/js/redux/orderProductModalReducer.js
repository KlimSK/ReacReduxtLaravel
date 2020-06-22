const ADD_ORDER_PRODUCT_MODAL = "ADD_ORDER_PRODUCT_MODAL";
const EDIT_ORDER_PRODUCT_MODAL = "EDIT_ORDER_PRODUCT_MODAL";
const CLOSE_ORDER_PRODUCT_MODAL = "CLOSE_ORDER_PRODUCT_MODAL";
const UPDATE_ORDER_PRODUCT_INFO = "UPDATE_ORDER_PRODUCT_INFO";
const LOAD_ORDER_PRODUCT_INFO = "LOAD_ORDER_PRODUCT_INFO";
const LOAD_CATEGORIES_TO_ORDERS = "LOAD_CATEGORIES_TO_ORDERS";
const LOAD_PRODUCTS_TO_ORDERS = "LOAD_PRODUCTS_TO_ORDERS";


let initialState = {
    orderProductModalOpened: false,
    orderProductModalType: '',
    isLoaded: false,

    categories: [],
    products: [],

    price: 0,
    amount: 1,
    left: 0,
    category: 0,
    categoryName: "",
    product: 0,
    productName: "",
    currency: "",

    editProductID: 0,

};


const orderProductModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ORDER_PRODUCT_MODAL:
            return {
                ...state,
                orderProductModalOpened: true,
                orderProductModalType: "add",
            };

        case EDIT_ORDER_PRODUCT_MODAL:
            return {
                ...state,
                orderProductModalOpened: true,
                orderProductModalType: "edit",
                editProductID: action.product.id,
                product: action.product.product_id,
                product_id: action.product.product_id,
                productName: action.product.name,
                category: action.product.category,
                left: action.product.left,
                amount: action.product.amount,
                previousPrice: action.product.price ? action.product.price : 0,
                price: action.product.price,
            };

        case CLOSE_ORDER_PRODUCT_MODAL:
            return {
                orderProductModalOpened: false,
                orderProductModalType: '',
                isLoaded: false,
                categories: [],
                products: [],
                price: 0,
                amount: 1,
                left: 0,
                category: 0,
                categoryName: "",
                product: 0,
                productName: "",
                editProductID: 0,
            };


        case LOAD_CATEGORIES_TO_ORDERS:
            return {
                ...state,
                categories: action.categories

            };

        case LOAD_PRODUCTS_TO_ORDERS:
            return {
                ...state,
                products: action.products

            };

        case UPDATE_ORDER_PRODUCT_INFO:
            return {
                ...state,
                [action.name]: action.value
            };

        default:
            return state;
    }
};


export const updateOrderProductInfoCreator = (name, value) => ({
    type: UPDATE_ORDER_PRODUCT_INFO,
    name: name,
    value: value
});

export const editOrderProductModalCreator = (product) => ({
    type: EDIT_ORDER_PRODUCT_MODAL,
    product: product,
});

export const addOrderProductModalCreator = () => ({type: ADD_ORDER_PRODUCT_MODAL});
export const closeOrderProductModalCreator = () => ({type: CLOSE_ORDER_PRODUCT_MODAL});
export const loadOrderProductInfoCreator = (order) => ({type: LOAD_ORDER_PRODUCT_INFO, order: order});
export const loadCategoriesCreator = (categories) => ({type: LOAD_CATEGORIES_TO_ORDERS, categories: categories});
export const loadProductsCreator = (products) => ({type: LOAD_PRODUCTS_TO_ORDERS, products: products});


export default orderProductModalReducer;