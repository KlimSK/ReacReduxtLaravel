import {getConnectionsCreator} from "../../../redux/connectionReducer";
import {addConnectionModalCreator, editConnectionModalCreator} from "../../../redux/connectionModalReducer";
import React from "react";
import {connect} from "react-redux";
import {mainTableHeight, tableRowClick} from "../inc/tableFunctions";
import Connections from "./Connections";
import {getConnections} from "../../../src/connectionFunctions";

class ConnectionsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        getConnections().then(res => {
            this.props.getConnections(res);
            tableRowClick();
        });

        mainTableHeight();
    }

    render() {
        return <Connections connections={this.props.connections}
                            addConnectionModal={this.props.addConnectionModal}
                            editConnectionModal={this.props.editConnectionModal}/>
    }
}


let mapStateToProps = state => {
    return {
        connections: state.connectionsPage.connections,
    }
};


let mapDispatchToProps = dispatch => {
    return {
        getConnections: (connections) => {
            dispatch(getConnectionsCreator(connections));
        },

        addConnectionModal: () => {
            dispatch(addConnectionModalCreator());
        },

        editConnectionModal: (connection) => {
            dispatch(editConnectionModalCreator(connection));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectionsContainer);