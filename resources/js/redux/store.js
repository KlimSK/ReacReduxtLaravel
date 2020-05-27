import {combineReducers, createStore} from "redux";
import productsReducer from "./productsReducer";


let reducers = combineReducers({
    productsPage: productsReducer
});

let store = createStore(reducers);


export default store;