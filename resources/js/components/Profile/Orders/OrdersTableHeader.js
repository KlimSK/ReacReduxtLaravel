import React, {Component} from "react";

import {DatesRangeInput} from 'semantic-ui-calendar-react';


export default class OrdersTableHeader extends Component {
    constructor() {
        super();

        this.state = {
            sent: '',
            added: '',
            updated: '',
            passed: ''
        };
    }

    /*handleChange (event, {name, value})  {
        if (this.state.hasOwnProperty(name)) {
            this.setState({[name]: value});
        }
    }*/

    render() {
        const handleChange = (event, {name, value}) => {
            if (this.state.hasOwnProperty(name)) {
                this.setState({[name]: value});
            }
        };

        return (
            <thead>
            <tr>
                <th width="110">Status</th>
                <th width="65">ID</th>
                <th width="200">Customer</th>
                <th width="140">Phone</th>
                <th width="200">Comment</th>
                <th width="110">Price</th>
                <th width="230">Products</th>
                <th width="100">Delivery type</th>
                <th width="200">Address</th>
                <th width="130">Waybill</th>
                <th width="230">Sent</th>
                {/*<th width="200">Waybill status</th>*/}
                <th width="180">Website</th>
                <th width="100">utm_source</th>
                <th width="200">utm_medium</th>
                <th width="125">utm_term</th>
                <th width="140">utm_content</th>
                <th width="145">utm_campaign</th>
                <th width="130">IP</th>
                <th width="170">Additional field 1</th>
                <th width="150">Additional field 2</th>
                <th width="150">Additional field 3</th>
                <th width="150">Additional field 4</th>
            </tr>


            <tr>
                <td></td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>

                    <div className="ui input">
                        <input type="text"/>
                    </div>

                </td>
                <td>

                    <div className="ui input">
                        <input type="text"/>
                    </div>

                </td>
                <td>
                    <div className="ui form calendar-cell">
                        <DatesRangeInput
                            name="sent"
                            placeholder="From - To"
                            value={this.state.sent}
                            iconPosition="left"
                            onChange={handleChange}
                        />
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui form calendar-cell">
                        <DatesRangeInput
                            name="sent"
                            placeholder="From - To"
                            value={this.state.sent}
                            iconPosition="left"
                            onChange={handleChange}
                        />
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
                <td>
                    <div className="ui input">
                        <input type="text"/>
                    </div>
                </td>
            </tr>


            </thead>
        )
    }
}