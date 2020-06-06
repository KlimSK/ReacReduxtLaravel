import React from "react";
import Products from "./Products";
import {getProductsCreator, toggleProductModalCreator} from "../../../redux/productsReducer";
import {connect} from "react-redux";
import {
    addProductModalCreator,
    closeProductModalCreator,
    editProductModalCreator
} from "../../../redux/productModalReducer";

let mapStateToProps = (state) => {
    return {
        products: state.productsPage.products,
        productModalOpened: state.productsPage.productModalOpened
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        getProducts: (products) => {
            dispatch(getProductsCreator(products));
        },
        addProductModal: () => {
            dispatch(addProductModalCreator());
        },
        editProductModal: (id) => {
            dispatch(editProductModalCreator(id));
        },
        closeProductModal: () => {
            dispatch(closeProductModalCreator());
        }
    }
};

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);


export default ProductsContainer;