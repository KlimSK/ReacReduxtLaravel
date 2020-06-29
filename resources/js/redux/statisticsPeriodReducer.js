const TOGGLE_LIST_OPEN = "TOGGLE_LIST_OPEN";
const CHANGE_STATISTICS_PERIOD_INFO = "CHANGE_STATISTICS_PERIOD_INFO";

let initialState = {
    chartData: [
        {x: "", y: 0},
    ],
    dates: '17.06.2020 - 28.06.2020',
    statuses: [],

    status: 9999,

    type: 'amount', //amount or income

    lists: {
        types: true,
        dates: true,
        statuses: false
    }

};


const statisticsPeriodReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LIST_OPEN:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [action.name]: !state.lists[action.name]
                }
            };
        case CHANGE_STATISTICS_PERIOD_INFO:
            return{
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }

};


export const toggleListOpenCreator = name => ({type: TOGGLE_LIST_OPEN, name: name});

export const changeStatisticsPeriodInfoCreator = (name, value) => ({
    type: CHANGE_STATISTICS_PERIOD_INFO,
    name: name,
    value: value,
});

export default statisticsPeriodReducer;