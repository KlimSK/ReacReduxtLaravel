const LOAD_STATISTICS_PRODUCTS = "LOAD_STATISTICS_PRODUCTS";
const LOAD_STATISTICS_CURRENCIES = "LOAD_STATISTICS_CURRENCIES";
const CHANGE_STATISTICS_PRODUCTS_TYPE = "CHANGE_STATISTICS_PRODUCTS_TYPE";
const TOGGLE_LIST_OPEN = "TOGGLE_LIST_OPEN";
const CHANGE_STATISTICS_PRODUCTS_CURRENCY = "CHANGE_STATISTICS_PRODUCTS_CURRENCY";
const CHANGE_SELECTED_PRODUCTS = "CHANGE_SELECTED_PRODUCTS";
const CHANGE_STATISTICS_PRODUCTS_INFO = "CHANGE_STATISTICS_PRODUCTS_INFO";

let initialState = {
    chartData: [
        {x: "", y: 0},
    ],
    products: [],
    currencies: [],

    hintValues: [],
    selectedProducts: [12, 5, 11, 9, 10, 7],
    currency: 2,
    type: 'amount', //amount or income

    lists: {
        currencies: true,
        products: true,
        types: true
    }

};


const statisticsProductsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_STATISTICS_PRODUCTS_TYPE:
            return {
                ...state,
                type: action.statistics_type
            };

        case LOAD_STATISTICS_PRODUCTS:
            return {
                ...state,
                products: action.products
            };

        case LOAD_STATISTICS_CURRENCIES:
            return {
                ...state,
                currencies: action.currencies
            };

        case TOGGLE_LIST_OPEN:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [action.name]: !state.lists[action.name]
                }
            };

        case CHANGE_STATISTICS_PRODUCTS_CURRENCY:
            return {
                ...state,
              currency: action.currency
            };

        case CHANGE_SELECTED_PRODUCTS:
            return{
                ...state,
                selectedProducts: action.products
            };

        case CHANGE_STATISTICS_PRODUCTS_INFO:
            return{
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }

};


export const toggleListOpenCreator = name => ({type: TOGGLE_LIST_OPEN, name: name});
export const loadStatisticsProductsCreator = products => ({type: LOAD_STATISTICS_PRODUCTS, products: products});
export const loadStatisticsCurrenciesCreator = currencies => ({
    type: LOAD_STATISTICS_CURRENCIES,
    currencies: currencies
});
export const changeStatisticsProductsTypeCreator = statistics_type => ({
    type: CHANGE_STATISTICS_PRODUCTS_TYPE,
    statistics_type: statistics_type
});

export const changeStatisticsProductsCurrencyCreator = currency => ({
    type: CHANGE_STATISTICS_PRODUCTS_CURRENCY,
    currency: currency
});

export const changeStatisticsProductsInfoCreator = (name, value) => ({
    type: CHANGE_STATISTICS_PRODUCTS_INFO,
    name: name,
    value: value,
});

export const changeSelectedProductsCreator = products => ({type: CHANGE_SELECTED_PRODUCTS, products: products});

export default statisticsProductsReducer;