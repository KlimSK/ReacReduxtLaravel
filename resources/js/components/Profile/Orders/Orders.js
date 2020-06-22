import React, {Component} from 'react';
import TableControls from "../inc/TableControls";
import Pagination from "../inc/Pagination";
import Order from './Order';
import OrdersTableHeader from "./OrdersTableHeader";
import {mainTableHeight, tableRowClick} from "../inc/tableFunctions";
import {getStatuses} from "../../../src/statusesFunctions";
import {OrderModalContainer} from "../Modals/OrderModalContainer";
import {getOrders, getOrdersByStatus} from "../../../src/ordersFunctions";


export default class Orders extends Component {
    constructor() {
        super();

        this.statusClick = this.statusClick.bind(this);
    }


    componentDidMount() {
        mainTableHeight();


        getStatuses().then(res => {
            res = [
                {
                    id: 0,
                    name: "All",
                    color: "#e0e1e2",
                    colorText: "rgba(0,0,0,.9)",
                    amount: res.reduce((a, b) => (a + (parseInt(b['amount']) || 0)), 0)
                },
                ...res
            ];

            this.props.getStatuses(res);


            getOrders().then(res => {
                this.props.getOrders(res);
                tableRowClick();
            })
        });


    }


    statusClick(statusID) {
        if(statusID){
            getOrdersByStatus(statusID)
                .then(res => {
                    this.props.getOrders(res);
                })
        }
        else{
            getOrders().then(res => {
                this.props.getOrders(res);
                tableRowClick();
            })
        }

    }

    render() {

        let orderStatus = this.props.statuses;
        let orderDelivery = this.props.deliveries;


        let rows = [];
        if(this.props.orders.length) {
            rows = this.props.orders.map((order, key) => {
                let status = orderStatus.find((stat) => {
                    return order.status_id == stat.id
                });
                let delivery = orderDelivery.find((del) => {
                    return order.delivery_id == del.id
                });
                return <Order key={key} order={order}
                              status={status} delivery={delivery}
                              statuses={this.props.statuses}
                              editOrderModal={this.props.editOrderModal}/>
            });
        }


        let statuses = [];
        if(this.props.statuses) {
            statuses = this.props.statuses.map((status, key) => {
                return <li key={key}>
                    <a className="button ui mini"
                       onClick={() => this.statusClick(status.id)}
                       style={{backgroundColor: status.color, color: status.colorText}}
                    >{status.name} (<b>{status.amount}</b>)
                    </a>
                </li>
            });
        }

        return (
            <React.Fragment>
                <div>

                    <TableControls page="orders"
                                   statuses={this.props.statuses}
                                   addOrderModal={this.props.addOrderModal}/>

                    <div id="tabs-panel-statusy">
                        <button className="tabs-arrow ui icon button compact blue" id="button-arrow-left-tabs">
                            <i className="ui icon arrow left">&nbsp;</i>
                        </button>
                        <ul id="ul-statusy">
                            {statuses}
                        </ul>


                        <button className="tabs-arrow button ui icon compact blue" id="button-arrow-right-tabs">
                            <i className="icon arrow ui right">&nbsp;</i>
                        </button>
                    </div>


                    <div className="main-table orders-table">
                        <table className=" ui table blue celled">

                            <OrdersTableHeader/>

                            <tbody id="ordersTableRows" className="setBackgroundColorForTd">

                            {rows}

                            </tbody>
                        </table>
                    </div>

                    <Pagination/>
                </div>

                <OrderModalContainer/>


            </React.Fragment>
        )
    }
}