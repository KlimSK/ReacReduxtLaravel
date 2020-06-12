import React, {Component} from "react";

import TableControls from "../inc/TableControls";
import {mainTableHeight, tableRowClick} from "../inc/tableFunctions";
import CurrenciesTableHeader from "./CurrenciesTableHeader";
import Pagination from "../inc/Pagination";
import CurrencyModalContainer from "../Modals/CurrencyModalContainer";
import {getCurrencies} from "../../../src/currenciesFunctions";
import Currency from "./Currency";

export default class Currencies extends Component {

    componentDidMount() {
        mainTableHeight();

        getCurrencies().then(res => {
            this.props.getCurrencies(res);
            tableRowClick();
        });
    }


    render() {

        let rows = this.props.currencies.map((currency, i) => {
            return <Currency editCurrencyModal={this.props.editCurrencyModal} currency={currency} key={i}/>
        });

        return (
            <React.Fragment>
                <div>
                    <TableControls page="currencies" addCurrencyModal={this.props.addCurrencyModal}/>

                    <div className="main-table currency-table">
                        <table className=" ui table blue celled">
                            <CurrenciesTableHeader/>
                            <tbody>
                            {rows}
                            </tbody>
                        </table>
                    </div>

                    <Pagination/>
                </div>

                <CurrencyModalContainer/>
            </React.Fragment>
        )
    }
}