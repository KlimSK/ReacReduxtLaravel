const ADD_PRODUCT_MODAL = "ADD_PRODUCT_MODAL";
const EDIT_PRODUCT_MODAL = "EDIT_PRODUCT_MODAL";
const CLOSE_PRODUCT_MODAL = "CLOSE_PRODUCT_MODAL";
const UPDATE_PRODUCT_INFO = "UPDATE_PRODUCT_INFO";
const LOAD_PRODUCT_INFO = "LOAD_PRODUCT_INFO";

let initialState = {
    productModalOpened: false,
    productModalType: '',
    productID: 0,

    categories: [
        {id: 1, value: 1, text: 'Mobile Phones'},
        {id: 2, value: 2, text: 'Laptops'},
        {id: 3, value: 3, text: 'Tablets'}
    ],
    currencies: [
        {id: 1, value: 1, text: "United States dollar (USD)"},
        {id: 2, value: 2, text: "Ukrainian hryvnia (UAH)"},
        {id: 3, value: 3, text: "Russian ruble (RUB)"}
    ],
    productName: '',
    category: '',
    currency: '',
    model: '',
    price: '',
    photo: '',
    description: '',
    amount: 0,
    length: 0,
    width: 0,
    height: 0,
    weight: 1.00
};

const productModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_MODAL:
            return {
                ...state,
                productModalOpened: true,
                productModalType: 'add',
                productName: '',
                category: '',
                currency: '',
                model: '',
                price: '',
                photo: '',
                description: '',
                amount: 0,
                length: 0,
                width: 0,
                height: 0,
                weight: 1.00,
                productID: 0
            };

        case EDIT_PRODUCT_MODAL:
            return {
                ...state,
                productModalOpened: true,
                productModalType: 'edit',
                productID: action.id
            };

        case CLOSE_PRODUCT_MODAL:
            return {
                ...state,
                productModalOpened: false,
                productModalType: '',
                productName: '',
                category: '',
                currency: '',
                model: '',
                price: '',
                photo: '',
                description: '',
                amount: 0,
                length: 0,
                width: 0,
                height: 0,
                weight: 1.00,
                productID: 0
            };

        case LOAD_PRODUCT_INFO:{
            return{
                ...state,
                productName: action.product.name ? action.product.name : '',
                category: action.product.category ? action.product.category : '',
                currency: action.product.currency ? action.product.currency : '',
                model: action.product.model ? action.product.model : '',
                price: action.product.price ? action.product.price : '',
                photo: action.product.photo ? action.product.photo : '',
                description: action.product.description ? action.product.description : '',
                amount: action.product.amount ? action.product.amount : '',
                length: action.product.length ? action.product.length : '',
                width: action.product.width ? action.product.width : '',
                height: action.product.height ? action.product.height : '',
                weight: action.product.weight ? action.product.weight : ''
            }
        }

        case UPDATE_PRODUCT_INFO:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }
};


export const updateProductInfoCreator = (name, value) => ({
    type: UPDATE_PRODUCT_INFO,
    name: name,
    value: value
});
export const addProductModalCreator = () => ({type: ADD_PRODUCT_MODAL});
export const editProductModalCreator = (id) => ({type: EDIT_PRODUCT_MODAL, id: id});
export const closeProductModalCreator = () => ({type: CLOSE_PRODUCT_MODAL});
export const loadProductInfoCreator = (product) => ({type: LOAD_PRODUCT_INFO, product: product});


export default productModalReducer;