const ADD_CONNECTION = "ADD_CONNECTION";
const GET_CONNECTIONS = "GET_CONNECTIONS";
const UPDATE_CONNECTION = "UPDATE_CONNECTION";


let initialState = {
    connections: [],
};


const connectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONNECTION:
            return {
                ...state,
                connections: [
                    action.connection,
                    ...state.connections
                ]
            };

        case GET_CONNECTIONS:
            return {
                ...state,
                connections: action.connections
            };

        case UPDATE_CONNECTION:
            return {
                ...state,
                connections: [
                    ...state.connections.map(connection => {
                        if (action.connection.id == connection.id)
                            connection = action.connection;
                        return connection;
                    })
                ]
            };

        default:
            return state;

    }
};


export const addConnectionCreator = (connection) => ({type: ADD_CONNECTION, connection: connection});
export const updateConnectionCreator = (connection) => ({type: UPDATE_CONNECTION, connection: connection});
export const getConnectionsCreator = (connections) => ({type: GET_CONNECTIONS, connections: connections});

export default connectionReducer;