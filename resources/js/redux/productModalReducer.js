const ADD_PRODUCT_MODAL = "ADD_PRODUCT_MODAL";
const EDIT_PRODUCT_MODAL = "EDIT_PRODUCT_MODAL";
const CLOSE_PRODUCT_MODAL = "CLOSE_PRODUCT_MODAL";
const UPDATE_PRODUCT_INFO = "UPDATE_PRODUCT_INFO";
const LOAD_PRODUCT_INFO = "LOAD_PRODUCT_INFO";
const LOAD_CATEGORIES = "LOAD_CATEGORIES";
const LOAD_CURRENCIES = "LOAD_CURRENCIES";

let initialState = {
    productModalOpened: false,
    productModalType: '',
    productID: 0,
    isLoaded: false,

    categories: [
    ],
    currencies: [
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
                productID: 0,
                isLoaded: false,

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
                productID: 0,
                categories: [],
                currencies: [],
                isLoaded: false,
            };

        case LOAD_PRODUCT_INFO:
            return {
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
            };


        case LOAD_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };

        case LOAD_CURRENCIES:
            return {
                ...state,
                currencies: action.currencies
            };

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
export const loadCategoriesCreator = (categories) => ({type: LOAD_CATEGORIES, categories: categories});
export const loadCurrenciesCreator = (currencies) => ({type: LOAD_CURRENCIES, currencies: currencies});


export default productModalReducer;