import React from "react";
import {connect} from "react-redux";
import {mainTableHeight} from "../../inc/tableFunctions";
import {getPeriodStatistics} from "../../../../src/statisticsFunctions";
import {errors} from "../../../../src/notifications";
import {changeStatisticsPeriodInfoCreator, toggleListOpenCreator} from "../../../../redux/statisticsPeriodReducer";
import StatisticsPeriod from "./StatisticsPeriod";
import {getStatuses} from "../../../../src/statusesFunctions";

class StatisticsPeriodContainer extends React.Component {
    constructor() {
        super();

        this.onFilterSubmit = this.onFilterSubmit.bind(this);
    }


    componentDidMount() {

        getStatuses().then(res => {
            this.props.changeInfo('statuses', res);
        });

        mainTableHeight();
    }



    onFilterSubmit() {
        let dates = this.props.dates;

        let startDate = dates.split('-')[0].trim();
        let endDate = dates.split('-')[1].trim();

        let params = {
            type: this.props.type,
            startDate: startDate,
            endDate: endDate,
            status: this.props.status,
        };


        let changeInfo = this.props.changeInfo;

        getPeriodStatistics(params).then(res => {
            if (res.status !== 244) {
                console.log(res.data);

                let result = res.data.data;

                let data = [];

                res.data.keys.forEach(date => {

                    let dates = result.filter(elem => date === elem.date);

                    let sum = 0;
                    if (params.type === 'amount')
                        sum = dates.length;
                    else
                        sum = dates.reduce((a, b) => a + (Number(b.price) || 0), 0);


                    data = [...data, {x: date, y: sum, label: sum}]
                });


                data.length ? changeInfo('chartData', data) : changeInfo('chartData', [{x: '', y: 0}]);
            }
            else
                errors(res)
        });
    }

    render() {
        return <StatisticsPeriod dates={this.props.dates}
                                    type={this.props.type}
                                    lists={this.props.lists}
                                    statuses={this.props.statuses}
                                    status={this.props.status}
                                    chartData={this.props.chartData}
                                    toggleListOpen={this.props.toggleListOpen}
                                    changeInfo={this.props.changeInfo}
                                    onFilterSubmit={this.onFilterSubmit}/>
    }
}

let mapStateToProps = state => {
    return {
        statuses: state.statisticsPeriodPage.statuses,
        status: state.statisticsPeriodPage.status,
        dates: state.statisticsPeriodPage.dates,
        type: state.statisticsPeriodPage.type,
        lists: state.statisticsPeriodPage.lists,
        chartData: state.statisticsPeriodPage.chartData,
    }
};


let mapDispatchToProps = dispatch => {
    return {

        changeInfo: (name, value) => {
            dispatch(changeStatisticsPeriodInfoCreator(name, value));
        },

        toggleListOpen: (name) => {
            dispatch(toggleListOpenCreator(name));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPeriodContainer);
