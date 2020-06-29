import React from 'react';
import TableControls from "../inc/TableControls";
import Pagination from "../inc/Pagination";
import ConnectionsTableHeader from "./ConnectionTableHeader";
import ConnectionModalContainer from "../Modals/ConnectionModalContainer";
import Connection from "./Connection";
//import {getConnections, getConnectionsByStatus} from "../../../src/connectionsFunctions";


let Connections = props => {


    let rows = props.connections.map(con => {
        return <Connection key={con.id} editConnectionModal={props.editConnectionModal} connection={con}/>
    });

    return <div>
        <React.Fragment>
            <div>
                <TableControls page="connections"
                               addConnectionModal={props.addConnectionModal}/>

                <div className="main-table connections-table">
                    <table className=" ui table blue celled">

                        <ConnectionsTableHeader/>

                        <tbody id="connectionsTableRows" className="setBackgroundColorForTd">
                        {rows}
                        </tbody>
                    </table>
                </div>

                <Pagination/>
            </div>

            <ConnectionModalContainer/>


        </React.Fragment>
    </div>
};

export default Connections;