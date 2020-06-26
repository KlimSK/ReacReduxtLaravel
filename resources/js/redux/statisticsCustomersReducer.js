const TOGGLE_LIST_OPEN = "TOGGLE_LIST_OPEN";
const CHANGE_STATISTICS_CUSTOMERS_INFO = "CHANGE_STATISTICS_CUSTOMERS_INFO";

let initialState = {
    chartData: [
        {x: "", y: 0},
    ],
    customers: [],

    selectedCustomers: [1, 2, 3, 4, 5],
    type: 'amount', //amount or income

    lists: {
        types: true,
        customers: true
    }

};


const statisticsCustomersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LIST_OPEN:
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [action.name]: !state.lists[action.name]
                }
            };
        case CHANGE_STATISTICS_CUSTOMERS_INFO:
            return{
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }

};


export const toggleListOpenCreator = name => ({type: TOGGLE_LIST_OPEN, name: name});

export const changeStatisticsCustomersInfoCreator = (name, value) => ({
    type: CHANGE_STATISTICS_CUSTOMERS_INFO,
    name: name,
    value: value,
});

export default statisticsCustomersReducer;