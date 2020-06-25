import React from "react";
import {connect} from "react-redux";
import {mainTableHeight} from "../../inc/tableFunctions";
import {getCustomers, getCustomersStatistics, getProductsStatistics} from "../../../../src/statisticsFunctions";
import {errors} from "../../../../src/notifications";
import StatisticsCustomers from "./StatisticsCustomers";
import {changeStatisticsCustomersInfoCreator, toggleListOpenCreator} from "../../../../redux/statisticsCustomersReducer";

class StatisticsCustomersContainer extends React.Component {
    constructor() {
        super();

        this.onFilterSubmit = this.onFilterSubmit.bind(this);
    }


    componentDidMount() {

        getCustomers().then(res => {
            this.props.changeInfo('customers', res);
        });

        mainTableHeight();
    }



    onFilterSubmit() {
        let params = {
            type: this.props.type,
            customers: this.props.selectedCustomers
        };

        //console.log(params);

        let customersList = this.props.customers;
        let changeInfo = this.props.changeInfo;

        getCustomersStatistics(params).then(res => {
            if (res.status !== 244) {
                console.log(res.data);


                let result = res.data.flat(1);


                let data = [];

                params.customers.forEach(id => {

                    let customer = result.filter(customer => id === customer.customer_id);

                    let sum = 0;
                    if (params.type === 'amount')
                        sum = customer.length;
                    else
                        sum = customer.reduce((a, b) => a + (Number(b.price) || 0), 0);

                    let customerName = customersList.find(customer => id === customer.id)['name'];

                    data = [...data, {x: customerName, y: sum, label: sum}]
                });

                changeInfo('chartData', data);
            }
            else
                errors(res)
        });
    }

    render() {
        return <StatisticsCustomers customers={this.props.customers}
                                    type={this.props.type}
                                    lists={this.props.lists}
                                    chartData={this.props.chartData}
                                    selectedCustomers={this.props.selectedCustomers}
                                    hintValues={this.props.hintValues}
                                    toggleListOpen={this.props.toggleListOpen}
                                    changeInfo={this.props.changeInfo}
                                    onFilterSubmit={this.onFilterSubmit}/>
    }
}

let mapStateToProps = state => {
    return {
        customers: state.statisticsCustomersPage.customers,
        type: state.statisticsCustomersPage.type,
        lists: state.statisticsCustomersPage.lists,
        chartData: state.statisticsCustomersPage.chartData,
        selectedCustomers: state.statisticsCustomersPage.selectedCustomers,
    }
};


let mapDispatchToProps = dispatch => {
    return {

        changeInfo: (name, value) => {
            dispatch(changeStatisticsCustomersInfoCreator(name, value));
        },

        toggleListOpen: (name) => {
            dispatch(toggleListOpenCreator(name));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(StatisticsCustomersContainer);
