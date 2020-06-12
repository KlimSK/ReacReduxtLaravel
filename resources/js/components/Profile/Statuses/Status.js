import React, {Component} from "react";
import {Button, Icon} from "semantic-ui-react";


export default class Status extends Component {

    constructor(props){
        super(props);

        this.onDoubleClick = this.onDoubleClick.bind(this);
    }

    onDoubleClick(){
        this.props.editStatusModal(this.props.status.id);
    }

    render() {
        return (
            <tr onDoubleClick={this.onDoubleClick}>
                <td className="text-align-center">
                    <p>{this.props.status.id}</p>
                </td>
                <td className="status-cell">
                    <Button className="status" style={{
                        backgroundColor: this.props.status.color,
                        color: this.props.status.colorText,
                    }}>
                        {this.props.status.name}
                    </Button>
                </td>
                <td>
                    <span className="item">
                        { this.props.status.locked ? <Icon  name='lock' /> : '' }
                        {this.props.status.name}
                        </span>
                </td>
                <td className="text-align-center">
                    <Button circular style={{
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        padding: "1px 6px",
                        backgroundColor: this.props.status.color,
                    }}/>
                </td>

                <td className="text-align-center">
                    <Button circular style={{
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        padding: "1px 6px",
                        backgroundColor: this.props.status.colorText,
                    }}/>
                </td>
            </tr>
        )
    }
}