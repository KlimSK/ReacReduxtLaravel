const UPDATE_PRODUCT_INFO = "UPDATE_PRODUCT_INFO";

let initialState = {
    categories: [
        {id: 1, value: 'Mobile Phones', text: 'Mobile Phones'},
        {id: 2, value: 'Laptops', text: 'Laptops'},
        {id: 3, value: 'Tablets', text: 'Tablets'}
    ],
    currencies: [
        {id: 1, value: "United States dollar (USD)", text: "United States dollar (USD)"},
        {id: 2, value: "Ukrainian hryvnia (UAH)", text: "Ukrainian hryvnia (UAH)"},
        {id: 3, value: "Russian ruble (RUB)", text: "Russian ruble (RUB)"}
    ],
    name: '',
    model: '',
    price: '',
    photo: '',
    amount: 0,
};

const productModalReducer = (state = initialState, action) => {
    switch (action){
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

export default productModalReducer;