const ADD_CONNECTION_MODAL = "ADD_CONNECTION_MODAL";
const EDIT_CONNECTION_MODAL = "EDIT_CONNECTION_MODAL";
const CLOSE_CONNECTION_MODAL = "CLOSE_CONNECTION_MODAL";
const UPDATE_CONNECTION_INFO = "UPDATE_CONNECTION_INFO";
const LOAD_CONNECTION_INFO = "LOAD_CONNECTION_INFO";

let initialState = {
    connectionModalOpened: false,
    connectionModalType: '',
    isLoaded: false,

    categories: [],
    products: [],

    connectionID: 0,
    website: "",
    category_id: 0,
    product_id: 0,
    price: 0,
    currency_symbol: "",
    script: "",

    additional_field_1: "",
    additional_field_2: "",
    additional_field_3: "",
    additional_field_4: "",
};

const connectionModalReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CONNECTION_MODAL:
            return {
                ...state,
                connectionModalOpened: true,
                connectionModalType: 'add',
                connectionID: 0,
            };

        case EDIT_CONNECTION_MODAL:
            return {
                ...state,
                connectionModalOpened: true,
                connectionModalType: 'edit',
                product_id: action.connection.product_id ? action.connection.product_id : 0,
                category_id: action.connection.category_id ? action.connection.category_id : 0,
                price: action.connection.price ? action.connection.price : 0,
                currency_symbol: action.connection.currency_symbol ? action.connection.currency_symbol : "",
                script: action.connection.script ? action.connection.script : "",

                connectionID: action.connection.id ? action.connection.id : "",
                website: action.connection.website ? action.connection.website : "",
                additional_field_1: action.connection.additional_field_1 ? action.connection.additional_field_1 : "",
                additional_field_2: action.connection.additional_field_2 ? action.connection.additional_field_2 : "",
                additional_field_3: action.connection.additional_field_3 ? action.connection.additional_field_3 : "",
                additional_field_4: action.connection.additional_field_4 ? action.connection.additional_field_4 : "",
            };

        case CLOSE_CONNECTION_MODAL:
            return {
                ...state,
                connectionModalOpened: false,
                connectionModalType: '',

                isLoaded: false,

                categories: [],
                products: [],

                connectionID: 0,
                website: "",
                category_id: 0,
                product_id: 0,
                price: 0,
                script: '',
                currency_symbol: "",

                additional_field_1: "",
                additional_field_2: "",
                additional_field_3: "",
                additional_field_4: "",
            };

        case UPDATE_CONNECTION_INFO:
            return {
                ...state,
                [action.name]: action.value
            };

        case LOAD_CONNECTION_INFO:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export const updateConnectionInfoCreator = (name, value) => ({
    type: UPDATE_CONNECTION_INFO,
    name: name,
    value: value
});


export const addConnectionModalCreator = () => ({type: ADD_CONNECTION_MODAL});
export const editConnectionModalCreator = (connection) => ({type: EDIT_CONNECTION_MODAL, connection: connection});
export const closeConnectionModalCreator = () => ({type: CLOSE_CONNECTION_MODAL});
export const loadConnectionInfoCreator = (connection) => ({type: LOAD_CONNECTION_INFO, connection: connection});


export default connectionModalReducer;