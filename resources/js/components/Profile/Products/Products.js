import React, {Component} from "react";

import TableControls from "../inc/TableControls";
import {mainTableHeight, tableRowClick} from "../inc/tableFunctions";
import ProductsTableHeader from "./ProductsTableHeader";
import Product from "./Product";
import ProductModal from "../Modals/ProductModal";

export default class Products extends Component {


    componentDidMount() {
        mainTableHeight();
        tableRowClick();
        //this.openProductModal();
    }


    /*openProductModal() {
        let thisClass = this;

        $('.main-table.products-table tbody tr').dblclick(function () {
            thisClass.setState({
                productModal: true
            });
        });
    };*/


    render() {
        let rows = this.props.products.map((product, i) => {
            return <Product openProductModal={this.props.openProductModal} product={product} key={i}/>
        });

        return (
            <React.Fragment>
                <div>
                    <TableControls/>
                    <div className="main-table products-table">
                        <table className="ui table blue celled">

                            <ProductsTableHeader/>

                            <tbody>

                            {rows}

                            </tbody>
                        </table>
                    </div>
                </div>


                <ProductModal
                    productModalOpened={this.props.productModalOpened}
                    closeProductModal={this.props.closeProductModal}
                    productValue = "test value"
                />

            </React.Fragment>
        )
    }
}