const ADD_PRODUCT = "ADD_PRODUCT";
const OPEN_PRODUCT_MODAL = "OPEN_PRODUCT_MODAL";
const CLOSE_PRODUCT_MODAL = "CLOSE_PRODUCT_MODAL";


let initalState = {
    products: [
        {id: 1, img: '', name: 'Xiaomi Mi 9', model: 'Lite', category: 'Mobile phones', price: 300, currency: 'USD', amount: 0},
        {id: 2, img: '', name: 'Apple Macbook', model: 'Pro', category: 'Laptops', price: 1500, currency: 'USD', amount: 0},
        {id: 3, img: '', name: 'Xiaomi Mi Notebook', model: '', category: 'Laptops', price: 500, currency: 'USD', amount: 0},
    ],
    productModalOpened: false
};


const productsReducer = (state = initalState, action) => {
    switch (action.type){
        case ADD_PRODUCT:
            return state;
        case OPEN_PRODUCT_MODAL:
            state.productModalOpened = true;
            return state;
        case CLOSE_PRODUCT_MODAL:
            state.productModalOpened = false;
            return state;
        default:
            return state;
    }
};


export const openProductModalCreator = () => ({ type: OPEN_PRODUCT_MODAL });
export const closeProductModalCreator = () => ({ type: CLOSE_PRODUCT_MODAL });


export default productsReducer;

