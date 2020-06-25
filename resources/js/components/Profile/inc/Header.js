import React, {Component, Fragment} from 'react';
import {Popup} from 'semantic-ui-react';
import {logout} from "../../Auth/UserFunctions";


export default class Header extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        const imageBox = {
            position: "relative",
            border: "3px dashed #EEE",
            padding: "2px",
            height: '60px',
            width: '65px',
            textAlign: "center",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '98%',
            backgroundColor: '#FFF',
            backgroundImage: "url(img/empty_avatar_40x40.png)"
        };

        return (

            <header>
                <div className="header-info">

                </div>

                <div className="header-controls">

                    <Fragment>
                        <Popup
                            fluid
                            trigger={<div className="user-controls control-block ui"  style={{paddingRight: "20px"}}>
                                <i className="fas fa-user-circle">&nbsp;</i>
                                <span>{this.props.username}</span>
                            </div>}
                            on="click"
                            className="header-user-info"
                        >
                            <table align="center" border="0">
                                <tbody>
                                <tr>
                                    <td colSpan="3" className="user-info-logout"><a href="" onClick={logout}><i
                                        className="fas fa-power-off"></i> Выйти</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </Popup>
                    </Fragment>
                </div>
            </header>

        )
    }
};