import React from "react";
import Products from "./Products";
import {closeProductModalCreator, openProductModalCreator} from "../../../redux/productsReducer";


let ProductsContainer = (props) => {


    let state = props.store.getState();

    let openProductModal = () => {
        let action = openProductModalCreator();
        props.store.dispatch(action);
    };

    let closeProductModal = () => {
        let action = closeProductModalCreator();
        props.store.dispatch(action);
    };


    return (
        <Products
            products={state.productsPage.products}
            openProductModal={openProductModal}
            closeProductModal={closeProductModal}
            productModalOpened={state.productsPage.productModalOpened}
        />
    )

};


export default ProductsContainer;