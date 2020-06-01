import {combineReducers, createStore} from "redux";
import productsReducer from "./productsReducer";
import productModalReducer from "./productModalReducer";


let reducers = combineReducers({
    productsPage: productsReducer,
    productModal: productModalReducer
});

let store = createStore(reducers);


export default store;