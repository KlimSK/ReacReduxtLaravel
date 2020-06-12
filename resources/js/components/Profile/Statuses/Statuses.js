import React, {Component} from "react";
import TableControls from "../inc/TableControls";
import Pagination from "../inc/Pagination";
import Status from "./Status";
import StatusTableHeader from "./StatusTableHeader";
import {StatusModalContainer} from "../Modals/StatusModalContainer";
import {getStatuses} from "../../../src/statusesFunctions";
import {mainTableHeight, tableRowClick} from "../inc/tableFunctions";


export default class Statuses extends Component {

    componentDidMount() {
        mainTableHeight();

        getStatuses().then(res => {
            this.props.getStatuses(res);
            tableRowClick();
        });
    };


    render() {

        let rows = this.props.statuses.map((value, key) => {
            return <Status status={value} key={key} editStatusModal={this.props.editStatusModal}/>;
        });

        return (
            <React.Fragment>
                <div>
                    <TableControls page="statuses" addStatusModal={this.props.addStatusModal}/>
                    <div className="main-table status-table">
                        <table className=" ui table blue celled">
                            <StatusTableHeader/>
                            <tbody>

                            {rows}
                            </tbody>
                        </table>
                    </div>

                    <Pagination/>
                </div>

                <StatusModalContainer/>
            </React.Fragment>
        )
    }
}