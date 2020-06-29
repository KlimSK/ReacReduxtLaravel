import {combineReducers, createStore} from "redux";
import productsReducer from "./productsReducer";
import productModalReducer from "./productModalReducer";
import currenciesReducer from "./currenciesReducer";
import currencyModalReducer from "./currencyModalReducer";
import categoriesReducer from "./categoriesReducer";
import categoryModalReducer from "./categoryModalReducer";
import statusesReducer from "./statusesRecuder";
import statusModalReducer from "./statusModalReducer";
import ordersReducer from "./ordersReducer";
import orderModalReducer from "./orderModalReducer";
import orderProductModalReducer from "./orderProductModalReducer";
import statisticsReducer from "./statisticsReducer";
import statisticsProductsReducer from "./statisticsProductsReducer";
import statisticsCustomersReducer from "./statisticsCustomersReducer";
import statisticsPeriodReducer from "./statisticsPeriodReducer";
import statisticsCompareReducer from "./statisticsCompareReducer";
import connectionReducer from "./connectionReducer";
import connectionModalReducer from "./connectionModalReducer";


let reducers = combineReducers({
    productsPage: productsReducer,
    productModal: productModalReducer,
    currenciesPage: currenciesReducer,
    currencyModal: currencyModalReducer,
    categoriesPage: categoriesReducer,
    categoryModal: categoryModalReducer,
    statusesPage: statusesReducer,
    statusModal: statusModalReducer,
    ordersPage: ordersReducer,
    orderModal: orderModalReducer,
    orderProductModal: orderProductModalReducer,
    statisticsPage: statisticsReducer,
    statisticsProductsPage: statisticsProductsReducer,
    statisticsCustomersPage: statisticsCustomersReducer,
    statisticsPeriodPage: statisticsPeriodReducer,
    statisticsComparePage: statisticsCompareReducer,
    connectionsPage: connectionReducer,
    connectionModal: connectionModalReducer
});

let store = createStore(reducers);


export default store;