import {connect} from "react-redux";

import CurrencyModal from "../Modals/CurrencyModal";

import {
    closeCurrencyModalCreator,
    loadCurrencyModalCreator,
    updateCurrencyInfoModalCreator
} from "../../../redux/currencyModalReducer";
import {addCurrencyCreator, updateCurrencyCreator} from "../../../redux/currenciesReducer";


let mapStateToProps = (state) => {
    return{
        modalOpened: state.currencyModal.currencyModalOpened,
        currencyInfo: state.currencyModal
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateCurrencyInfo: (name, value) => {
            dispatch(updateCurrencyInfoModalCreator(name, value));
        },

        closeCurrencyModal: () => {
            dispatch(closeCurrencyModalCreator());
        },

        loadCurrencyInfo: (currency) => {
            dispatch(loadCurrencyModalCreator(currency));
        },

        addCurrencyToState: (currency) => {
            dispatch(addCurrencyCreator(currency));
        },

        updateCurrencyInState: (currency) => {
            dispatch(updateCurrencyCreator(currency));
        },
    }
};


const CurrencyModalContainer = connect(mapStateToProps, mapDispatchToProps)(CurrencyModal);

export default CurrencyModalContainer;