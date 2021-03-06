import React from "react";
import {connect} from "react-redux";
import ProductModal from "./ProductModal";
import {
    closeProductModalCreator, loadCategoriesCreator, loadCurrenciesCreator,
    loadProductInfoCreator,
    updateProductInfoCreator
} from "../../../redux/productModalReducer";
import {addProductCreator, updateProductCreator} from "../../../redux/productsReducer";


let mapStateToProps = (state) => {
    return {
        productInfo: state.productModal,
        productModalOpened: state.productModal.productModalOpened
    }
};


let mapDispatchToProps = (dispatch) => {
    return{
        updateProductInfo: (name, value) => {
            dispatch(updateProductInfoCreator(name, value));
        },

        closeProductModal: () => {
            dispatch(closeProductModalCreator());
        },

        addProductToState: (product) => {
            dispatch(addProductCreator(product));
        },

        updateProductInState: (product) => {
            dispatch(updateProductCreator(product));
        },

        loadProductInfo: (product) => {
            dispatch(loadProductInfoCreator(product));
        },

        loadCategories: (categories) => {
            dispatch(loadCategoriesCreator(categories));
        },

        loadCurrencies: (currencies) => {
            dispatch(loadCurrenciesCreator(currencies));
        }
    }
};

export const ProductModalContainer = connect(mapStateToProps, mapDispatchToProps)(ProductModal);