const UPDATE_PRODUCT_INFO = "UPDATE_PRODUCT_INFO";

let initialState = {
    categories: [
        {id: 1, value: '1', text: 'Mobile Phones'},
        {id: 2, value: '2', text: 'Laptops'},
        {id: 3, value: '3', text: 'Tablets'}
    ],
    currencies: [
        {id: 1, value: "1", text: "United States dollar (USD)"},
        {id: 2, value: "2", text: "Ukrainian hryvnia (UAH)"},
        {id: 3, value: "3", text: "Russian ruble (RUB)"}
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
        case UPDATE_PRODUCT_INFO:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return {
                ...state
            };
    }
};


export const updateProductInfoCreator = (name, value) => ({
    type: UPDATE_PRODUCT_INFO,
    name: name,
    value: value
});

export default productModalReducer;