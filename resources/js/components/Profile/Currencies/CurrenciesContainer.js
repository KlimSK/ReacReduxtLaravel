import {connect} from "react-redux";

import Currencies from "./Currencies";
import {getProductsCreator} from "../../../redux/productsReducer";
import {addProductModalCreator, editProductModalCreator} from "../../../redux/productModalReducer";
import {
    addCurrencyModalCreator,
    closeCurrencyModalCreator,
    editCurrencyModalCreator
} from "../../../redux/currencyModalReducer";
import {getCurrenciesCreator} from "../../../redux/currenciesReducer";


let mapStateToProps = (state) => {
    return{
        currencyModalOpened: state.currencyModal.currencyModalOpened,
        currencies: state.currenciesPage.currencies
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        getCurrencies: (currencies) => {
            dispatch(getCurrenciesCreator(currencies));
        },
        addCurrencyModal: () => {
            dispatch(addCurrencyModalCreator());
        },
        editCurrencyModal: (id) => {
            dispatch(editCurrencyModalCreator(id));
        },
        closeCurrencyModal: () => {
            dispatch(closeCurrencyModalCreator());
        },
    }
};


const CurrenciesContainer = connect(mapStateToProps, mapDispatchToProps)(Currencies);

export default CurrenciesContainer;