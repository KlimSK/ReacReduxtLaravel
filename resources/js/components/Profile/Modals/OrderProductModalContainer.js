import {connect} from "react-redux";
import {
    closeOrderProductModalCreator,
    loadCategoriesCreator, loadProductsCreator, updateOrderProductInfoCreator
} from "../../../redux/orderProductModalReducer";
import OrderProductModal from "./OrderProductModal";
import {addProductToOrderCreator, updateProductInOrderCreator} from "../../../redux/orderModalReducer";


let mapPropsToState = state => {
    return{
        modalOpened: state.orderProductModal.orderProductModalOpened,
        orderProductInfo: state.orderProductModal
    };
};


let mapDispatchToState = dispatch => {
    return{

        closeOrderProductModal: () => {
            dispatch(closeOrderProductModalCreator());
        },

        loadCategories: (categories) => {
            dispatch(loadCategoriesCreator(categories));
        },

        loadProducts: (products) => {
            dispatch(loadProductsCreator(products))
        },

        updateOrderProductInfo: (name, value) => {
            dispatch(updateOrderProductInfoCreator(name, value))
        },

        addProductToOrder: (product) => {
            dispatch(addProductToOrderCreator(product));
        },

        updateProductInOrder: (id, product) => {
            dispatch(updateProductInOrderCreator(id, product));
        }
    }
};



export const OrderProductModalContainer = connect(mapPropsToState, mapDispatchToState)(OrderProductModal);