import React from "react";
import {connect} from "react-redux";
import ProductModal from "./ProductModal";
import {updateProductInfoCreator} from "../../../redux/productModalReducer";
import {toggleProductModalCreator} from "../../../redux/productsReducer";


let mapStateToProps = (state) => {
    return {
        productInfo: state.productModal,
        productModalOpened: state.productsPage.productModalOpened
    }
};


let mapDispatchToProps = (dispatch) => {
    return{
        updateProductInfo: () => {
            dispatch(updateProductInfoCreator());
        },

        closeProductModal: () => {
            dispatch(toggleProductModalCreator());
        }
    }
};

export const ProductModalContainer = connect(mapStateToProps, mapDispatchToProps)(ProductModal);