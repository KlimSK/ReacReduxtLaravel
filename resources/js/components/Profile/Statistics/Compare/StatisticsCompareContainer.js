import React from "react";
import {connect} from "react-redux";
import {mainTableHeight} from "../../inc/tableFunctions";
import {getCompareStatistics} from "../../../../src/statisticsFunctions";
import {errors} from "../../../../src/notifications";
import StatisticsCompare from "./StatisticsCompare";
import {changeStatisticsCompareInfoCreator, toggleListOpenCreator} from "../../../../redux/statisticsCompareReducer";

class StatisticsCompareContainer extends React.Component {
    constructor() {
        super();

        this.onFilterSubmit = this.onFilterSubmit.bind(this);
    }


    componentDidMount() {
        mainTableHeight();
    }



    onFilterSubmit() {
        let months = this.props.months;

        let startDate = months.split('-')[0].trim();
        let endDate = months.split('-')[1].trim();

        let params = {
            type: this.props.type,
            startDate: "01." + startDate,
            endDate: "31." + endDate
        };

        console.log(params);

        let changeInfo = this.props.changeInfo;

        getCompareStatistics(params).then(res => {
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


                    data = [...data, {x: sum, y: date, label: sum}]
                });

                changeInfo('chartData', data);
            }
            else
                errors(res)
        });
    }

    render() {
        return <StatisticsCompare months={this.props.months}
                                 type={this.props.type}
                                 lists={this.props.lists}
                                 chartData={this.props.chartData}
                                 toggleListOpen={this.props.toggleListOpen}
                                 changeInfo={this.props.changeInfo}
                                 onFilterSubmit={this.onFilterSubmit}/>
    }
}

let mapStateToProps = state => {
    return {
        months: state.statisticsComparePage.months,
        type: state.statisticsComparePage.type,
        lists: state.statisticsComparePage.lists,
        chartData: state.statisticsComparePage.chartData,
    }
};


let mapDispatchToProps = dispatch => {
    return {

        changeInfo: (name, value) => {
            dispatch(changeStatisticsCompareInfoCreator(name, value));
        },

        toggleListOpen: (name) => {
            dispatch(toggleListOpenCreator(name));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(StatisticsCompareContainer);
