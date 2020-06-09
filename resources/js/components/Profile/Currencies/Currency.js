import React, {Component} from "react";


export default class Currency extends Component {
    constructor(props) {
        super(props);

        this.onDoubleClick = this.onDoubleClick.bind(this);
    }

    onDoubleClick(){
        this.props.editCurrencyModal(this.props.currency.id);
    }

    render() {
        return (
            <tr onDoubleClick={this.onDoubleClick}>
                <td>
                    <p>{this.props.currency.id}</p>
                </td>
                <td>
                    <p>{this.props.currency.name}</p>
                </td>
                <td>
                    <p>{this.props.currency.symbol}</p>
                </td>
                <td>
                    <p>{this.props.currency.shortName}</p>
                </td>

            </tr>
        )
    }

}