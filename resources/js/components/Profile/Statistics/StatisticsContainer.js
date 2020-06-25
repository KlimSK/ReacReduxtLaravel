import {connect} from "react-redux";
import Statistics from "./Statistics";

let mapStateToProps = state => {
    return{
        preview: state.statisticsPage.previewData
    }
};


let mapDispatchToProps = dispatch => {
    return{

    }
};




export const StatisticsContainer = connect(mapStateToProps, mapDispatchToProps)(Statistics);