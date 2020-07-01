import React, {Component, Fragment} from 'react';
import {Popup} from 'semantic-ui-react';

export default class Order extends Component {
    constructor() {
        super();

        this.onDoubleClick = this.onDoubleClick.bind(this);
    }


    onDoubleClick() {

        let statuses = this.props.statuses.map(status => {
            return {id: status.id, value: status.id, text: status.name};
        });


        this.props.editOrderModal(this.props.order, statuses);
    }

    render() {
        return (
            <tr className="row-white" onDoubleClick={this.onDoubleClick}>
                <td className="status-cell">
                    <div className={`ui button tiny status ${this.props.status.id === 1 ? "blink" : ""} `}
                         style={{
                             backgroundColor: this.props.status.color,
                             color: this.props.status.colorText
                         }}>
                        {this.props.status.name}
                    </div>
                </td>
                <td><p>{this.props.order.id}</p></td>

                <td><p>{this.props.order.customer}</p></td>

                <td><p><i className="ui icon phone"></i> {this.props.order.phone}</p></td>
                <td><p><i className="ui icon info"></i> {this.props.order.comment}</p></td>
                <td className="order-sum">
                    <p>{this.props.order.total_price + " " + (this.props.order.products[0].currency ? this.props.order.products[0].currency : "")}</p></td>
                <td className="order-products">
                    <p>
                        <Fragment>
                            <Popup trigger={
                                <span className="products-counter ui">
                                    {this.props.order.products.reduce((a, b) => a + (parseInt(b['amount']) || 0), 0)}
                                </span>
                            }
                                   on="hover"
                                   inverted
                                   size="tiny"
                                   position="bottom center">
                                <ul style={{padding: "0 0 0 12px", margin: "0", listStyle: 'disc'}}>

                                    {this.props.order.products.map((prod, key) => {
                                        return <li key={key}> {prod.name} ({prod.amount} unit x {prod.price + " "
                                        + (prod.currency ? prod.currency : "")} = {parseFloat(prod.price) * parseInt(prod.amount)}
                                        {(prod.currency ? prod.currency : "")} )
                                        </li>
                                    })}
                                </ul>
                            </Popup>
                        </Fragment>

                        &nbsp;
                        {this.props.order.products.map((prod, key) => {
                            return <span key={key}>{prod.name} ({prod.amount} unit x {prod.price} =
                                {parseFloat(prod.price) * parseInt(prod.amount)} )</span>
                        })}
                    </p>
                </td>

                <td>
                    <p className="flex-block align-items-center">
                        <img src={this.props.delivery.image} alt=""/>
                        {this.props.delivery.text}
                    </p>
                </td>
                <td><p>{this.props.order.address}</p></td>
                <td>
                    <p>{this.props.order.waybill}</p>
                </td>
                {/*<td>
                    <p>
                        sent
                        2019-05-08 <span
                        style={{fontSize: "11px", opacity: "0.7"}}> &nbsp; 00:00:00</span>
                    </p>
                </td>*/}

                {/*<td>
                    <p>
                        later
                        <i className="ui icon clock outline"></i> Нова пошта очікує надходження від
                        відправника
                    </p>
                </td>*/}
                <td>
                    <p>
                        <i className="ui icon globe"></i>
                        {this.props.order.website}
                    </p>
                </td>
                {/*<td><p>{this.props.order.utm_source}</p></td>
                <td><p>{this.props.order.utm_medium}</p></td>
                <td><p>{this.props.order.utm_term}</p></td>
                <td><p>{this.props.order.utm_content}</p></td>
                <td><p>{this.props.order.utm_campaign}</p></td>*/}
                <td><p><i className="ui icon desktop"></i> {this.props.order.ip}</p></td>
                <td><p>{this.props.order.additional_field_1}</p></td>
                <td><p>{this.props.order.additional_field_2}</p></td>
                <td><p>{this.props.order.additional_field_3}</p></td>
                <td><p>{this.props.order.additional_field_4}</p></td>
            </tr>

        )
    }
}