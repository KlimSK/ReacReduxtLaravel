const TOGGLE_PRODUCT_MODAL = "TOGGLE_PRODUCT_MODAL";
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";


let initalState = {
    products: [],

};


const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [
                    action.product,
                    ...state.products
                ]
            };

        case UPDATE_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products.map((prod) => {
                      if(action.product.id == prod.id)
                          prod = action.product;
                      return prod;

                    })
                ]
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        case TOGGLE_PRODUCT_MODAL:
            return {
                ...state,
                productModalOpened: !state.productModalOpened
            };
        default:
            return state;
    }
};


export const toggleProductModalCreator = () => ({type: TOGGLE_PRODUCT_MODAL});
export const getProductsCreator = (products) => ({type: GET_PRODUCTS, products: products});
export const addProductCreator = (product) => ({type: ADD_PRODUCT, product: product});
export const updateProductCreator = (product) => ({type: UPDATE_PRODUCT, product: product});

export default productsReducer;

