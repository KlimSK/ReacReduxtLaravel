import React, {Component} from 'react';
import noPhoto from "../../../../img/no_foto-120x100.png";


export default class Product extends Component {
    render(){
        return(
            <tr onDoubleClick={this.props.openProductModal}>
                <td><p>{this.props.product.id}</p></td>
                <td className="product-photo">
                    <img src={this.props.product.photo ? "/images/products/" + this.props.product.photo : noPhoto} alt=""/>
                </td>
                <td><p>{this.props.product.name}</p></td>
                <td>
                    {this.props.product.model}
                </td>
                <td></td>
                <td>
                    {this.props.product.category}
                </td>
                <td className="order-sum"><p>{this.props.product.price}</p></td>
                <td>
                    <p>
                        {this.props.product.currency}
                    </p>
                </td>
                <td className="product-status text-align-center">
                    <div className="ui toggle checkbox green">
                        <input type="checkbox" name="public"/>
                        <label htmlFor=""></label>
                    </div>

                </td>
                <td className="order-sum">
                    <p>400.00</p>
                </td>
                <td className="order-sum">
                    <p className="red-text">{this.props.product.amount}</p>
                </td>
                <td className="order-sum">
                    <p className="blue-text">3</p>
                </td>
                <td>

                </td>

                <td className="order-sum">
                    <p>
                        15000.00
                    </p>
                </td>
            </tr>
        )
    }
}