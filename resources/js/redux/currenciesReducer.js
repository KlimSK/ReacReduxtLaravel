const GET_CURRENCIES = "GET_CURRENCIES";
const ADD_CURRENCY = "ADD_CURRENCY";
const UPDATE_CURRENCY = "UPDATE_CURRENCY";

let initalState = {
    currencies: [
        {
            id: 1,
            name: '',
            symbol: '',
            shortName: '',
        }
    ],

};


const currenciesReducer = (state = initalState, action) =>{
    switch (action.type) {
        case ADD_CURRENCY:
            return {
                ...state,
                currencies: [
                    action.currency,
                    ...state.currencies
                ]
            };

        case UPDATE_CURRENCY:
            return {
                ...state,
                currencies: [
                    ...state.currencies.map((cur) => {
                        if(action.currency.id == cur.id)
                            cur = action.currency;
                        return cur;

                    })
                ]
            };
        case GET_CURRENCIES:
            return {
                ...state,
                currencies: action.currencies
            };

        default:
            return state;
    }
};


export const getCurrenciesCreator = (currencies) => ({type: GET_CURRENCIES, currencies: currencies});
export const addCurrencyCreator = (currency) => ({type: ADD_CURRENCY, currency: currency});
export const updateCurrencyCreator = (currency) => ({type: UPDATE_CURRENCY, currency: currency});


export default currenciesReducer;