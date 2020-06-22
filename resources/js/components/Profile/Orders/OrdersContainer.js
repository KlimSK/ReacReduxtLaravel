import {getOrdersCreator, getStatusesToOrdersCreator} from "../../../redux/ordersReducer";
import {addOrderModalCreator, editOrderModalCreator} from "../../../redux/orderModalReducer";
import Orders from "./Orders";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        orders: state.ordersPage.orders,
        statuses: state.ordersPage.statuses,
        deliveries: state.ordersPage.deliveries,
    }
};


let mapDispatchToProps = dispatch => {
    return {
        getOrders: (orders) => {
            dispatch(getOrdersCreator(orders));
        },

        getStatuses: (statuses) => {
            dispatch(getStatusesToOrdersCreator(statuses));
        },

        addOrderModal: (statuses) => {
            dispatch(addOrderModalCreator(statuses));
        },

        editOrderModal: (order, statuses) => {
            dispatch(editOrderModalCreator(order, statuses));
        }
    }
};


export const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders);