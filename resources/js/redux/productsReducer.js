const ADD_PRODUCT = "ADD_PRODUCT";
const TOGGLE_PRODUCT_MODAL = "TOGGLE_PRODUCT_MODAL";


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

        case TOGGLE_PRODUCT_MODAL:
            return{
                ...state,
                productModalOpened: !state.productModalOpened
            };
        default:
            return state;
    }
};


export const toggleProductModalCreator = () => ({ type: TOGGLE_PRODUCT_MODAL });


export default productsReducer;

