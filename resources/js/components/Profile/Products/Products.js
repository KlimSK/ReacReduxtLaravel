import React, {Component} from "react";

import TableControls from "../inc/TableControls";
import {mainTableHeight, tableRowClick} from "../inc/tableFunctions";
import ProductsTableHeader from "./ProductsTableHeader";
import Product from "./Product";
import {ProductModalContainer} from "../Modals/ProductModalContainer";
import {getProducts} from "../../../src/productsFunctions";

export default class Products extends Component {


    componentDidMount() {
        mainTableHeight();
        //this.openProductModal();

        getProducts().then(res => {
            this.props.getProducts(res);
        });
    }

    componentDidUpdate(){
        tableRowClick();
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
              return <Product editProductModal={this.props.editProductModal} product={product} key={i}/>
          });

        return (
            <React.Fragment>
                <div>
                    <TableControls page="products" addProductModal={this.props.addProductModal}/>
                    <div className="main-table products-table">
                        <table className="ui table blue celled">

                            <ProductsTableHeader />

                            <tbody>

                            {rows}

                            </tbody>
                        </table>
                    </div>
                </div>


                <ProductModalContainer/>

            </React.Fragment>
        )
    }
}