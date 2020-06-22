import {connect} from "react-redux";
import OrderModal from "./OrderModal";
import {
    closeOrderModalCreator, loadOrderInfoCreator, loadStatusesCreator, removeProductCreator,
    updateOrderInfoCreator
} from "../../../redux/orderModalReducer";
import {addOrderCreator, updateOrderCreator} from "../../../redux/ordersReducer";
import {addOrderProductModalCreator, editOrderProductModalCreator} from "../../../redux/orderProductModalReducer";


let mapStateToProps = (state) => {
    return {
        orderInfo: state.orderModal,
        modalOpened: state.orderModal.orderModalOpened
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        closeOrderModal: () => {
            dispatch(closeOrderModalCreator());
        },

        updateOrderInfo: (name, value) => {
            dispatch(updateOrderInfoCreator(name, value));
        },

        addOrderToState: (order) => {
            dispatch(addOrderCreator(order));
        },

        loadOrderInfo: (order) => {
            dispatch(loadOrderInfoCreator(order));
        },

        updateOrderInState: (order) => {
            dispatch(updateOrderCreator(order));
        },

        loadStatuses: (statuses) => {
            dispatch(loadStatusesCreator(statuses));
        },

        addOrderProductModal: () => {
            dispatch(addOrderProductModalCreator());
        },

        editOrderProductModal: (product) => {
            dispatch(editOrderProductModalCreator(product));
        },

        removeProduct: (id) => {
            dispatch(removeProductCreator(id));
        }
    }
};


export const OrderModalContainer = connect(mapStateToProps, mapDispatchToProps)(OrderModal);