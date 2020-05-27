import React, {Component} from 'react';
import TableControls from "../inc/TableControls";
import Statuses from "./Statuses";
import Pagination from "../inc/Pagination";
import OrderModal from "../Modals/OrderModal";
import OrdersTableRow from './OrdersTableRow';
import {Sugar} from 'react-preloaders';
import OrdersTableHeader from "./OrdersTableHeader";
import {mainTableHeight, tableRowClick} from "../inc/tableFunctions";
import ProductModal from "../Modals/ProductModal";


export default class OrdersTable extends Component {
    constructor() {
        super();

        this.state = {
            orderDetails: false,
            rows: [
                {key: '1', value: '1'},
                {key: '2', value: '2'},
                {key: '3', value: '3'},
                {key: '4', value: '4'},
                {key: '5', value: '5'},
                {key: '6', value: '6'},
                {key: '7', value: '7'},
                {key: '8', value: '8'},
                {key: '9', value: '8'},
                {key: '10', value: '10'},
                {key: '11', value: '11'},
                {key: '12', value: '12'},
                {key: '13', value: '13'},
                {key: '14', value: '14'},
            ]
        };

    }

    componentDidMount() {
        tableRowClick();
        this.orderModal();
        mainTableHeight();
    }

    orderModal() {
        let thisClass = this;

        $('.main-table.orders-table tbody tr').dblclick(function () {
            thisClass.setState({
                orderDetails: true
            });
        });

        /*var secondaryModal = $('.secondary-modal');


        $('.open-secondary-modal').click(function () {
            var id = $(this).attr('data-modal-target');
            $('#' + id)
                .modal({

                    allowMultiple: true,
                    closable: true,
                    centered: true,
                    onShow: function () {
                        $('.modal-order').dimmer('show');
                    },
                    onHide: function () {
                        $('.modal-order').dimmer('hide');
                    }
                })
                .modal('show');
        });

        this.closeModalByDimmer(secondaryModal);*/
    }

    productModal() {
        $('.main-table.products-table tbody tr').dblclick(function () {
            $('.modal-product.modal')
                .modal({})
                .modal('show');
        });
    }

    categoryModal() {
        $('.main-table.category-table tbody tr').dblclick(function () {
            $('.modal-category.modal')
                .modal({})
                .modal('show');
        });
    }

    manufacturersModal() {
        $('.main-table.manufacturers-table tbody tr').dblclick(function () {
            $('.modal-manufacturers.modal')
                .modal({})
                .modal('show');
        });
    }

    render() {

        let rows = this.state.rows.map((value, key) => {
            return <OrdersTableRow key={key} value={value}/>
        });

        return (
            <React.Fragment>
                <div>
                    <TableControls/>
                    <Statuses/>

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

                <OrderModal
                    modalOpen={this.state.orderDetails}
                    handleClose={
                        () => {
                            this.setState({orderDetails: false})
                        }
                    }
                    productValue="test value"
                />


            </React.Fragment>
        )
    }
}