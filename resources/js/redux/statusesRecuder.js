const GET_STATUSES = "GET_STATUSES";
const ADD_STATUS = "ADD_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";


let initialState = {
    statuses: []
};


const statusesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATUSES:
            return {
                ...state,
                statuses: action.statuses
            };

        case ADD_STATUS:
            return{
                ...state,
                statuses:[
                    ...state.statuses,
                    action.status
                ]
            };

        case UPDATE_STATUS:
            return {
                ...state,
                statuses: [
                    ...state.statuses.map((status) => {
                        if (action.status.id == status.id)
                            status = action.status;
                        return status;

                    })
                ]
            };
        default:
            return state;
    }
};


export const getStatusesCreator = (statuses) => ({type: GET_STATUSES, statuses: statuses});
export const addStatusCreator = (status) => ({type: ADD_STATUS, status: status});
export const updateStatusCreator = (status) => ({type: UPDATE_STATUS, status: status});


export default statusesReducer;