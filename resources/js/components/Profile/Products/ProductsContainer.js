import React from "react";
import Products from "./Products";
import {toggleProductModalCreator} from "../../../redux/productsReducer";
import {connect} from "react-redux";


/*let ProductsContainer = (props) => {


    let state = props.store.getState();

    let openProductModal = () => {
        props.store.dispatch(openProductModalCreator());
    };

    let closeProductModal = () => {
        props.store.dispatch(closeProductModalCreator());
    };


    return (
        <Products
            products={state.productsPage.products}
            openProductModal={openProductModal}
            closeProductModal={closeProductModal}
            productModalOpened={state.productsPage.productModalOpened}
        />
    )

};*/


let mapStateToProps = (state) => {
    return {
        products: state.productsPage.products,
        productModalOpened: state.productsPage.productModalOpened
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        toggleProductModal: () => {
            dispatch(toggleProductModalCreator());
        }
    }
};

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);


export default ProductsContainer;