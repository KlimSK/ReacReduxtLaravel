const TOGGLE_LIST_OPEN = "TOGGLE_LIST_OPEN";
const CHANGE_STATISTICS_COMPARE_INFO = "CHANGE_STATISTICS_COMPARE_INFO";

let initialState = {
    chartData: [
        {x: 0, y: ""},
    ],
    months: '03.2020 - 06.2020',

    type: 'amount', //amount or income

    lists: {
        types: true,
        dates: true
    }

};


const statisticsCompareReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LIST_OPEN:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [action.name]: !state.lists[action.name]
                }
            };
        case CHANGE_STATISTICS_COMPARE_INFO:
            return{
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }

};


export const toggleListOpenCreator = name => ({type: TOGGLE_LIST_OPEN, name: name});

export const changeStatisticsCompareInfoCreator = (name, value) => ({
    type: CHANGE_STATISTICS_COMPARE_INFO,
    name: name,
    value: value,
});

export default statisticsCompareReducer;