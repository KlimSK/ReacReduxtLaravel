import {combineReducers, createStore} from "redux";
import productsReducer from "./productsReducer";
import productModalReducer from "./productModalReducer";
import currenciesReducer from "./currenciesReducer";
import currencyModalReducer from "./currencyModalReducer";
import categoriesReducer from "./categoriesReducer";
import categoryModalReducer from "./categoryModalReducer";
import statusesReducer from "./statusesRecuder";
import statusModalReducer from "./statusModalReducer";


let reducers = combineReducers({
    productsPage: productsReducer,
    productModal: productModalReducer,
    currenciesPage: currenciesReducer,
    currencyModal: currencyModalReducer,
    categoriesPage: categoriesReducer,
    categoryModal: categoryModalReducer,
    statusesPage: statusesReducer,
    statusModal: statusModalReducer
});

let store = createStore(reducers);


export default store;