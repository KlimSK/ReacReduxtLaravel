const ADD_CURRENCY_MODAL = "ADD_CURRENCY_MODAL";
const EDIT_CURRENCY_MODAL = "EDIT_CURRENCY_MODAL";
const CLOSE_CURRENCY_MODAL = "CLOSE_CURRENCY_MODAL";
const UPDATE_CURRENCY_INFO = "UPDATE_CURRENCY_INFO";
const LOAD_CURRENCY_INFO = "LOAD_CURRENCY_INFO";

let initialState = {
    currencyModalOpened: false,
    currencyModalType: '',
    currencyID: 0,

    currencyName: '',
    symbol: '',
    shortName: '',
};

const currencyModalReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_CURRENCY_MODAL:
            return {
                ...state,
                currencyModalOpened: true,
                currencyModalType: 'add',
                currencyID: 0,
                currencyName: '',
                symbol: '',
                shortName: '',
            };

        case EDIT_CURRENCY_MODAL:
            return {
                ...state,
                currencyModalOpened: true,
                currencyModalType: 'edit',
                currencyID: action.id
            };

        case CLOSE_CURRENCY_MODAL:
            return {
                ...state,
                currencyModalOpened: false,
                currencyModalType: '',
                currencyID: 0,
                currencyName: '',
                symbol: '',
                shortName: '',
            };

        case LOAD_CURRENCY_INFO:{
            return{
                ...state,
                currencyName: action.currency.name ? action.currency.name : '',
                symbol: action.currency.symbol ? action.currency.symbol : '',
                shortName: action.currency.shortName ? action.currency.shortName : '',
            }
        }

        case UPDATE_CURRENCY_INFO:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }
};

export const updateCurrencyInfoModalCreator = (name, value) => ({
    type: UPDATE_CURRENCY_INFO,
    name: name,
    value: value
});
export const addCurrencyModalCreator = () => ({type: ADD_CURRENCY_MODAL});
export const editCurrencyModalCreator = (id) => ({type: EDIT_CURRENCY_MODAL, id: id});
export const closeCurrencyModalCreator = () => ({type: CLOSE_CURRENCY_MODAL});
export const loadCurrencyModalCreator = (currency) => ({type: LOAD_CURRENCY_INFO, currency: currency});

export default currencyModalReducer;